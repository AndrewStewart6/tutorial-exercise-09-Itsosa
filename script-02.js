/* Tutorial Exercise 09
 *
 * In Step 02 we're going to work with arrays
 *
 * Follow the instructions below
 *
 */


//
// STEP A - create your first array
//

// Let's create our first array
// Create a variable called lotteryNumbers and assign it an array with some random numbers
// There should be 6 numbers each one between 0-49 (just like lotto 649)
let lotteryNumbers = [1,2,3,4,5,6];

// Now let's console log the array so you can see the initial values
console.log(lotteryNumbers);

// Arrays have a property called length that lets us know how many items are in the array
// Use the .length property (arrayVariableName.length) to console log how many numbers are in
// our array (there should be 6 - since it's 649)
console.log(lotteryNumbers.length);


//
// STEP B - exploring array methods
//

// In the last set of instructions we used assign (=) to create a new array
// Now, lets look at another way to declare an array
// You can use the: new Array(4,5,6,7,9)
// to create a new array with some initial values
//
// Create a new variable called myColoursArray and add the following colours inside it:
// "purple", "blue", "hotpink", "green", "yellow"
let myColoursArray = ["purple", "blue", "hotpink", "green", "yellow"];
console.log(myColoursArray)
// Now we're going to learn to use a method.
// Arrays have built in methods that help us work with arrays.
// To add an item to our array we can use the "push()" method
// myArray.push(5)
// the above line would add the number 5 to the end of array called myArray

// Use the push("orange") where X is a number between 0-49 and add it to your array
myColoursArray.push("orange");

// Console log your myColoursArray and make sure that "orange" has now been added to the end of the array
console.log(myColoursArray);

// Use the reverse() method to reverse the items in the array (first goes last, last goes first, etc)
// The reverse method does not take any parameters so you can use it with just empty brackets ()
myColoursArray.reverse();

// Console log the array so we can confirm the elements have been reversed
console.log(myColoursArray);


//
// STEP C - accessing array items
//

// Using the following array for the next few instructions
let starWarsShips = ["Luke Skywalker", "Star Destroyer", "Millennium Falcon", "CR90 corvette"];

// Use array[index] to console log just the first item in the array (Luke Skywalker)
// Expected output: "Luke Skywalker"
console.log(starWarsShips[0]);

// Use array[array.length-1] to console log just the last item in the array ("CR90 corvette")
console.log(starWarsShips[starWarsShips.length-1]);

// Reassign (change) the first value in the array so that it now has "TIE Advanced x1" instead of "Luke Skywalker"
starWarsShips[0] = "TIE Advanced x1"

// Output the array
// Expected output:
// "TIE Advanced x1", "Star Destroyer", "Millennium Falcon", "CR90 corvette"
console.log(starWarsShips);

// Use the array.pop() method to remove the last element in the starWarsShips array ("CR90 corvette")
starWarsShips.pop();

// Output the array - expected result:
// "TIE Advanced x1", "Star Destroyer", "Millennium Falcon"
console.log(starWarsShips);

// Output the length of the array
// Expected ouput: 3
console.log(starWarsShips.length);



//
// STEP D - using the slice method
//

// Array of fruits
const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];

// Use the slice() method to create a new array variable called newFruits with
// only the last two fruits in the array "kiwi", "mango"
// Help: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
const newFruits = fruits.slice(-2); // Fill in the correct parameter

// Output the newFruits array which should only have 'kiwi', 'mango' in it
console.log(newFruits);

// CONGRATULATIONS - THIS CONCLUDES STEP 02
