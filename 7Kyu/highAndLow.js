
// COMPLETED

function highAndLow(numbers) {
  const replacedStr = numbers.split(' ') 
  let numArray = []
  for (let x = 0; x < replacedStr.length; x++) {
  let strToInt = parseInt(replacedStr[x])
  numArray.push(strToInt)
  }
  let highest = numArray[0]
  let lowest = numArray[0]
  for(let i = 0; i < numArray.length; i++){
    if(numArray[i] > highest) {
      highest = numArray[i]
    }
  }
  for(let j = 0; j < numArray.length; j++){
    if (numArray[j] < lowest){
      lowest = numArray[j]
    }
  }
  let highNumToString = highest.toString()
  let lowNumToString = lowest.toString()
  const answerFilter = `${highNumToString} ${lowNumToString}`
  const answer = answerFilter.toString()
  return answer
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) // return "42 -9"
console.log(highAndLow("1 2 3")) // return "3 1"


/*

simpler answer:
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

*/