const path = require('path');

console.log(path.sep);
console.log(path.delimiter);
console.log(path.dirname(__filename));

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);
//to access that file 
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');  //returns the absolute path
console.log(absolute);