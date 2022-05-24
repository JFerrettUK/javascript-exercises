let testStr = "reverseme";

const reverseString = function(testStr) {
    let arrayStr = testStr.split('')
    let reversed = arrayStr.reverse();
    let finaltxt = reversed.join('')
    return finaltxt
};

// Do not edit below this line
module.exports = reverseString;
