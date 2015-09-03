// write a while loop that iterates through the numbers 0 to 20
// if the number is 13, log "la-la-la, nothing to say here"
// if the number is odd, log "I like the number " + n + ", odd is okay too!"
// if the number is even, log "I like the number " + n + ", a nice even number."
// remember to increment the integer variable!

var n = 0;

while ( n <= 20 ) {
  if ( n == 13 ) {
    console.log("la-la-la, nothing to say here");
    
  } else if ( n % 2 !== 0 ) {
    console.log("I like the number " + n + ", odd is okay too!");
  } else {
    console.log("I like the number " + n + ", a nice even number.");
  }
  n++;
}