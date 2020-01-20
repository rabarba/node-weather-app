var geocode = require('../src/services/geocode')

geocode((error, { longitude, latitude, location }) => {
    if (error) {
        console.log(error)
    } else {
        console.log(location, longitude, latitude)
    }
})