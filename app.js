const os = require('os');
const fs = require('fs');
const mess = require('./message.js');

let  cpu = os.cpus();
let host = os.hostname();

console.log(mess.friends);
console.log(mess.welcome());





