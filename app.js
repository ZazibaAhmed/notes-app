const chalk = require('chalk');
const yargs = require('yargs')
const getNotes = require('./notes');

const command = process.argv[2];

//Customize yargs version
// yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title);
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a note!');
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log('Listing notes!');
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function() {
        console.log('Reading notes!');
    }
})

// console.log(process.argv);
// console.log(yargs.argv);
yargs.parse();