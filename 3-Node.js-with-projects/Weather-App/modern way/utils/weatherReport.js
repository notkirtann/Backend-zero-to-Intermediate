import chalk from 'chalk';

//weather stack api working
const weatheReport = async (coords) => {
    const access_key = '0039bf40464f6f5052987ff001cac2d9';
    const geoLocation = [...coords].reverse().join(','); // lat,lon
    const url = `https://api.weatherstack.com/current?access_key=${access_key}&query=${geoLocation}&units=m`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
        throw new Error(chalk.blue('Invalid coordinates or API error'));
    }
    return {
        observed_time : data.current.observation_time,
        temperature: data.current.temperature,
        feelslike: data.current.feelslike,
        description: data.current.weather_descriptions[0],
        humidity: data.current.humidity,
    };
};

export default weatheReport;
