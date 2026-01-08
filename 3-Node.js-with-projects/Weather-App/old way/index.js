import getWeather from './main.js';
import chalk from 'chalk';


const location = process.argv[2] || 'Bhopal'; 

console.log(chalk.yellow(`Fetching weather for: ${location}...\n`));


getWeather(location, (error, data) => {
    if (error) {
        console.log(chalk.red('Error:'), error);
    } else {
        console.log(chalk.green('\n Weather Report:\n'));
        console.log(data);
    }
});
