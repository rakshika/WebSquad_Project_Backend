import everyone from './users.js'

let users = everyone
const findAllUsers = (req,res) => {
    // const type = req.query.type
    // if(type) {
    //     const usersOfType = users
    //         .filter(user => user.type === type)
    //     res.json(usersOfType)
    //     return
    // }
    res.json(users)
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users
      .find(u => u._id === userId);
    res.json(user);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(user =>
      user._id != userId);
    res.sendStatus(200);
}
  
const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updates = req.body;
    users = users.map((usr) =>
      usr._id === userId ?
        {...usr, ...updates} :
        usr
    );
    res.sendStatus(200);
}

const usersController = (app) => {

    app.post('/users', createUser)
    app.get('/users', findAllUsers)
    app.get('/users/:uid', findUserById);
    app.delete('/users/:uid', deleteUser)
    app.put('/users/:uid', updateUser)

    // app.post('/register', register)
    // app.post('/login', login)
    // app.post('/logout', logout)
}

export default usersController;