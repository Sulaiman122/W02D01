// Task 1

// 1
const sum = function (a, b) {
    return a+b;
};


// 2
const average = function (a, b) {
    let avg = (a+b)/2
    return avg;
};


// 3
const findFactorial = function(num) {
    let fact=1;
    for (let index = 1; index <= num; index++) {
        fact = fact * index
    }
    console.log(fact);
}

// 4
const round = function (number) {
    return Math.round(number)
  };

// 5
const toThePowerOf = function (base, exponent) {
    return Math.pow(base, exponent)
  };

// 6
const randomNumber = function () {
    return Math.random()
  };

// 7
const oneOrZero = function () {
    return Math.round(Math.random() * 1 ) + 0;
  };

// 8
const randomRange = function (number) {
    return Math.floor(Math.random() * number);
  };

// 9
const includeOf = function (string, character) {
    return string.includes(character)
   };