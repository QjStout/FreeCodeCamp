function findLongestWordLength(str) {
  const wordArray = str.split(' ');

  let longestWord = wordArray[0];
  for(let i=1; i<wordArray.length; i++){
    if(wordArray[i].length > longestWord.length){
      longestWord = wordArray[i];
    }
  }

  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");