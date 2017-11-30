(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.example = {})));
}(this, (function (exports) { 'use strict';

const nameInformation = (name = 'default_name', doc) => {
  doc = doc || window.document;
  const nameObj = {
    'name': name,
    'name_length': name.length,
  };
  doc.write('Your name is: ' + nameObj.name + ', and the length of your name is: ' + nameObj.name_length + ' characters');
  nameObj.content = doc.body.innerHTML;
  return nameObj
};

exports.nameInformation = nameInformation;

Object.defineProperty(exports, '__esModule', { value: true });

})));
