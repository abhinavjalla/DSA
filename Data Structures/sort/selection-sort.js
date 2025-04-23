/**
 * 
 * Assign the first element to be the smallest value (this is called the minimum).
 *  It does not matter right now if this actually the smallest value in the array.
Compare this item to the next item in the array until you find a smaller number.
If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
If the "minimum" is not the value (index) you initially began with, swap the two values.
 You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
Repeat this with the next element until the array is sorted.
This algorithm has a O(n^2) time complexity.
 */

function selectionSort(arr) {
    for(let i =0;i<arr.length;i++) {
        let newMinIndex = i;
        for(let j = i+1; j < arr.length;j++ ) {
            if(arr[j] < arr[newMinIndex]) {
                newMinIndex = j;
            }
            console.log(arr)
        }
        if(newMinIndex !== i) {
            let temp = arr[newMinIndex];
            arr[newMinIndex] =  arr[i];
            arr[i] = temp
        }
    }
    return arr;
}



console.log(selectionSort([5,4,3,1,2]))