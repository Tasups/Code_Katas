
// NOT COMPLETED

function digital_root(n) {
  let total = 0
  let int
  
  const distillNum = (n) => {
    const nToString = n.toString(10)
    const nToArray = nToString.split('')
    
    for (let i = 0; i < nToArray.length; i++) {
      int = parseInt(nToArray[i], 10)
      if (total.length > 1) {
        distillNum(total);
      } else if (total.length === 1) {
        return total;
      }
      total += int
    }
    return total
  }
  
  distillNum(n)
  
  
  console.log(total)
}

digital_root(16) //returns 7
digital_root(456)//returns 6 

/*

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11

*/