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

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address...'
        })
    }

    geocode(req.query.address, (error, geocodeResponse) => {
        if (error) return res.send({ error })

        forecast(geocodeResponse.latitude, geocodeResponse.longitude, (error, forecastResponse) => {
            if (error) return res.send({ error })

            res.send({
                forecast: forecastResponse,
                location: geocodeResponse.location,
            })
        })
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})