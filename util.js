'use strict'
const usage = require('./constants').usage
const generateUsage = require('command-line-usage')
const fs = require('fs')
const copy = require('cp')
const path = require('path')
const moment = require('moment')

const getUsage = () => {
  return generateUsage(usage)
}

const areAllArgumentsSupplied = (argv) => {
  if (argv.hasOwnProperty('input') && argv.hasOwnProperty('output')) {
    if (argv.input.length > 0 && argv.output.length > 0) {
      return true
    }
  }

  return false
}

const verifyArguments = (argv) => {
  return new Promise((resolve, reject) => {
    fs.access(argv.input, fs.constants.F_OK | fs.constants.R_OK, (error) => {
      if (error !== null) {
        reject(error)
      }
      fs.access(argv.output, fs.constants.F_OK | fs.constants.W_OK, (error) => {
        if (error !== null) {
          reject(error)
        }
        resolve()
      })
    })
  })
}

const getNewFilename = (file, output) => {
  const extension = path.extname(file)
  const filename = path.basename(file, extension)

  const timestamp = moment().valueOf()

  const newFilename = `${filename}.${timestamp}${extension}`

  return path.join(output, newFilename)
}

const createFileWatcher = (file, callback) => {
  fs.watch(file, (eventType) => {
    if (eventType === 'change') {
      callback()
    }
  })
}

const handleFileChange = (file, output) => {
  const filename = getNewFilename(file, output)
  copy(file, filename, (error) => {
    if (error != null) {
      console.error(error)
    }
  })
}

module.exports = {
  getUsage,
  areAllArgumentsSupplied,
  verifyArguments,
  getNewFilename,
  handleFileChange,
  createFileWatcher
}
