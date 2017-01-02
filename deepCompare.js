/* Write a function deepCompare that compares two objects and
returns an array containing all the keys at which they differ. */

var listOfLikes = {
    'food': 'pineapple',
    'animal': 'dog',
    'transportation': 'fixie',
    'cornerCase': { obj111: '111' }
};

var anotherListOfLikes = {
    'food': 'pineapple',
    'animal': 'dog',
    'transportation': 'Prius',
    'coffee': 'cold brew'
};

var deepCompare = function(object1, object2) {
    var arrayOfDifferences = []; // declaring empty array
    // iterate through the keys in object1
    for (var property in object1) {
        if (object1[property] !== object2[property]) {
            arrayOfDifferences.push(property);
        }
    }
    for (var propertyB in object2) {
        if (object1[propertyB] !== object2[propertyB]) {
            if (arrayOfDifferences.indexOf(propertyB) === -1) {
                arrayOfDifferences.push(propertyB);
            }
        }
    }
    return arrayOfDifferences;
};

console.log(deepCompare(listOfLikes, anotherListOfLikes));
