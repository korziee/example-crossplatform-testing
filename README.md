## Testing browser based projects in node.

#### Example
1. run ```npm run bundle``` to bundle up this test repo.
2. run ```npm run test``` to start the ava test.

---

##### Function being tested
```javascript
export const nameInformation = (name = 'default_name', doc) => {
  doc = doc || window.document
  const nameObj = {
    'name': name,
    'name_length': name.length,
  }
  doc.write('Your name is: ' + nameObj.name + ', and the length of your name is: ' + nameObj.name_length + ' characters')
  nameObj.content = doc.body.innerHTML
  return nameObj
}
```
---

##### Ava unit test
```javascript
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
```

---

## How to do it yourself

#### Requirements
1. node and npm
2. window ```npm install window```
3. rollup ```npm install rollup```
4. ava ```npm install ava```


#### Steps
1. npm init
2. Install the required dependencies from the above requirements.
3. Bundle your browser-based code -> ```rollup [*file-name*] --o [*output-file-name*] -f umd --name "[*name-of-bundle*]"```
4. Write a test file using ava, import the functions you wish to test from your browser-based-code file.
5. Import the window module.
6. write some tests
7. ```(test === winning) true```

---
