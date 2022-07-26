//GLOBALS - NO WINDOW !!!!! (as there is no browser window)
// __dirname is a global variable that contains the path to the current working directory
// __filename is a global variable that contains the path and filename of the current script
// require() is a function that can be used to load other JavaScript files
// module is an object that represents the current module
// exports is an object that is shared between the current module and other modules
// process - info about env where the program is being executed 

console.log(__dirname);
console.log(__filename);
const express = require('express');

// setInterval(
//     () => {
//         console.log(__filename);
//     }
//     , 2000);
