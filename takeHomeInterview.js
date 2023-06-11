/* The coding portion took me about 2 to 2.5 hours altogether; the personality questions seemed to take about an hour.

Task: Write a function that takes an array of numbers and finds all prime numbers from that array and returns them in a sorted array. 
Avoid using math libraries to determine whether the number is prime.
*/

/*
My Notes for sortedPrime function
1. Iterate through the array and check if it divided by n has a remainder of zero. We start at 2 because it is a prime number and 1, by definition isn't. If array[i] / 2 has a remainder, it is not prime and we can break out of that for loop iteration. We can stop at one half of array[i] rounded down since dividing by 2 would result in the largest divisor that would result in a remained of zero. This will drop the time complexity by half or from O(n) to something lower but not constant and likely higher than O(n log n), though I'm not sure and would have to do the math. We need to make sure that if array[i] === 1 || array [i] === 0 that we continue the loop as we can't count either of them. 
3. I could write my own sorting algorithm, however, I think that .sort((a,b) => a - b) should work well.
*/

// used for testing to see more than 100 outputs
const util = require("util");
// helper function to test
function printToANumber(n) {
  let bigNumArr = [];
  for (let i = 1; i < n; i++) {
    bigNumArr.push(i);
  }
  //console.log(bigNumArr);
  return bigNumArr;
}

function sortedPrimes(input_array) {
  var result = [];
  // go over every number in input_array
  for (let i = 0; i < input_array.length; i++) {
    let isPrime = true;
    let divisor = 2;
    // check that input_array[i] isn't 0 or 1;
    if (input_array[i] === 0 || input_array[i] === 1) continue;
    // as long as its still prime and we haven't gotten to half or close to half of the value of input_array[i], we keep going
    while (isPrime && divisor <= Math.floor(input_array[i] / 2)) {
      // if the number at i is ever divisible by the divisor, its not a prime, we can break here!
      if (input_array[i] % divisor === 0) {
        isPrime = false;
        break;
        // if we've gotten here, the number is still prime and we need to increment the divisor, let's keep checking!
      } else {
        divisor++;
      }
    }
    // hey! we got here! if isPrime is true, that baby is prime!
    if (isPrime) result.push(input_array[i]);
  }
  // sort the babies, um, numbers
  result.sort((a, b) => a - b);
  // check me work
  //console.log(util.inspect(result, { maxArrayLength: null}));
  return result;
}

// make an array to test the function sortedPrimes
//const bigArray = printToABigNumber();

// smaller tests
//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//const testArr = [11, 4, 1, 7, 9, 10, 8, 3, 5, 2, 6];

//sortedPrimes(bigArray);

// NEXT Task: Write a function that takes an array of numbers and returns an array of arrays of prime factors for each number.
// if a prime factor goes into a number more than once, it is only included once

/** My notes for primeFactors
 1.We need to go through each number in the array, array[i] and find out how many lesser prime numbers can go into the number itself. 
 2. Looping will be necessary, but once again, we don't have to go to the actual number, we can split the number in half, round down and start the looping there, unless we use a function that already does that.
 3. We could use a counter or divisor that goes up to the next highest prime number. The only problem with this is to find the next highest prime number. We could write an algorithm using a Sieve of Eratosthenes to find many prime numbers, however, we have already made a prime number finder, so we could tweak it a little and use it to find all the prime numbers from 2 to half the target number. In production, using a Sieve of E would make more sense, for this practice, my old function should work.
 4. We need to create a function that creates an array of numbers, sorted, from 2 to n. That is why I created the helper function printToANumber, so that we can make an array and then pass it to our previous function sortedPrimes. The sorting may be redundant for this application, but that's ok, we can still use it. I did use printToANumber for testing of the sortedArray function as well.
 */

async function primeFactors(input_array) {
  // store results
  let result = [];
  // iterate over the input_array
  for (let i = 0; i < input_array.length; i++) {
    // make sure the number isn't a 1 or lower
    if (input_array[i] > 1) {
      // create an array of numbers so we can find the prime numbers that we need to divide by *see next step*
      const numberArray = await printToANumber(input_array[i]);
      // use sortedPrimes to find all the prime numbers in the numberArray
      const primeArr = await sortedPrimes(numberArray);
      // store the factors in an array
      let factorArr = [];
      // iterate over the primeArr numbers and check to see if the input_array[i] % primeArr[j] === 0, if so, store it
      for (let j = 0; j < primeArr.length; j++) {
        if (input_array[i] % primeArr[j] === 0) {
          factorArr.push(primeArr[j]);
        }
      }
      // once we've found all the prime factors for the number at input_array[i] we push them into the resultArr
      result.push(factorArr);
      // if the number is equal to or lower than one, continue
    } else if (input_array[i] <= 1) {
      continue;
    }
  }
  console.log(result);
  return result;
}
// test the function
// primeFactors([0, 6, 8, 9, 100, 333, 1331]);
// [0, 6, 8, 9, 100, 333, 1331] -> [[2, 3], [2], [3], [2, 5], [3, 37], [ 11 ]];

function main() {
  var input = [0, 6, 8, 9, 100, 333, 991, 1331];
  var result = sortedPrimes(input);
  console.log(result);

  var result2 = primeFactors(input);
  console.log(result2);
}
