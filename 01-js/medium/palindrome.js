/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  let n=str.length-1;
  let i=0;
  while(i<=n){
    if(str.charAt(i)===' '){
      i++;
      continue;
    }
    if(str.charAt(n)==' '){
      n--;
      continue;
    }
    if(str.charAt(i)<='a' || str.charAt(i)>='z'){
      i++;
      continue;
    }
    if(str.charAt(n)<='a' || str.charAt(n)>='z'){
      n--;
      continue;
    }
    if(str.charAt(i)!==str.charAt(n)){
      return false;

    }
    i++;
    n--;

  }
  return true;
}

module.exports = isPalindrome;
