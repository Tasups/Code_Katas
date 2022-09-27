
// COMPLETED

function findOutlier(integers) {
  //make an array for even and odd numbers
  let even = []
  let odd = []
  //loop over array
  for (let i = 0; i < integers.length; i++) {
    //see if the number is at that index is odd or even with modulus
    if (integers[i] % 2 === 0) {
      //push number each into their respective arrays, odd or even, 
      even.push(integers[i])
      //push number each into their respective arrays, odd or even, 
    } else odd.push(integers[i])
  }
  //whichever array has only one item in it
  if (even.length === 1) {
    console.log(even[0])
    return even[0]
  } else 
    console.log(odd[0])
    return odd[0]
}

findOutlier([0, 1, 2]) //returns 1
findOutlier([1, 2, 3]) //returns 2
findOutlier([2,6,8,10,3]) //returns 3
findOutlier([0,0,3,0,0]) //returns 3
findOutlier([1,1,0,1,1]) //returns 0

/*

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

*/