import test from 'ava'
import window from 'window'
import {nameInformation} from '../bundle.js'
let windowObject = new window()

test('Checking "nameInformation" function', t => {
  const nameToTest = 'testing_return_info'
  const x = nameInformation(nameToTest, windowObject.document)
  const expectedObj = {
    'name': nameToTest,
    'name_length': nameToTest.length,
    'content': windowObject.document.body.innerHTML //Makes sure the DOM has actually been modified.
  }
  t.deepEqual(x, expectedObj)
})
