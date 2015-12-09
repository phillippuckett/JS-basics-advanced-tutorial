/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/

// 1 //
// FIRST //

//Code Here for first
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var first = function (arr, cb) {
  cb(arr[0]);
};
first(names, function (firstName) {
  console.log('The first name in names is ' + firstName);
});

// 2 //
// Last //

//Code Here for last
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var last = function (arr, cb) {
  cb(arr[arr.length - 1]);
};
last(names, function (lastName) {
  console.log('The last name in names is ' + lastName);
});

// 3 //
// MULTIPLY //

//Code Here for multiply
var multiply = function (numi, numii, cb) {
  cb(numi * numii);
};
multiply(5, 7, function (answer) {
  console.log('The answer is ' + answer);
});

// 4 //
// CONTAINS //

//Code Here for contains
var swearWord = ["Ass", "Bastard", "Bitch", "Cunt", "Damn", "Fuck", "Shit"];
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var contains = function (arr, par, cb) {
  cb(arr.indexOf(par) !== -1, par);
};
contains(swearWord, 'Colt', function (result, par) {
  if (result === true) {
    console.log(+ ' is in the array');
  } else {
    console.log(+ ' is not in the array');
  }
});

// 5 //
//UNIQUE //
//Code Here for unique

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var unique = function (arr, callBack) {
  arr.sort();                               // SORT puts 'str's of an array into alphaetical order.
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {          // If the element equals the element next to it, we proceed to the next line.
      arr.splice(i + 1, 1);               // Here we splice the element next to the original element, and only that element.
    }
  }
  callBack(arr);
};
unique(names, function (uniqArr) {       // Here we invoke unique(arr, callBack), which is also where we declare the actual callBack function.
  console.log('The new names array with all the duplicate items removed is ', uniqArr);  // The callBack function serves to console log the result "res".
});

// 5 //
// UNIQUE ALT //
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var unique = function (arr, callBack) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var currName = arr[i];
    if (newArr.indexOf(currName) === -1) {
      newArr.push(currName);
    }
  }
  callBack(newArr);
};
unique(names, function (uniqArr) {       // Here we invoke unique(arr, callBack), which is also where we declare the actual callBack function.
  console.log('The new names array with all the duplicate items removed is ', uniqArr);  // The callBack function serves to console log the result "res".
});

// 6 //
// EACH ITEM-TO-INDICE //

//Code Here for each
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var each = function (arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
  cb(arr);
};
each(names, function (item, indice) {
  console.log('The item in the ' + indice + ' position is ' + item)
});

// 7 //
// GET USERS BY ID //

//code here for getUserById
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

var getUserById = function (arr, objProp1, cb) {
  for (var i = 0; i < arr.length; i++) {
    var indice = arr[i];
    if (indice.objProp1 === objProp1) {
    }
      cb(indice);
  }
};

getUserById(users, '', function (user) {
  console.log('The user with the id ' + user.id +' has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});