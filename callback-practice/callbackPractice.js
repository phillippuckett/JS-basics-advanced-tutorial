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

// FIRST //

//Code Here for first
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var first = function (arr) {
  for (var i = 0; i <= 0; i++) {
    var firstName = arr[i];
  }
  console.log('The first name in names is ' + firstName);
};
first(names);

// Last //

//Code Here for last
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var last = function (arr) {
  for (var i = arr.length; i > arr.length - 1; i--) {
    var lastName = arr[i];
  }
  console.log('The last name in names is ' + lastName);
};
last(names);

// MULTIPLY //

//Code Here for multiply
var multiply = function (numi, numii) {
  var answer = numi * numii;
  console.log('The answer is ' + answer);
};
multiply(3, 4);

// CONTAINS //

//Code Here for contains
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var contains = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'Colt') {
      console.log('Colt is in the array');
    } else {
      console.log('Colt is not in the array');
    }
  }
};
contains(names);

//UNIQUE //
//Code Here for unique

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var unique = function (arr) {
  for (var i = 0;) {
        console.log('The new names array with all the duplicate items removed is ', uniqueNames);
  }

};
unique();






/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




//Code Here for each

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function (item, indice) {
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





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

getUserById(users, '16t', function (user) {
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
