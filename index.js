require('dotenv').config()

const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login' , (req,res) => {
    res.send('<h1>please chai lao ')
})

app.get('/youtube', (req,res) => {
    res.send('SAURAV')
} )

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})