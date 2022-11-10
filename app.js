
//package.json is used to keep track of dependencies and other info on the node module.
//it can be create manually or through npm init or npm init -y (which defaults all the values).

//installing third party modules using npm
//npm i <package name> local install
//npm i -g <package name> global install

const ld = require('lodash');

const arr = [3, [2,[7,[5]]]];
const newarr = ld.flattenDeep(arr);
console.log(newarr);