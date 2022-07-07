const fs = require('fs')

// fs.writeFileSync('notes.txt','hello this is notes app')

fs.appendFileSync('notes.txt',', this was created using node')