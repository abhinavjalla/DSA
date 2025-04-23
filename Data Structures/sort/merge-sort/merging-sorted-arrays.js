// function mergeTwoSortedArrays(arr1,arr2) {
//     let i =0;
//     let j =0;
//     let mergeArray = [];
//     while(i < arr1.length && j < arr2.length) {
//         if(arr1[i] < arr2[j]) {
//             mergeArray.push(arr1[i]);
//             i++;
//             if(i == arr1.length -1) {
//                 let elementsToInsert = arr2.slice(j);
//                 mergeArray = [...mergeArray, ...elementsToInsert]
//                // return mergeArray;
//             }
//         } else {
//             mergeArray.push(arr2[j]);
//             j++;
//             if(j == arr2.length -1) {
//                 let elementsToInsert = arr1.slice(j);
//                 mergeArray = [...mergeArray, ...elementsToInsert]
//                // return mergeArray;
//             }
//         }   
//     }
//     return mergeArray;

// }
export function mergeTwoSortedArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let mergeArray = [];

    // Merge the two arrays until one of them is fully processed
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergeArray.push(arr1[i]);
            i++;
        } else {
            mergeArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, push them
    if (i < arr1.length) {
        mergeArray.push(...arr1.slice(i));
    }

    // If there are remaining elements in arr2, push them
    if (j < arr2.length) {
        mergeArray.push(...arr2.slice(j));
    }

    return mergeArray;
}
//console.log(mergeTwoSortedArrays([1,5,6,10,15],[2,3,6,16,17]));