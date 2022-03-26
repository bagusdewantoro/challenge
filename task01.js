// function
function findLongestWord(sentence) {
  // get array of the longest words
  const regex1 = /[a-z]/gi;
  const ar = sentence.toLowerCase().split(' ').sort((x, y) => y.length - x.length).map(w => w.match(regex1).join(''));
  const maxWord = ar.filter(w => w.length === ar[0].length);

  // get highest number of vowels
  const regex2 = /[aiueo]/g;
  return maxWord.sort((x, y) => y.match(regex2).length - x.match(regex2).length)[0];
}

// sentence example
const string1 = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
const string2 = "bAiEoc, bcdfgAAhc, bcdfgAAac";

// find longest word with highest number of vowels
console.log(findLongestWord(string1)); // experience
console.log(findLongestWord(string2)); // bcdfgaaac
