const sumAll = function(val1, val2) {
    if(!Number.isInteger(val1) || !Number.isInteger(val2) ){
        return "ERROR";
    }
    let sum = Math.min(val1, val2);
//console.log(val2);
    
    if(val1 < 0 || val2 < 0){
        sum = "ERROR";
    }else if(val1>val2){
        while(val2<val1){
            val2++;
            sum += val2;
        } 
    }else if(val2>val1){
        while(val1<val2){
            val1++;
            sum += val1;
        } 
};
//console.log(sum)
return sum;
}
sumAll(1,"2")

// Do not edit below this line
module.exports = sumAll;
