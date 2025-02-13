function isPalindrome(word) {
  // Write your algorithm here
  for(let i = 0; i < word.length/2; i++) {
    if(word[i] !== word[word.length - 1 - i]) {
      return false;;
    } else {
      return true;
    };
  }
}


/* 
  Add your pseudocode here
  function isPalindrome(word) {
    set length to be length of word string 
      loop from 0 to the length divided by 2 (so half) of the word string
        compare thr character at the i'th index and the index - 1 - i
          if theyre not equal then return false bc its not a pali
        else return true (because it is a pali)
  }
*/

/*
  I'm looping through the word (string) in its entirety 
  as im looping, I'm halfing the length of my word (string)
  After that, I'm checking to see if the i'th index of the word (string) is NOT equivilen to the i'th index
  and 1 subtracted from the length of the word (an integer/number)'th index at word (string)
  if so, return 'false' because it is NOT a palindrome and if not, return 'true' because IT IS a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("abc"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("batman"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("c"));
}

module.exports = isPalindrome;
