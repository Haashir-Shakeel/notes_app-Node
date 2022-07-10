// const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
const getnotes = require('./notes.js')

yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true, //making this option required
            type: 'string', //to make sure we get string title instead of boolean
        },
        body: {
            describe:'Note Body',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(argv){
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing the given note',
    handler: function(){
        console.log('Removing the note')
    }
})

//Create remove command
yargs.command({
    command: 'read',
    describe: 'Reading the given note',
    handler: function(){
        console.log('Reading a note')
    }
})

//Create remove command
yargs.command({
    command: 'list',
    describe: 'Lists all the notes',
    handler: function(){
        console.log('Listing out all notes')
    }
})

yargs.parse() //yargs parsing