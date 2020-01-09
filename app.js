const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'IPaddress',
            describe: 'IP Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

    geocode.geocodeAddress(argv.IPaddress, (errorMessage, results) => {
        if(errorMessage){
            console.log(errorMessage);
        }
        else{
            console.log(`Fetching weather details for IP Address: ${results.ip}`);
            weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) => {
                if(errorMessage){
                    console.log(errorMessage);
                }
                else{
                    console.log(`Showing weather results for ${results.city}, ${results.state}, ${results.country}, zip: ${results.zipcode}`);
                    console.log(`Its currently ${weatherResults.temperature}*F. It feels like ${weatherResults.apparentTemperature}*F`);
                }
            });
        }
    });


