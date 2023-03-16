//Definition of function firstLetterOfName:
function firstLetterName(name) {
  var firstLetterOfName = name[0];
  alert("The name " + name + " starts with the letter " + firstLetterOfName); 
}

//Definition of function divisibleByTwo:
function divisibleByTwo(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//Definition of function largestNum:
function largestNum(input_arr) {
  var max_value;
  max_value = input_arr[0];
  for (var i = 1; i < input_arr.length; i++) {
    if (input_arr[i] > max_value) {
      max_value = input_arr[i];
    }
  }
  return max_value;
}

//Calling the functions:
firstLetterName("John");
alert("Number 9 is divisible by two: " + divisibleByTwo(9));
alert("Number 24 is divisible by two: " + divisibleByTwo(24));
alert("Maximal value of array [7, 8, 1, 9, 10]: " + largestNum([7, 8, 1, 9, 10]));