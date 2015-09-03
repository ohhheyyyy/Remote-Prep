// declare a variable called userNumber and set equal to 
// the value entered by a user when prompted to enter a positive number

var userNumber = prompt("Enter a positive number: ");

// initialize a while loop with the condition of userNumber
// being less than or equal to 0
while (userNumber <= 0) {
	// so long as userNumber is less than or equal to 0, 
	// continue to ask the user to enter a positive value
  userNumber = prompt("No, enter a positive number: ");
}
// finally log to the console a message of success once they enter
// a positive value
console.log("Hooray, you entered a positive value and that number is " + userNumber + ".");