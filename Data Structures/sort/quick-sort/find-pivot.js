function pivot(arr,start = 0,end = arr.length -1) {
    const swap = (arr,a,b) => {
        [arr[a],arr[b]] = [arr[b],arr[a]]
    }
    let pivotValue = arr[0];
    let swapIdx = start;

    for(let i = start +1; i <= end;i++) {
        if(pivotValue > arr[i]) {
            swapIdx++;
            swap(arr,swapIdx,i);
            console.log(arr)
        }
    }

    swap(arr,start,swapIdx);
    console.log("final o/p",arr)
    return swapIdx;

}


console.log(pivot([3,2,1]))