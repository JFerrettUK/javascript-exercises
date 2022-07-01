const fibonacci = function(input) {
    input = +input;
    
    if (input <= 0) {
        return "OOPS";
    }

    let a = 0, b = 1, c = input;

    for(let i = 2; i <= input; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
};


//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025

// Do not edit below this line
module.exports = fibonacci;
