const fibonacci = function(x) {
    let fib = [];
    if(x<0){
        return "OOPS"
    }else{
        for(let i=0; i<x; i++){
        if(i<2){
        fib.push(1);
        }else{
            fib.push(fib[i-2]+fib[i-1]);
        }
    }
    }
    return(fib[fib.length-1]);
};
fibonacci(6);
// Do not edit below this line
module.exports = fibonacci;
