// higher order functions

function  f(x,fn){
    console.log(x);
    fn();
}

f(10,function exec(){
    console.log("I am expression passed to a higher order function .")
});


let arr =[1,10,9,100,10000,11,12,13,14,2,3] // unsorted array
arr.sort();   
//It sort the array
console.log(arr + " ");

let arr1 =[1,10,9,100,10000,11,12,13,14,2,3] ;
arr1.sort(function(a,b){
    return a- b;  // 
});

console.log(arr1 + " ") ;
