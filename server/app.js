const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8080

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

app.listen(PORT, () => {
    console.log('server listening on port: ' + PORT)
})