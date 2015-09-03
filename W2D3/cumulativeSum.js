// Write a while loop that computes the product of 
// multiplying the first n positive integers: 
// product = 1 * 2 * 3 * ... * n.

var cookies = 1;
var basket = 1;

while (cookies <= 4) {
	basket *= cookies;
	cookies++;
}

console.log(basket);