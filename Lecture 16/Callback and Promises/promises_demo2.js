console.log("Start of the file");

setTimeout(function timer1() {
  console.log("Timer 1 done");
}, 0);

for (let i = 0; i < 10000000000; i++) {
  //some task
}

let x = Promise.resolve("Sanket's Promise");
x.then(function processPromise(value) {
  console.log("Whose promise ?", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done");
});

console.log("End of the file");
