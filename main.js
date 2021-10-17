// Task 1

// 1
const sum = function (a, b) {
  return a + b;
};

// 2
const average = function (a, b) {
  let avg = (a + b) / 2;
  return avg;
};

// 3
const findFactorial = function (num) {
  let fact = 1;
  for (let index = 1; index <= num; index++) {
    fact = fact * index;
  }
  console.log(fact);
};

// 4
const round = function (number) {
  return Math.round(number);
};

// 5
const toThePowerOf = function (base, exponent) {
  return Math.pow(base, exponent);
};

// 6
const randomNumber = function () {
  return Math.random();
};

// 7
const oneOrZero = function () {
  return Math.round(Math.random() * 1) + 0;
};

// 8
const randomRange = function (number) {
  return Math.floor(Math.random() * number);
};

// 9
const includeOf = function (string, character) {
  return string.includes(character);
};

//Task 2

// 1
const addToArray = function (arr, string) {
  arr.push(string);
  return arr;
};

// 2
const convertToString = function (array) {
  return array.join(" ");
};

// 3
const updateOrCreate = function (array, value, index) {
  if (index <= array.length - 1) {
    array[index] = value;
    return array;
  } else {
    return "there is no element to updated in this index";
  }
};

// 4
const onlyString = function (array) {
  let str = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      str.push(array[i]);
    }
  }
  return str;
};

// 5
const users = [
  ["Jane", "123456"],
  ["admin", "abc123"],
];

const login = function (username, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i][0] === username && users[i][1] === password) {
      return "Login Successful";
    } else {
      return "Login Failed";
    }
  }
};

// 6
const maximumNumber = function (numbers) {
  return Math.max.apply(Math, numbers);
};

// 7
const reversString = function (string) {
  return string.split("").reverse().join("");
};

//Extra

// 1
const allUsers = [
  { username: "Jane", password: "123456" },
  { username: "admin", password: "abc123" },
];

const createUser = function (username, password) {
  for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i]["username"] === username) {
        return "That username is not available";
    }else{
      allUsers.push({username: username, password: password});
      return allUsers
    }
  }

};

// 2
const sliceArray = function (array, control) {
    const newArr = [];
    for (let i = 0; i < array.length; i += control) {
        const chunk = array.slice(i, i + control);
        newArr.push(chunk);
    }
    return newArr;
};
