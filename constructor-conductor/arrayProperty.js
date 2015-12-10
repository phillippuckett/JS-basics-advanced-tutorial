// Just like you can add methods to your own constructor, 
// you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

// Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
  var str = "classes CAN be fun, but usually are not";
  var reverse = function (str) {
    return str.split('').reverse().join('');
  };
  console.log(reverse(str));