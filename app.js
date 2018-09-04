const os = require('os');
const fs = require('fs');
const mess = require('./message.js');
const _ = require('lodash');

let x = {"nombre": "Arnold"}
let y = {"apellido":"Perez"}
let z = [
    {nombre:"jaimme",apellido:"Medina", edad:26},
    {nombre:"kevin",apellido:"Mejia",edad:25}
]

let result = _.assign(x,y);
console.log(result);

let entrada = process.argv;
console.log(entrada);


