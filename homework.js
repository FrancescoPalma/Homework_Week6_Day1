// Section 1

// What types are these? Write your answer in a comment beside it.

1; // Number
"cat"; // String
true; // Boolean
[]; // Array - Object
{}; // Hash - Object
1.1; // Number
undefined; // Undefined

// Section 2

// What is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...

1; // True
"cat"; // True
true; // True
NaN; // False
[]; // True
{}; // True
undefined; // False
""; // False 
0; // False

// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number

var myNumber = 10;

// 3.2 Assign a variable that is a string

var myString = 'My name is Francesco';

// 3.3 Assign a variable that is a boolean

var myBoolean = true;

// 3.4 Assign a variable that is an object

var myPlayer = [];

// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

var greet = "hey, there!";

if(greet === "hey, there!") {
  console.log("hello");
} else {
  console.log("bye");
} 

// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable

var firstElementInArray = animals[0]; 

// 5.2. Assign the last element to a variable

var lastElementInArray = animals[3];
var lastElementInArray = animals.slice(-1)[0]; // without cheating

// 5.3. Assign the length of an array to a variable

var arrayLength = animals.length

// 5.4. Add an item to the end of the array

animals.push("lion");

// 5.5. Add an item to the start of the array

animals.unshift("elephant");

// 5.6. Assign the index of hedgehog to a variable

var hedgehogIndex = animals.indexOf('hedgehog');  

// Section 6

// 6.1 Create an array of 5 vegetables

var myVeggies = ['salad', 'carrots', 'tomatoes', 'broccoli', 'cauliflower'];

// 6.2 Loop over the array and write to the console using a "while"

var i = 0;
while (i < myVeggies.length) {
  console.log(myVeggies[i]);
  i++;
}

// 6.3 Loop again using a "for" with a counter

for (var counter = 0; counter < myVeggies.length; counter++) {
  console.log(myVeggies[counter]);
};

// 6.4 Loop again using a "for in"

for (var veggie in myVeggies) {
  console.log(veggie);
};

// Section 7 

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
]

// 7.1 Calculate the total cash in accounts

var totalAmount = function(array) {
  var x, total = 0;
  for (x = 0; x < array.length; x++) {
    total += array[x]['amount'];
  }
  return total;
}
console.log(totalAmount(accounts));

// 7.2 Find the name of the account with the largest balance

var memo = 0;
var name;
for (account of accounts) {
  if (account.amount > memo) {
    name = account.name;
    memo = account.amount;
  }
}
console.log(name);

// 7.3 Find the name of the account with the smallest balance

var memo = accounts[0].amount;
var name = accounts[0].name;
for (account of accounts) {
  if (account.amount < memo) {
    name = account.name;
    memo = account.amount;
  }
}
console.log(name);

// 7.4 Calculate the average bank account value

console.log(totalAmount(accounts)/accounts.length);

// 7.5 Find the value of marcs bank account

var findValuebyName = function(hash, name) {
  for (var x of hash) {
    if (x.name === name) {
      return x.amount;
    }
  }
}
console.log(findValuebyName(accounts, 'marc'));

// 7.6 Find the holder of the largest bank account



// 7.7 Calculate the total cash in business accounts

var findBusinessTotal = function() {
  var total = 0;
  for (account of accounts) {
    if (account.type === 'business') {
      total += account.amount;
    }
  }
  return total;
}

// 7.8 Find the largest personal account owner

var biggestPersonalAccount = account[0];
for (var account of accounts) {
  if (account.amount > biggestPersonalAccount.amount && account.type === 'personal') {
    biggestPersonalAccount = account;
  }
}
console.log(biggestPersonalAccount.name)

// Section 8 - Not done

// Assign a variable myPerson to a hash, giving them a name, height favourate food