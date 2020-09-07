const path = require('path')
const express = require('express')

//const dirPath = path.join(__dirname)

const app = express()
//console.log(dirPath)
app.use(express.static(path.join(__dirname)))

app.get('/api/file/upload', (req, res) => {
    res.send('<h1>Welcome to my website</h1>')
})

app.get('/api/file/meta', (req, res) => {
    res.send(src = "Google.PNG")
})

// app.get('/about', (req, res) => {
//     res.send('About my website')
// })

app.listen(3000, () => {
    console.log('Server is up & running at Port 3000')
})