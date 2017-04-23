'use strict'
const argv = require('yargs').argv
const mkdirp = require('mkdirp')
const moment = require('moment')
const readline = require('readline')

const {
  getUsage,
  areAllArgumentsSupplied,
  verifyArguments,
  handleFileChange,
  createFileWatcher
} = require('./util')

if (!areAllArgumentsSupplied(argv)) {
  const usage = getUsage()
  console.log(usage)
} else {
  verifyArguments(argv).then(() => {
    mkdirp(argv.output, (error) => {
      if (error !== null) {
        console.error(error)
        return
      }

      console.log('Watching for file changes...')

      let backupsMade = 0
      createFileWatcher(argv.input, () => {
        const time = moment().format('HH:mm:ss.SSS')
        handleFileChange(argv.input, argv.output)
        readline.clearLine(process.stdout)
        readline.cursorTo(process.stdout, 0, null)
        process.stdout.write(`Last file change occured at ${time}. Backups made: ${++backupsMade}`)
      })
    })
  }, (error) => {
    console.error('Input file or output folder are not accessible:')
    console.error(error)
  })
}
