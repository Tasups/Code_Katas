function pigIt(str){
  const strToArray = str.split(" ")
  const newArray = []
  
  for (let i = 0; i < strToArray.length; i++) {
    if (strToArray[i] === "!") {
      newArray.push("!")
      i++
      } else if (strToArray[i] === "?") {
        newArray.push("?")
        i++
      }
        else {
        let firstLetter = strToArray[i].charAt(0)
        let newStringSuffix = `${firstLetter}ay`
        let newStringPrefix = strToArray[i].slice(1)
        let newString = `${newStringPrefix}${newStringSuffix}`
        newArray.push(newString)
      }
  }
  const result = newArray.join(" ")
  return result
}

//BEST ANSWERS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function pigItBest(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

function pigItPrettyGood(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}

//pigIt('Pig latin is cool') //returns 'igPay atinlay siay oolcay' WORKS!
//pigIt('This is my string') //returns 'hisTay siay ymay tringsay' WORKS!

/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

*/