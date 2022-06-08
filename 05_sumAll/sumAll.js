const sumAll = function(firstDig, secondDig) {

    if (firstDig <= 0) {
        return "ERROR";
    } else if (secondDig <= 0) {
        return "ERROR";
    }

    if (firstDig == String) {
        return "ERROR";
    } else if (secondDig <= String) {
        return "ERROR";
    }

    if (firstDig > secondDig) {
        testDig = firstDig;
        loopDig = secondDig;
    } else if (secondDig > firstDig) {
        testDig = secondDig;
        loopDig = firstDig;
    }

    let addArray = [];
    let sum = 0;
    
    while (loopDig <= testDig) {
        addArray.push(loopDig)
        loopDig++;
    }

    for (let i = 0; i < addArray.length; i++) {
        sum += addArray[i];
    }   
    return sum;
}




// Do not edit below this line
module.exports = sumAll;