import geoData from './utlis/geoCode.js';
import weatherReport from './utlis/weatherReport.js';
import chalk from 'chalk';

//Combine both APIs into one function
const getWeather = (location, callback) => {
    geoData(location, (error, geoCoords) => {
        if (error) {
            callback(error, undefined);
        } else {
            console.log(chalk.green('Coordinates fetched:'), geoCoords);
            weatherReport(geoCoords, (error, weatherData) => {
                if (error) {
                    callback(error, undefined);
                } else {
                    callback(undefined, weatherData);
                }
            });
        }
    });
};

export default getWeather;
