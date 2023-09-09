// sync
/*console.log("hi");

for(let i=0;i<100000000000;i++){
    console.log("done");
}

console.log("bye");



// async 
console.log("hi");
setTimeout(function (){console.log("done")},5000);
console.log("bye");


*/
function timeConsumingByLoop() {
  console.log("loop starts");
  for (let i = 0; i < 10000000000; i++) {
    //some task
  }
  console.log("loop ends");
}

function timeConsumingByRunTimeFeature0() {
  console.log("starting the timer0");
  setTimeout(function exec0() {
    console.log("completed the time0");
    for (let i = 0; i < 10000000000; i++) {
        //some task
      }
  }, 5000);
}
function timeConsumingByRunTimeFeature1() {
  console.log("starting the timer1");
  setTimeout(function exec1() {
    console.log("completed the timer1");
    for (let i = 0; i < 10000000000; i++) {
      //some task
    }
  });
}
function timeConsumingByRunTimeFeature2() {
  console.log("starting the timer2");
  setTimeout(function exec2() {
    console.log("completed the time2");
    for (let i = 0; i < 10000000000; i++) {
        //some task
      }
  }, 200);
}
console.log("hi");
timeConsumingByLoop();
timeConsumingByRunTimeFeature0();
timeConsumingByRunTimeFeature1();
timeConsumingByRunTimeFeature2();
timeConsumingByLoop();
console.log("bye");
