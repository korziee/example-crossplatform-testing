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
