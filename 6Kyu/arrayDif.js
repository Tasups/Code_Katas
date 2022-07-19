function arrayDiff(a, b) {
  let newArray = []
  for(let i = 0; i < b.length; i++) {
    let charToRemove = b[i]
    newArray = a.filter(el => el != charToRemove)
  }
  console.log(newArray)
  return newArray
}

// arrayDiff([1,2], [1]) // return [2]
// arrayDiff([1,2,2], [1]) // return [2,2]
// arrayDiff([1,2,2], [2]) // return [1]
// arrayDiff([1,2,2], [])  // return [1,2,2]
// arrayDiff([], [1,2]) // return []
arrayDiff([1,2,3], [1,2]) // return [3]
  
  
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