const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1', (req, res) => {
  res.json({
    status: 200,
    message: 'testing route'
  })
})

app.get('/api/v2', (req, res) => {
  res.json({
    status: 200,
    message: 'testing route versi 2'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})