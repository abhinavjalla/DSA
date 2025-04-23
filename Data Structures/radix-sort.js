








function findPivotIndex(arr,start=0,end =arr.length -1) {
    const pivot = arr[start];
    let index =start;
    const swap =(a,b) => {
        [arr[a],arr[b]] = [arr[b],arr[a]]
    }
    for (let i= start +1; i<=end; i++) {
        if (arr[i] < pivot) {
            index++;
            swap(index,i)
        } 
    }
    swap(start,index)
    console.log("inside ",arr)
    return index;
}


// i =1 index 1  [17,4,23,12,16,89]  
// i =2 index 1  [17,4,23,12,16,89]    
// i =3 index 2  [17,4,12,23,16,89]    
// i =4 index 3  [17,4,12,23,16,89]   
// i =5 index 4  [17,4,12,16,23,89] 
//[23,4,12,16,17,89]



function quickSort(arr,left = 0, right = arr.length -1) {
    if(left < right) {
        let pivot = findPivotIndex(arr,left,right);
        quickSort(arr,left,pivot -1)
        quickSort(arr,pivot +1,right)
    }
    return arr
}

let arr = [17,4,23,12,16,89];

console.log(quickSort(arr))




