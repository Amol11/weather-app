const request = require('request');

var geocodeAddress = (ip) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.ipgeolocation.io/ipgeo?apiKey=b992d295bab24c0bbd67c8fcfd0375bc&ip=${ip}`,
            json: true
        }, (error, response, body) => {
            if(error){
                reject('Unable to connect to the server.')
            }
            else if(body.message){
                reject('Unable to find the given address.');
            } else {
                resolve({
                    ip: body.ip,
                    country: body.country_name,
                    state: body.state_prov,
                    city: body.city,
                    zipcode: body.zipcode,
                    latitude: body.latitude,
                    longitude: body.longitude
                });
            }
        });
    });
};

geocodeAddress('1.1.1.1').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});