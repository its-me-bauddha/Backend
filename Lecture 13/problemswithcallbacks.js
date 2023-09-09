/**
 * 1. Inversion of Control.
 * 2. Callback hell.
 */


let arr = [1,100,1000,9,2,3,11];

arr.sort(function cmp(a,b){
    return a-b;
})