// importing modules
const multi = require("./people");
console.log(multi);
// NOTE: if you don't export , then this will return us an empty object

// alternate way to import is to use destructing
// NOTE : the import name has to be same as exports

const { people, age } = require("./people");
console.log("people => ", people);
console.log("age => ", age);

// imporing operating system module from nodejs
const os = require("os");
console.log("Platform OS ", os.platform());
console.log("Directory ", os.homedir());
console.log("OS-Archietecture", os.machine());
