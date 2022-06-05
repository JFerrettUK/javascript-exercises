

const removeFromArray = function(testArr) {
    for (let deleteNum = 0; deleteNum < testArr.length; deleteNum++) {

        let args = Array.from(arguments)

        if (typeof args[1] == String) {
            continue;
        } 

        if (testArr[deleteNum] === args[1]) {
            testArr.splice(deleteNum,1);
        } 
        
        if (testArr[deleteNum] === args[2]) {
            testArr.splice(deleteNum,1);
        } 
        
        if (testArr[deleteNum] === args[3]) {
            testArr.splice(deleteNum,1);
        } 

        if (testArr[deleteNum] === args[4]) {
        testArr.splice(deleteNum,1);
        } 

        if (testArr[deleteNum] === args[4]) {
        testArr.splice(deleteNum,1);
        } 
    
        if (testArr[deleteNum] === args[3]) {
        testArr.splice(deleteNum,1);
        } 
    
        if (testArr[deleteNum] === args[2]) {
        testArr.splice(deleteNum,1);
        } 

        if (testArr[deleteNum] === args[1]) {
        testArr.splice(deleteNum,1);
        } 

    }

    return testArr

};

// Do not edit below this line
module.exports = removeFromArray;



//Problem: removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)

//Plan:
//1. Create a function.

//2. Takes an array and some other arguments.

//3. Removes the other arguments from that array