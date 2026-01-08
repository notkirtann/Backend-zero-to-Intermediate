import notes from "./notes.js";
import chalk from "chalk";
import validator from 'validator';
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// Initialize yargs instance
const y = yargs(hideBin(process.argv));

y.command({
  command: 'add',
  describe: 'Add a new note',
  builder:{
    title:{
        describe:'Note Title',
        demandOption: true,
        type: 'string'
    },
    body:{
        describe:'Note body',
        type: 'string',
        demandOption: true
    }
  },
  handler: (argv) => {
    // console.log(`Title is: ${argv.title}`);
    // console.log(`Body data is ${argv.body}`);
    notes.addNote(argv.title,argv.body); 
    
  }
});

y.command({
  command: 'remove',
  describe: 'Remove a note',
  builder:{
    title:{
      describe:'Deleting Note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
    
  }
});

y.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => {
    console.log(notes.loadNotes());
  }
});

y.command({
  command: 'read',
  describe: 'Read a note',
  builder:{
    title:{
      describe:'title of note to read',
      demandOption: true,
      type: 'string'
    }
  },  
  handler(argv) {
    console.log('Reading a note...');
    notes.readNote(argv.title);
  }
});
y.parse();//without this it won't work
// Parse the arguments (this triggers the command logic)
// console.log(argv); if used this instead parse than also works but not ideal way.

console.log(chalk.bgWhite(process.argv));//hideBin of yargs will remove unessary data.
console.log(chalk.bgGreen(validator.isEmail('Kirtan@gmail.com')));
// console.log(chalk.bgRed(validator.isEmail('gmail.com')));