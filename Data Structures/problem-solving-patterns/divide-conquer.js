/**
 * 
 * Divide and Conquer - countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s, 
write a function called countZeroes, which returns the number of zeroes in the array.

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
Time Complexity - O(log n)
 */


function countZeroes(arr) {
    let start = 0;
    let end = arr.length - 1;

    // If the first element is 0, the whole array is zeroes
    if (arr[0] === 0) return arr.length;

    // If the last element is 1, there are no zeroes
    if (arr[end] === 1) return 0;

    // Binary search to find the first occurrence of 0
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // If mid is zero and the previous element is 1 or mid is the first element, we found the first zero
        if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) {
            return arr.length - mid; // Number of zeroes
        } else if (arr[mid] === 1) {
            start = mid + 1; // Move right
        } else {
            end = mid - 1; // Move left
        }
    }
    
    return 0; // Default return if no zeroes found
}





console.log(countZeroes([1,1,1,1,0,0])) // 2
 console.log(countZeroes([1,0,0,0,0])) // 4
 console.log(countZeroes([0,0,0])) // 3
  console.log(countZeroes([1,1,1,1])) // 0

  console.log(countZeroes([1,1,1,1,1,1,0])) // 0