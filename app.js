const validator = require('validator')

const getnotes = require('./notes.js')

const msg = getnotes()
console.log(msg)

console.log(validator.isEmail('jhondoe@example.com'))

console.log(validator.isURL('jhondoeexample.com'))
