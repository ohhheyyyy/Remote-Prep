// Write a program that logs the numbers 1 - 100 to the console
// If the number is divisible by 3, log "Fizz"
// If the number is divisible by 5, log "Buzz"
// If the number is divisible by 3 and 5, log "FizzBuzz"
// Otherwise, log the number

var i = 1;

while (i <= 100) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
	i++;
}