var express = require('express')
var path = require('path')
var geocode = require('../src/services/geocode')
var forecast = require('../src/services/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index')
})

// geocode((error, response) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(response)
//     }
// })

// forecast((error, response) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(response)
//     }
// })

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})