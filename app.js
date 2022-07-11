// const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

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

    // handler: function(argv){
    //     notes.addNote(argv.title,argv.body)
    // },

    handler(argv){ 
        notes.addNote(argv.title,argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing the given note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function(argv){
    //     notes.removeNotes(argv.title)
    // },

    handler(argv){
        notes.removeNotes(argv.title)
    },
})

//Create remove command
yargs.command({
    command: 'read',
    describe: 'Reading the given note',
    // handler: function(){
    //     console.log('Reading a note')
    // },
    handler(){
        console.log('Reading a note')
    }
})

//Create remove command
yargs.command({
    command: 'list',
    describe: 'Lists all the notes',
    // handler: function(){
    //     console.log('Listing out all notes')
    // },
    handler(){
        console.log('Listing out all notes')
    }
})

yargs.parse() //yargs parsing