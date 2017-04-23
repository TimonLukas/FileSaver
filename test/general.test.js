'use strict'
/* global it */

const chai = require('chai')
const should = chai.should() // eslint-disable-line
const data = require('./data.json')

const util = require('./../util')

it('should correctly build the usage', () => {
  const usage = util.getUsage()
  usage.should.contain('FileSaver')
})

it('should choose the correct execution path based on arguments supplied', () => {
  const cases = data.areAllArgumentsSupplied
  cases.forEach((test) => {
    util.areAllArgumentsSupplied(test.arguments).should.be.equal(test.result)
  })
})

it('should ignore trailing slashes when generating new filenames', () => {
  const cases = data.generateNewFilename.trailing
  cases.forEach((test) => {
    util.getNewFilename(`${test.base}.${test.extension}`, test.path).should.contain(test.base)
  })
})
