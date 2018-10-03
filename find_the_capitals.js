// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const capitals = function (word) {
	let capitalsArray = [];
  word.split('').forEach((char, index) => {
    if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      capitalsArray.push(index);
    }
  })
  return capitalsArray;
};

console.log(capitals('CodEWaRs'));
