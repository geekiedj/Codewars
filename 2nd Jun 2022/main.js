//You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

//Write a program that returns the girl's age (0-9) as an integer.

//Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

//My thought process on this; I simply googled a method that could easily return an integer and it so happens that
//the MDN gave me 2 options. The parseInt() and the num.string() method.
//With either of them, you'd get an integer.

function getAge(inputString){
    return parseInt(inputString);
  }
