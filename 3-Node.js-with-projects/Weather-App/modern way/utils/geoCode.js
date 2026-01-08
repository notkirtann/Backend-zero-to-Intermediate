import chalk from 'chalk';

//mapbox api working
const geoData = async (location) => {
    const mapboxKey = 'pk.eyJ1Ijoia2lydGFuLXdlYXRoZXItYXBwIiwiYSI6ImNtaDRuazFzdDFoYmdkM3NibXNoeXUzdDcifQ.9tcj2Hp3IU06S9LqT7APNw';

    const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${location}&access_token=${mapboxKey}&limit=1`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data.features || data.features.length === 0) {
        throw new Error(chalk.blue('Invalid location name'));
    }

    console.log(chalk.green(data.features[0].properties.full_address));
    return data.features[0].geometry.coordinates; // [lon, lat]
};

export default geoData;
