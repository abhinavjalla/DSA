/**
 Write a recursive function called flatten which accepts an array of arrays and returns 
 a new array with all values flattened.

flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

 */


function flatten(arr){
        // Base case: If the array is empty, return an empty array
        if (arr.length === 0) {
            return [];
        }
        
        // If the first element is an array, recursively flatten it and combine with the rest
        if (Array.isArray(arr[0])) {
            return flatten(arr[0]).concat(flatten(arr.slice(1)));
        }
        
        // If the first element is not an array, just include it in the result and recurse with the rest
        return [arr[0]].concat(flatten(arr.slice(1)));
  }
  


console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))

// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3