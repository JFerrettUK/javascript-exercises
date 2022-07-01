const add = function(num1, num2) {
  addResult = (num1 + num2);
  return addResult;
};

const subtract = function(num1, num2) {
  subResult = (num1 - num2);
  return subResult;
}

const sum = function(array) {
	let initialValue = 0;
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue
  );
  return sumWithInitial;
};

const multiply = function(array) {
  const multiplic = array.reduce((total, item) => {
    return total * item
  }, 1)
  return multiplic;
};

const power = function(base, exponent) {
  let result = 0;
	for (let i = 0; i <= exponent; i++) {
    if (i === 0) {
      result = (base * base);
    } else if (i <= exponent) {
      result = (result * base)
      return result;
    } else {
      result = (result * base)
    }

  }  
  return result;
};

const factorial = function(num) {
	for (let i = 0; i <= num; i++) {
    if (i === 0) {
      result = 1;
    } else if (i <= num) {
      result = (i * result);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
