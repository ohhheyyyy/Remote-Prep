// Code a while loop that builds as a single string, 
// the numbers 1 through n, separated by commas


var n = 10;
var newNum = 1;
var numString = "";

while (newNum < n) {
  numString += newNum + ", ";
  newNum++;
  
  if (newNum === 10){
    numString += newNum + "";
  } 
   
	
}
console.log(numString);