/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count=0;
    str=str.toLowerCase();
    let arr=['a','e','i','o','u']
    for(let i of str){
      for(let j of arr){
        if(i==j){
          count++;
        }
      }
      
    }
    return count;
}

module.exports = countVowels;