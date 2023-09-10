function createPromise() {
  return new Promise(function exec(resolve, reject) {
    console.log("Resolving the Promise");
    resolve("Done");
  });
}

setTimeout(function process() {
  console.log("Timer Completed");
}, 0);

let p = createPromise();
p.then(
  function fulfillHandler1(value) {
    console.log("we fulfilled1 with a value", value);
  },
  function rejectionHandler1() {}
);
p.then(
  function fulfillHandler2(value) {
    console.log("we fulfilled2 with a value", value);
  },
  function rejectionHandler2() {}
);

p.then(
  function fulfillHandler3(value) {
    console.log("we fulfilled3 with a value", value);
  },
  function rejectionHandler3() {}
);

for(let i=0;i<10000000000;i++){}
console.log("Ending ...");
