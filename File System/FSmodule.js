//File System Module
const fs = require('fs')
console.log("start")
const first = fs.readFileSync('./Content/fist.txt', 'utf-8');
const second = fs.readFileSync('./Content/second.txt', 'utf-8');
console.log("middle")
console.log(first);
console.log(second);

fs.writeFileSync('./Content/new.txt', first + second + "ARNAB");  //create a new or overwrite file
fs.writeFileSync('./Content/new1.txt', first + second + "ARNA Maity", { flag: 'a' });  //append to the file
console.log("Done");
console.log("end");