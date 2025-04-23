
function pivot(arr1, start = 0, end = arr.length - 1) {
    const swap = (arr1, idx1, idx2) => {
      [arr1[idx1], arr1[idx2]] = [arr1[idx2], arr1[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr1[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr1[i]) {
        swapIdx++;
        swap(arr1, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr1, start, swapIdx);
    console.log("pivor fn", arr1)
    console.log("pivor index", swapIdx)
    return swapIdx;
  }
  
  
  function quickSort(arr, left = 0, right = arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr, left, right) //3
          //left
          quickSort(arr,left,pivotIndex-1);
          //right
          quickSort(arr,pivotIndex+1,right);
        }
       return arr;
  } 
             
  console.log(quickSort(  [23,4,12,16,17,89]))

