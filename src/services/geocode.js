var request = require('request')

var geocode = (callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/boston.json?types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1IjoicmFiYXJiYSIsImEiOiJjazVtdWx4bmEwNWpxM2Zuczh0eDFucWlyIn0.FemMMOhl5ceW-Lx96TGPFQ'

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to connect to services')
        } else if (response.body.message) {
            callback(response.body.message)
        }
        else if (response.body.features.length === 0) {
            callback('Unable to find location')
        } else {
            var feature = response.body.features[0]

            callback(undefined, {
                longitude: feature.center[0],
                latitude: feature.center[1],
                location: feature.place_name
            })
        }
    })
}

module.exports = geocode



