/**
 * Write a recursive function called isPalindrome which returns true 
 * if the string passed to it is a palindrome (reads the same forward and backward).
 *  Otherwise it returns false.
 * 
 * // isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
 */

function isPalindrome(s) {
    if (s.length <= 1) {
        return true;
    }
    
    // Compare the first and last characters
    if (s[0] !== s[s.length - 1]) {
        return false;
    }
    
    // Recursive case: Check the substring excluding the first and last characters
    return isPalindrome(s.slice(1, s.length - 1));
}