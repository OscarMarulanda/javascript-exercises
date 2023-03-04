const repeatString = function(str, x) {
    let str2 = "";
    let error = "ERROR";
    if(x<0){
        return(error);
    } else{
        for(let i=0; i<x; i++){
            str2 += str;
        }
        return(str2);
    }
};

// Do not edit below this line
module.exports = repeatString;
