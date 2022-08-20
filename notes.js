const fs = require('fs');
const chalk = require('chalk');


const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote){
        notes.push({
            title: title, 
            body: body
        });
    
        saveNotes(notes);
        console.log(chalk.bgGreen('New note added!'));
    }else{
        console.log(chalk.bgRed('Note title taken'));
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);
    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log(chalk.bgGreen('Note Removed'));
    }else{
        console.log(chalk.bgRed('No note found!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes:'));
    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note)=> note.title === title);
    if(note){
        console.log(chalk.green('Note found!'));
        console.log(chalk.blue.inverse(`${note.title}:`), note.body);
    }else{
        console.log(chalk.red.inverse('No note found'));
    }
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const parsedData = JSON.parse(dataJSON);
        return parsedData;

    }catch(error){
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}


module.exports = {
    addNotes,
    removeNote,
    listNotes, 
    readNote
}