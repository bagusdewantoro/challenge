// function
function findLongestWord(sentence) {
  const words = sentence.toLowerCase().match(/[a-z]+/gi);
  let char = 0;
  let longest = [];
  for (word of words) {
    if (word.length >= char) {
      char = word.length
      longest.push(word)
    }
    longestWord = word.length;
  }
  let vowelCount = 0;
  let longestVowel;
  for (word of longest) {
    let vowel = word.match(/[aeiou]+/gi).join('')
    if (vowel.length >= vowelCount) {
      vowelCount = vowel.length;
      longestVowel = word;
    }
  }
  return longestVowel;
}

// sentence example
const string1 = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"

// find longest word with highest number of vowels
console.log(findLongestWord(string1)); // experience
