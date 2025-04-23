function bubbleSort(arr) {
    let n = arr.length;

    // Outer loop to go through the entire array
    for (let i = 0; i < n - 1; i++) {
        // Inner loop to compare adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            // Swap elements if they are in the wrong order
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;

}

console.log(bubbleSort([2,3,1,7,2,5,9,0]))