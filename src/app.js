var geocode = require('../src/services/geocode')
var forecast = require('../src/services/forecast')

geocode((error, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log(response)
    }
})

forecast((error, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log(response)
    }
})