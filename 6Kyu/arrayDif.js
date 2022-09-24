
// COMPLETED

function arrayDiff(a, b) {
  // iterate over b
  for(let i = 0; i < b.length; i++) {
    // for each iteration, make a character to remove
    let charToRemove = b[i]
    // filter out the character to remove, wash, rinse, repeat
    a = a.filter(el => el != charToRemove)
  }
  return a
}

// a simpler answer return a.filter(e => !b.includes(e));

console.log(arrayDiff([1,2], [1])) // return [2]
console.log(arrayDiff([1,2,2], [1])) // return [2,2]
console.log(arrayDiff([1,2,2], [2])) // return [1]
console.log(arrayDiff([1,2,2], []))  // return [1,2,2]
console.log(arrayDiff([], [1,2])) // return []
console.log(arrayDiff([1,2,3], [1,2])) // return [3]
  
  
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]



for(let j = 0; j < a.length; j++) {
      if(a[j] != charToRemove) {
        console.log(a[j])
        newArray.push(a[j])
      }
    }
*/