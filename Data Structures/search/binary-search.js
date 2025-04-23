
//divide-and-conquer problems 
//input should be linear
function binarySearch(inputArray,element) {
    let startIndex = 0;
    let endIndex = inputArray.length-1;
    while(startIndex <= endIndex) {
        let mid = Math.floor((startIndex+endIndex)/2)
        if(inputArray[mid] == element) {
            return mid
        }
        if(inputArray[mid] < element) {
            startIndex = mid +1 ;
        }
        if(inputArray[mid] > element) {
            endIndex = mid -1;
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,6,7,9,12,14,17],13))