

// function insertionSort(arr) {
//     for(let i =1;i< arr.length;i++) {
//         for(let k =i;k > 0 ; --k) {
//             if(arr[k] < arr[k-1]) {
//                 let temp = arr[k];
//                 arr[k] = arr[k-1];
//                 arr[k-1] = temp
//             }   
         
//         }
//     }
//     return arr;
// }

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; // The element to be inserted into the sorted part of the array
        let j = i - 1;
        
        // Shift elements of the sorted part of the array that are greater than current
        while (j >= 0 && arr[j] > current) {1
            arr[j + 1] = arr[j]; // Shift element to the right
            j--; // Move to the previous element
        }

        // Insert the current element into its correct position
        arr[j + 1] = current;
    }
    return arr;
}

console.log(insertionSort([2,3,1,7,2,5,8,9,0]))







