function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromisesWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    console.log("Entering the executor callback in the promise constructor ");
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        // if  the random number is even then we fulfilled the promise .
        resolve(num);
      } else {
        // if the random number is odd then we reject the promise.
        reject(num);
      }
    }, 1000);
    console.log("Existing the executor callback in the promise constructor ");
  });
}

console.log("Starting .....");
const p = createPromisesWithTimeout();
console.log("We are now waiting for the Promise to complete ..");
console.log("Currently my promise object is like ...", p);
console.log("Going to register my 1st set  of handlers");
p.then(
  function fulfillHandler1(value) {
    console.log("Inside fulfill Handler1 with value ", value);
    console.log("Promise after fulfillment is " ,p);
    setTimeout(function t() {console.log("Ended 0s timer ")} ,0);
    console.log('Exiting the fulfill handler 1');
  },
  function rejectionHandler1(value) {
    console.log("Inside the rejection Handler1 with value", value);
    console.log("Promise after rejection is " ,p);
    setTimeout(function t() {console.log("Ended 0s timer ")} ,0);
    console.log('Exiting the rejection handler 1');
  }
);

console.log("Going to register my second set of handlers")
p.then(
    function fulfillHandler2(value) {
      console.log("Inside fulfill Handler2 with value ", value);
      console.log("Promise after fulfillment is " ,p);
    },
    function rejectionHandler2(value) {
      console.log("Inside the rejection Handler2 with value", value);
      console.log("Promise after rejection is " ,p);
    }
  );


console.log("Ending ......");
setTimeout(function () {console.log("Global 0s timer")},0);
setTimeout(function () {console.log("Global 1s timer")},1000);

