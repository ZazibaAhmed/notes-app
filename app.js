
const fs = require('fs');
const getNotes = require('./notes');

const msg = getNotes();

// fs.appendFileSync('notes.txt',' Appending (2)');
console.log(msg);