const convertToCelsius = function(x) {
  let cel = (x-32)*0.5556;
  if (cel == 0){
    return cel;
  }else {
    return +cel.toFixed(1);
  }
};

const convertToFahrenheit = function(y) {
  let fahr = (y*1.8)+32;
  if(fahr==0){
    return fahr;
  }else{
    return +fahr.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
