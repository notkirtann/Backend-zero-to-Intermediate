import request from 'request'
import chalk from 'chalk'

//mapbox api working
const geoData= (location,callback)=>{
    let searchText = location;
    
    const mapboxKey ='pk.eyJ1Ijoia2lydGFuLXdlYXcRoZXItYXBwIiwiYSI6ImNtaDRuazFzdDFoYmdkM3NibXNoeXUzdDcifQ.9tcj2Hp3IU06S9LqT7APNw';

    const mapboxUrl = `https://api.mapbox.com/search/geocode/v6/forward?q=${searchText}&access_token=${mapboxKey}&limit=1`

    request({url:mapboxUrl, json:true},(error,response)=>{
        if(error){
            callback(chalk.red('error connecting to MapBox api'),undefined);
        }else if(response.body.features.length===0){
            callback(chalk.blue('Invalid Input/location not able to find'),undefined);
        } else {
            console.log(response.body.features[0].properties.full_address);
            let geoLocation = response.body.features[0].geometry.coordinates;
            callback(undefined,geoLocation)
        }
    })
}

export default geoData;