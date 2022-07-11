const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const notes = loadNotes()           //loading our notes array/file
  
    const duplicateNote = notes.find((note)=>note.title === title) //to check if duplicate note exists

    if (!duplicateNote){
        notes.push({                    //adding new note to array/file
            title:title,
            body:body
        })

        saveNotes(notes)                //saving notes
        console.log(chalk.green.inverse("New Note Added ", title))

    } else{
        console.log(chalk.red.inverse('Note Title already taken! '))
    }

 
}

const removeNotes = (title) => {
    const notes = loadNotes()

    const unmatchedNotes = notes.filter((note)=> note.title !== title)  //getting notes which we want to keep i.e dont match with given title


    if (notes.length > unmatchedNotes.length){
        saveNotes(unmatchedNotes) //saving the notes we want to keep
        console.log(chalk.green.inverse("Note removed: ", title))

    }else{
        console.log(chalk.red.inverse("no note found! "))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your Notes: '))

    notes.forEach((note)=> {
        console.log(note.title)
    })

}

const readNotes = (title)=>{
    notes = loadNotes()
    
    matchednote = notes.find((note)=> note.title === title)

    if(matchednote){
        console.log(chalk.inverse(matchednote.title))
        console.log(matchednote.body)
    }else{
        console.log(chalk.red.inverse('No Note found! '))
    }
}

const saveNotes = (notes) => { 
    const dataJSON = JSON.stringify(notes) //converting to JSON our new note
    fs.writeFileSync('notes.json',dataJSON) //writing/saving to notes.json
}

const loadNotes = () => {
    try{            //incase notes.json exists
        const dataBuffer = fs.readFileSync('notes.json') 
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) //returning notes from notes.json 
    }catch(e){
        return []    //returning empty array if notes.json doesnot exist
    }

}

module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes:readNotes,
}