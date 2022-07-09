// const validator = require('validator')
const chalk = require('chalk')
const getnotes = require('./notes.js')

const msg = getnotes()
console.log(msg)

const log = console.log
log(chalk.green.bgMagenta.inverse('success') +  chalk.red.bgGreen.bold.italic.dim('Ok!') + chalk.hex('#DEADED').underline('omg'))
// console.log(validator.isEmail('jhondoe@example.com'))

// console.log(validator.isURL('jhondoeexample.com'))
