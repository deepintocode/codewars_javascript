// Task:
// Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

// Give your answer in string format as 'odd' or 'even'.

// If the input array is empty consider it as: [0] (array with a zero).

// Example:
// oddOrEven([0]) returns "even"
// oddOrEven([2, 5, 34, 6]) returns "odd"
// oddOrEven([0, -1, -5]) returns "even"

function oddOrEven(array) {
   if(array.length === 0){
     return 'even';
   }
   const sum = array.reduce((acc, cur) => {
     return acc + cur;
   }, 0);
   return sum % 2 == 0 ? 'even' : 'odd';
}

console.log(oddOrEven([1,4]))
