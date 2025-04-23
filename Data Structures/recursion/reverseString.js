/**
 * 
 * Write a recursive function called reverse which accepts a 
 * string and returns a new string in reverse.
 */


function reverseString(str) {
    if (str.length <= 1) {
        return str;
      }
      return reverseString(str.slice(1)) + str[0];
   
}
console.log(reverseString('abhi'))
console.log(reverseString(' '))