//Modules 

//Importing the modules
const names = require("./3-modules");
const say = require("./utils");
require("./MindBlown");
//running them
console.log(names);
console.log(names.name1);
console.log(names.secret);
say(names.name1);
