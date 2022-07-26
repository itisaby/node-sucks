//Built-in Modules

//OS Module 
//Helps to interaact with the operating system
const OS = require("os");
console.log(OS.platform());
console.log(OS.homedir());
const user = OS.userInfo();
console.log(user);

//method returns the system uptimr in seconds
console.log(OS.uptime());
OS.version();
console.log(OS.version())

const currentOS = {
    platform: OS.platform(),
    name: OS.type(),
    release: OS.release(),
    uptime: OS.uptime(),
    totalmem: OS.totalmem(),
    freemem: OS.freemem(),
}
console.log(currentOS);