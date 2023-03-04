const removeFromArray = function() {
    for(let i= arguments.length-1; i>0; i--){
        for(let r = 0; r < arguments[0].length; r++){
            console.log(arguments[0][r])
            if(arguments[0][r]===arguments[i]){
                arguments[0].splice(r,1);
            }
        }
        
    }
    return arguments[0];
};


// Do not edit below this line
module.exports = removeFromArray;
