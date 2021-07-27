const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tmdwjs:qwert12345@cluster0.wcno7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))
    
app.get('/', (req, res) => {
  res.send('Hello World! test1111')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})