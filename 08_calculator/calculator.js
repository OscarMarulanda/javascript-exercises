const add = function() {
	let suma = 0; 
  for(let i = 0; i < arguments.length; i++){
    suma += arguments[i];
  }
  return suma;
};

const subtract = function(x, y) {
  return x-y;
	
};

const sum = function() {
	let suma = 0; 
  for(let i = 0; i < arguments[0].length; i++){
    suma += arguments[0][i];
  }
  return suma;
};

const multiply = function() {
  let suma = 1; 
  for(let i = 0; i < arguments[0].length; i++){
    suma *= arguments[0][i];
  }
  return suma;
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(a) {
  let fac = 1;
  if(a===0){
    return fac;
  }else{
    for(let i = 1; i<=a; i++){
      fac *= i;
    }
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
