/**
 * ==========================================
 * JavaScript Array Methods
 * ==========================================
 */

const numbers = [5, 3, 6, 1];


// ==========================================
// forEach()
// ==========================================
// Used to iterate over an array and perform
// a specific action for each element.
// It does NOT return a new array.

numbers.forEach((number) => {
  console.log(number);
});


// ==========================================
// map()
// ==========================================
// Used to create a NEW array by applying
// a function to each element of the original array.

const mappedNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(mappedNumbers);


// ==========================================
// filter()
// ==========================================
// Used to create a NEW array with all elements
// that pass a test implemented by a provided function.

const filteredNumbers = numbers.filter((number) => {
  return number > 2;
});

console.log(filteredNumbers);


// ==========================================
// reduce()
// ==========================================
// Used to apply a function against an accumulator
// and each element in the array (left to right)
// to reduce it to a single value.

const sum = numbers.reduce((acc, number) => {
  return acc + number;
}, 0);

console.log(sum);


// ==========================================
// find()
// ==========================================
// Used to return the FIRST element in the array
// that satisfies the provided testing function.
// If no match is found, it returns undefined.

const found = numbers.find((number) => {
  return number > 2;
});

console.log(found); // Output: 5


// ==========================================
// some()
// ==========================================
// Used to test whether at least one element in the
// array passes the test implemented by the provided function.
// It returns a Boolean value.

const result = numbers.some((number) => {
  return number > 4;
});

console.log(result); // Output: true