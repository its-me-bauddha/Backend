/*
        EXAMPLE - 1
console.log("Hello World !!....");
setTimeout(function exec(){
    console.log("Timer Done")
 },0);

 console.log("End");

        EXAMPLE - 2  
    
console.log("Hello World !!....");
setTimeout(function exec() {
  console.log("Timer Done");
}, 0);
for (let i = 0; i < 10000000000; i++) {
  //some task ;
}
console.log("End");



            EXAMPLE - 3
console.log("Hello World !!....");
for(let i=0;i<3;i++){
    setTimeout(function exec() {
        console.log("Timer Done");
      }, 10);
}
for (let i = 0; i < 10000000000; i++) {
  //some task ;
}
console.log("End");
   

            EXAMPLE - 4
*/

console.log("Hello World !!....");
for(let i=0;i<3;i++){
    setTimeout(function exec() {
        console.log("Timer Done");
        setTimeout(function exec() {
            console.log("Timer Another Inside");
          }, 10);
      }, 0);
}
for (let i = 0; i < 1000; i++) {
  //some task ;
}
console.log("End");

