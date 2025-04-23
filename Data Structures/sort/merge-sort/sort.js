/**
    Merge Sort involves two steps
        -Breaking array into length 1 using Divide and Conquer 
        - Sorting and merging those Arrays

        time complexity
            Best Case 0(nlogn)
            worst case 0(nlogn)
            average 0(nlogn)
        Space Complexity 
            O(n)
 */



import { mergeTwoSortedArrays } from './merging-sorted-arrays.js';


function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return  mergeTwoSortedArrays(left,right)
}

console.log(mergeSort([3,2,1,4,6,5,6]))
