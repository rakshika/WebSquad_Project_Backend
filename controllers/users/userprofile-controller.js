import people from './users.js';
import * as userDao from './users-dao.js';
let users = people


const createUser = async (req, res) => {
  const user = req.body
  const actualUser = await userDao.createUser(user)
  res.json(actualUser)
}

const findUserById = async (req, res) => {
  const uid = req.params.uid
  const user = await userDao.findUserById(uid)

  console.log(user);
  if (user) {
      res.json(user)
      return
  }
  res.sendStatus(404);

}

const updateUser = async (req, res) => {
  const uid = req.params.uid
  const updates = req.body
  const status = await userDao.updateUser(uid,  updates)
  res.json(status)
}
const UserController = (app) =>{
  app.get('/api/users/:uid', findUserById);
  app.put('/api/users/:uid', updateUser);
  app.post('/api/users/', createUser);

}

export default UserController