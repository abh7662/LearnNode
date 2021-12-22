const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')



yargs.command({
    command: 'add',
    describe: 'adding values',
    handler: function () {
        console.log('adding a note')
    }
})


yargs.command({
    command: 'remove',
    describe: 'removing values',
    handler: function () {
        console.log('removing a note')
    }
})


yargs.command({
    command: 'list',
    describe: 'lising values',
    handler: function () {
        console.log('showing list of a note')
    }
})


yargs.command({
    command: 'read',
    describe: 'reading values',
    handler: function () {
        console.log('reading a note')
    }
})
console.log(yargs.argv)