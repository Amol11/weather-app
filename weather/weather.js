const request = require('request');

var getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/YourAPIKeyHere/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else if(error){
            callback('Unable to connect to darksky.io servers.')
        }
        else if(body.error){
            callback(body.error);
        }
        else{
            callback('Unable to fetch weather information.');
        }
    })
}

module.exports.getWeather = getWeather;
