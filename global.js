// global object
console.log(global);

// using setTImeout function from the global
setTimeout(() => {
  console.log("Executed after 3sec");
}, 3000);

// now using clearInterval
setTimeout(() => {
  console.log("Executed after 3sec");
  clearInterval(int); // now, this will stop the interval
}, 3000);

// this will run after every 1sec
const int = setInterval(() => {
  console.log("In the interval");
}, 1000);

console.log(__dirname); // only directory
console.log(__filename); // directory with the filename
