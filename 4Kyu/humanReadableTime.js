function formatDuration (seconds) {
  
  if (Math.floor(seconds === 0)) {
    return "now"
  }
  
  const year = 31536000
  const day = 86400
  const hour = 3600
  const minute = 60
  let years
  let days
  let hours
  let minutes
  let secondsRemaining
  
  if (seconds >= year) {
    const totalYears = Math.floor(seconds/year)
    years = totalYears
    secondsRemaining = seconds - (year * totalYears)
  } else if (seconds < year) {
    years = 0
    secondsRemaining = seconds
  }
  
  if (secondsRemaining >= day) {
    const totalDays = Math.floor(secondsRemaining/day)
    days = totalDays
    secondsRemaining -= day * totalDays
  } else if (secondsRemaining < day ) {
    days = 0
    secondsRemaining = seconds
  }
  
  if (secondsRemaining >= hour) {
    const totalHours = Math.floor(secondsRemaining/hour)
    hours = totalHours
    secondsRemaining -= hour * totalHours
  } else if (secondsRemaining < hour) {
    secondsRemaining = seconds
    hours = 0
  }
  
  if (secondsRemaining >= minute) {
    const totalMinutes = Math.floor(secondsRemaining/minute)
    minutes = totalMinutes
    secondsRemaining -= minute * totalMinutes
  } else if (secondsRemaining < minute) {
    secondsRemaining = seconds
    hours = 0
  }
  
  // console.log(years, days, hours, minutes, secondsRemaining)
  // return [years, days, hours, minutes, secondsRemaining]
  
  let yearsStr
  let daysStr
  let hoursStr
  let minutesStr
  let secondsStr
  let timeArray = []
  
  if (years === 1) {
    yearsStr = `${years} year`
    timeArray.push(yearsStr)
  } else if (years > 1){
    yearsStr = `${years} years`
    timeArray.push(yearsStr)
  } 
  console.log(years)

  if (days === 1) {
    daysStr = `${days} day `
    timeArray.push(daysStr)
  } else if (days > 1) {
    daysStr = `${days} days`
    timeArray.push(daysStr)
  }
  console.log(days)
  
    if(hours === 1) {
    hoursStr = `${hours} hour`
    timeArray.push(hoursStr)
  } else if (hours > 1) {
    hoursStr = `${hours} hours`
    timeArray.push(hoursStr)
  }
  console.log(hours)
  
    if(minutes === 1) {
    minutesStr = `${minutes} minute`
    timeArray.push(minutesStr)
  } else if(minutes > 1) {
    minutesStr = `${minutes} minutes`
    timeArray.push(minutesStr)
  }
  console.log(minutes)
  
    if(secondsRemaining === 1) {
    secondsStr = `${secondsRemaining} second.`
    timeArray.push(secondsStr)
  } else if(secondsRemaining > 1) {
    secondsStr = `${secondsRemaining} seconds.`
    timeArray.push(secondsStr)
  }
  console.log(secondsRemaining)
  
  let timeStatement
  let addAndArray = []
  let lastTwoElements = []
  let lastStrPart
  console.log(timeArray)
  
  if (timeArray.length === 1) {
    let timeStatement = timeArray.join()
    console.log(timeStatement)
  } else if (timeArray.length === 2) {
    let timeStatement = timeArray.join('and')
    console.log(timeStatement)
  } else if (timeArray.length > 2) {
    
    for(let i = 0; i < timeArray.length - 2; i++) {
      addAndArray.push(timeArray[i])
    }
    lastTwoElements.push(timeArray[timeArray.length - 2])
    lastTwoElements.push(timeArray[timeArray.length - 1])
    const lastStrPart = lastTwoElements.join(" and ")
    let timeStatement = addAndArray.join(', ')
    console.log(timeStatement)
    console.log(lastStrPart)
  }
  
  const lastTimeStatement = `${timeStatement}, ${lastStrPart}`
  console.log(typeof lastTimeStatement)
  console.log(lastTimeStatement)
}

formatDuration(7312)
// formatDuration(31543312)
// formatDuration(1) //returns "1 second");
// formatDuration(62) //returns "1 minute and 2 seconds");
// formatDuration(120) //returns "2 minutes");
// formatDuration(3600) //returns "1 hour");
// formatDuration(3662) //returns "1 hour, 1 minute and 2 seconds");

// /*

// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.



// */

// console.log(Math.floor(5/2))
