function spinWords(string){
  const array = string.split(" ")
  let newArray = []
  for(let i = 0; i < array.length; i++) {
    if(array[i].length >= 5) {
      //console.log(array[i])
      const reverseEl = [...array[i]].reverse().join("")
      //console.log(reverseEl)
      newArray.push(reverseEl)
    } else {
      newArray.push(array[i])
    }
  }
  console.log(newArray)
  return newArray
}

spinWords("Welcome") // returns "emocleW"
// spinWords("Hey fellow warriors") // returns "Hey wollef sroirraw"
// spinWords("This is a test") // returns "This is a test"
// spinWords("This is another test") // returns "This is rehtona test"
// spinWords("You are almost to the last test") // returns "You are tsomla to the last test")
// spinWords("Just kidding there is still one more") // returns "Just gniddik ereht is llits one more"
// spinWords("Seriously this is the last one") // returns"ylsuoireS this is the last one"

/*

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: 
  spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
  spinWords( "This is a test") => returns "This is a test" 
  spinWords( "This is another test" )=> returns "This is rehtona test"

*/