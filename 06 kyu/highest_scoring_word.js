// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
  const words = x.split(' ');
  let highestScoringWord;
  let wordPoints;
  let highestScore = 0;
  for(word of words) {
    console.log(words)
    wordPoints = word.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt() - 96;
    }, 0);
    if(wordPoints > highestScore){
      highestScore = wordPoints;
      highestScoringWord = word;
    } else if(wordPoints === 0) {
      return '';
    }
  }
  return highestScoringWord;
}

high('what time are we climbing up the volcano');
