function DO(task){
    setTimeout(function exec(){
        console.log(task);
    },2000);
}

DO("abc");
console.log("End");