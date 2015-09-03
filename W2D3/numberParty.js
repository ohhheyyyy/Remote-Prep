//n numbers are coming to a number party. Introduce them each to all 
// the guests as they arrive. You should end up with output looking 
// something like this one for n = 5:

/* "welcome 1"
  "welcome 2, meet 1"
  "welcome 3, meet 1 and 2"
  "welcome 4, meet 1, 2 and 3"
  "welcome 5, meet 1, 2, 3 and 4" */


var numbersInOrder;
var warmWelcome;
var numberHereNow = 1;
var partyNumbers = 5;

while (numberHereNow <= partyNumbers) {
    numbersInOrder = 1;
    warmWelcome = 'Welcome ' + numberHereNow;

    if (numberHereNow > 1) {
        warmWelcome += ', meet ' + numbersInOrder;

        while (++numbersInOrder < numberHereNow) {
            if (numbersInOrder !== numberHereNow - 1) {
                warmWelcome += ', ' + numbersInOrder;
            } else {
                warmWelcome += ' and ' + numbersInOrder;
            }
        }
    }
    numberHereNow++;
    console.log(warmWelcome);
}