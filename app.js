const express = require('express')
const app = express()
app.get('/', (req, res) => {res.send('Web squad project')})
app.listen(4000)