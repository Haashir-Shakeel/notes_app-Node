const fs = require('fs')
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
module.exports = {
    getnotes: getnotes,
    addNote: addNote,
}