

// function f(x,fn){
//     for(let i=0;i<x;i++){
//         console.log(i + " ");
//     }
//     fn();
// }

// f(10,function exec(){  //callback
//     console.log("I am executed also");
// })

setTimeout(function exec(){
     console.log("Running After some time ...")
    },4000);