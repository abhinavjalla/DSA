import {getPlaceValueOfNumber,findBiggestNumber,countDigits} from './radix-helper.js';

function radixSort(arr) {
    let biggestNumber = findBiggestNumber(arr);
    let howManyTimesLoopToIterate = countDigits(biggestNumber);
    
    // Iterate over each digit place, from the least significant to the most significant
    for (let i = 0; i < howManyTimesLoopToIterate; i++) {
        let bigBuckets = Array.from({ length: 10 }, () => []); // Create 10 buckets (0-9)
        
        // Place numbers in corresponding buckets based on their current digit
        for (let j = 0; j < arr.length; j++) {
            let digit = getPlaceValueOfNumber(arr[j], i); // Get the digit at place i
            bigBuckets[digit].push(arr[j]);
        }

        // Concatenate all the numbers from the buckets back into the array
        arr = [].concat(...bigBuckets);
    }

    return arr;
}



console.log(radixSort([12,3424,1,82,0,99,567]));