import geoData from './utils/geoCode.js';
import weatheReport from './utils/weatherReport.js';


const getWeather = async(location)=>{
        try {
        const coords = await geoData(location);
        console.log('Coordinates:', coords);

        const getWeather = await weatheReport(coords);
        console.log('Weather Report:', getWeather);
    } catch (error) {
        console.log('Error:', error.message);
    }
}

export default getWeather;