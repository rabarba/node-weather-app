var request = require('request')

var forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/22a633e26a69311b1b9fa0a868f69f40/' + latitude + ',' + longitude + '?units=si'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to services')
        } else if (response.body.error) {
            callback(response.body.error)
        } else {
            const currentlyData = response.body.currently
            callback(undefined, currentlyData.summary + '. It is currently ' + currentlyData.temperature + ' degrees out.There is a ' + currentlyData.precipProbability + '% chance of rain.')
        }
    })
}


module.exports = forecast