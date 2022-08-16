function topThreeWords(text) {
  const textToLowerCase = text.toLowerCase()
  const filterOutSpecialCharacters = textToLowerCase.replace(/[^a-zA-Z' ]/g, "")
  const textToArray = filterOutSpecialCharacters.split(" ")
  const filterTextInArray = textToArray.filter(element => element)
   
  const count = {}
  
  filterTextInArray.forEach(element => {
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
  console.log(typeof finalResult)
  
  let first
  let second
  let third
  
  let resultArray = []
  
    if (finalResult.length === 0) {
      return []
    } else if (finalResult.length === 1) {
      first = finalResult[0][0]
      resultArray.push(first)
      return resultArray
    } else if (finalResult.length === 2) {
      first = finalResult[0][0]
      second = finalResult[1][0]
      resultArray.push(first, second)
      return resultArray
    } else if (finalResult.length >= 3) {
      first = finalResult[0][0]
      second = finalResult[1][0]
      third = finalResult[2][0]
      resultArray.push(first, second, third)
      return resultArray
    }
    
}

//console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")) //returns ['e','d','a'] WORKS!!
  
//topThreeWords("a a c b b") //returns ['a','b','c']  THIS ONE WORKS, YAY! GO YOU!
  
//topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e") //returns ['e','ddd','aa'] THIS ONE WORKS!!! GET IT, BROHEIM!

//topThreeWords("  //wont won't won't ") //returns ["won't", "wont"]  WORKS!
  
//topThreeWords("  , e   .. ") //returns ["e"] WORKS!

//topThreeWords("  ...  ") //returns [] WORKS!

//topThreeWords("  '  ") //returns [] WORKS!
  
// topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.`)  //returns ['a','of','on']
// THIS ONE WORKS!!! YAY, BIZZNIZZLE!