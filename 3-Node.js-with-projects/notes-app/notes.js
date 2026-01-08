import chalk from 'chalk'
import fs from 'fs'

const addNote = (title,body)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.find((singleNote)=>{
        return singleNote.title === title
    })
    if(!duplicateNotes){
        notes.push({
            title: title,
            body:body,
         })
        saveNotes(notes)
        console.log(chalk.bgGreen('Added Succesfully'));
    } else{
        console.log(chalk.bgRed('title already taken'));
    }
}
const removeNote =(noteToRemove)=>{
    const notes = loadNotes()
    const indexOfNote = notes.findIndex((note)=>{
        return note.title === noteToRemove
    })
    if(indexOfNote !== -1){
        notes.splice(indexOfNote,1)
        saveNotes(notes)
        console.log(chalk.bgGreen('Removed Succesfully'));
    } else{
        console.log(chalk.bgRed('Cant Find the note'));
    }
        
}
const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return [];
    }
}
const readNote = (titleToRead) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === titleToRead);

  if (note) {
    console.log(chalk.blue(`Title: ${note.title}\nBody : ${note.body}`));
  } else {
    console.log(chalk.bgRed('No Note not found!'));
  }
};

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON);
}

export default {addNote,removeNote,loadNotes,readNote} 