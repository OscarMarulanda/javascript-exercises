const palindromes = function (str) {
    str = str.split(' ').join('');
    for(let i = 0; i<str.length; i++){
        if(str.charAt(i).toUpperCase() == str.charAt(i).toLowerCase()){
        str = str.replace(str.charAt(i), "")
        }
    }
    
    let pal = "";
    
    for(let e = str.length; e>=0; e--){
        pal += str.charAt(e);
    }if(str.toLowerCase() == pal.toLowerCase()){
        return true;
    }else{
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
