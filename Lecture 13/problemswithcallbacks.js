/**
 * 1. Inversion of Control. -> Promises can resolve this issue .
 * 2. Callback hell. -> readability  problem
 */


let arr = [1,100,1000,9,2,3,11];

arr.sort(function cmp(a,b){
    return a-b;
})

console.log(arr);