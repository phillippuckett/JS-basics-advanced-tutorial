//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var phillipPuckett = new Person("Phillip E Puckett", "27");
var Person = function (name, age) {
  this.name = name;
  this.age = age;
};
console.log(Person(phillipPuckett));

//Now create three instances of Person with data you make up

  //code here
var person = Object();
Person.stompingGrounds = "SLC";
Person.favLocalJoint = "Molca Salsa";
//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
 var phillipPuckett = new Person("Phillip E Puckett", "27");
