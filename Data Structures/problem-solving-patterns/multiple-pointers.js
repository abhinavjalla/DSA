    /*

    Implement a function called countUniqueValues,
    which accepts a sorted array, and counts the unique values in the array.
    There can be negative numbers in the array, but it will always be sorted.


    countUniqueValues([1,1,1,1,1,2]) // 2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
    countUniqueValues([]) // 0
    countUniqueValues([-2,-1,-1,0,1]) // 4
    Time Complexity - O(n)

    Space Complexity - O(n)

    */


    function countUniqueValues(sortedArr) {
        if (sortedArr.length === 0) return 0; // Edge case
    
        let left = 0;
    
        for (let right = 1; right < sortedArr.length; right++) {
            if (sortedArr[left] !== sortedArr[right]) {
                left++; // Move pointer
                sortedArr[left] = sortedArr[right]; // Update unique position
            }
        }
    
        return left + 1; // Unique count
    }
    console.log(countUniqueValues([1,1,1,1,1,2]))
    console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
    console.log(countUniqueValues([]))
    console.log(countUniqueValues([-2,-1,-1,0,1]))
// 2
 // 7
 // 0
 // 4
