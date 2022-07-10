const fs = require('fs')
const chalk = require('chalk')

const getnotes = function(){
    return 'your notes..'
}

const addNote = function(title,body){
    const notes = loadNotes()           //loading our notes array/file

    const duplicateNotes = notes.filter(function(note){     //to check if duplicate note exists
        return note.title === title
    })
    if (duplicateNotes.length === 0 ){
        notes.push({                    //adding new note to array/file
            title:title,
            body:body
        })

        saveNotes(notes)                //saving notes
        console.log('New Note added! ')

    } else{
        console.log('Note Title already taken! ')
    }

 
}

const saveNotes = function(notes){ 
    const dataJSON = JSON.stringify(notes) //converting to JSON our new note
    fs.writeFileSync('notes.json',dataJSON) //writing/saving to notes.json
}

const loadNotes = function(){
    try{            //incase notes.json exists
        const dataBuffer = fs.readFileSync('notes.json') 
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) //returning notes from notes.json 
    }catch(e){
        return []    //returning empty array if notes.json doesnot exist
    }

}

const removeNotes = function(title){
    const notes = loadNotes()
    const unmatchedNotes = notes.filter(function(note){ //getting notes which we want to keep i.e dont match with given title
        return note.title !== title
    })
    // saveNotes(unmatchedNotes)
    // console.log('removed note',title)

    if (notes.length > unmatchedNotes.length){
        saveNotes(unmatchedNotes) //saving the notes we want to keep
        console.log(chalk.green.inverse("Note removed: ", title))

    }else{
        console.log(chalk.red.inverse("no note found! "))
    }
}

module.exports = {
    getnotes: getnotes,
    addNote: addNote,
    removeNotes: removeNotes,
}