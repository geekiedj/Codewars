//Write a function named setAlarm which receives two parameters. 
//The first parameter, employed, is true whenever you are employed and the second parameter,// vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm).
// It should return false otherwise. 

//My solution:

function setAlarm(employed, vacation){
    if (employed && !vacation)
    return true;
    return false;
  }

 //since there's a collection of conditionals that'll result in the same value, i decided to use a more condensed
 //way to write the code by grouping the 3 conditionals which would result to false and 1 result which is true. see below what I mean;
 
// employed and on vacation should return -> false
// unemployed but on vacation should return -> false 
// unemployed but not on vacation should return -> false
// employed but not on vacation should return -> true beaue thats the only time we want to set an alarm.
  