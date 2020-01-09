const request = require('request');

var geocodeAddress = (ip, callback) => {
    request({
        url: `https://api.ipgeolocation.io/ipgeo?apiKey=YourAPIKeyHere&ip=${ip}`,
        json: true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to the server.')
        }
        else if(body.message){
            callback('Unable to find the given address.');
        } else {
            callback(undefined, {
                ip: body.ip,
                country: body.country_name,
                state: body.state_prov,
                city: body.city,
                zipcode: body.zipcode,
                latitude: body.latitude,
                longitude: body.longitude
            })
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;