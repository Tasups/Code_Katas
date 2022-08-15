function topThreeWords(text) {
  const textToLowerCase = text.toLowerCase()
  const textToArray = textToLowerCase.split(" ")
  
  const count = {}
  
  textToArray.forEach(element => {
  count[element] = (count[element] || 0) + 1;
    });

  const countTotal = []
  
  for (var num in count){
    countTotal.push([num, count[num]])
  }
  
  const sortArrayResult = countTotal.sort(function(a, b) {
    return a[1] - b[1];
  })
  
  const finalResult = sortArrayResult.reverse()
  
  console.log(finalResult)
  
  const first = finalResult[0][0]
  const second = finalResult[1][0]
  const third = finalResult[2][0]
  
  console.log(first,second,third)
  return (first,second,third)
}



//topThreeWords("a a a  b  c c  d d d d  e e e e e") //returns ['e','d','a']
  
//topThreeWords("a a c b b") //returns ['a','b','c']  THIS ONE WORKS, YAY! GO YOU!
  
//topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e") //returns ['e','ddd','aa'] THIS ONE WORKS!!! GET IT, BROHEIM!

//topThreeWords("  //wont won't won't ") //returns ["won't", "wont"]  NEED TO TAKE OUT FORWARD SLASHES //
  
//topThreeWords("  , e   .. ") //returns ["e"] NEED TO TAKE OUT THINGS THAT AREN'T LETTERS

//topThreeWords("  ...  ") //returns [] NEED TO TAKE OUT THINGS THAT AREN'T LETTERS

//topThreeWords("  '  ") //returns [] NEED TO TAKE OUT THINGS THAT AREN'T LETTERS
  
// topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.`)  //returns ['a','of','on']
// THIS ONE WORKS!!! YAY, BIZZNIZZLE!

/*

PROBLEMS - FIRST INSTANCE RETURNS AN EMPTY STRING AS THIRD; NEED TO TAKE OUT ANY FORWARD SLASHES //; TAKE OUT ANYTHING THAT DOESN'T HAVE A LETTER IN IT. THIS IS THE LAST? THING TO DO?

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

THIS DIDN'T WORK -  const result = countTotal.sort((a,b) => a[1].localCompare(b[1]));
*/