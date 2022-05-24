//Take note of the above function call
//- how exactly is it being called?

//You're going to want to use a loop for this one.

//Create a variable to hold the string you're 
//going to return, create a loop that repeats
//the given number of times and add the given
//string to the result on each loop.

//If running `npm test repeatString.spec.js` 
//returns results similar to the below, make
//sure you have enabled the rest of the tests,
//as described in the instructions above.

const repeatString = function(string, num) {
  let answer = ""

  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
        answer = (answer + string);
      }      
      let finalresult = answer
      return finalresult;
    };
  }

// Do not edit below this line
module.exports = repeatString;
