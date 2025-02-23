/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
    if(str1.length!=str2.length){
      return false;
    }
    for(let i=0;i<str1.length;i++){
      let p=str2.indexOf(str1.charAt(i));//if the index is -1 it does not exsist
      let q=str1.indexOf(str2.charAt(i));
      if(p==-1 || q==-1){
        return false;
      }
    }
    return true;
}

module.exports = isAnagram;
