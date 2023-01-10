const quickSort = (arr, left, right) => {
    if(left < right){
        let pivot = right
        let partitionIdx = partition(arr, pivot, left, right)
        quickSort(arr, left, partitionIdx - 1)
        quickSort(arr, partitionIdx + 1, right)
    }
    return arr;
}

const partition = (arr, pivot, left, right) => {
    
    let pivotPoint = arr[pivot];
    let partitionIdx = left;
    
    for (let i = left; i < right; i++){
        if(arr[i] < pivotPoint){
            temp = arr[i];
            arr[i] = arr[partitionIdx];
            arr[partitionIdx] = temp;
            partitionIdx++;
        }
    }
    temp = arr[right];
    arr[right] = arr[partitionIdx];
    arr[partitionIdx] = temp
    return partitionIdx;
}


let arr = [1,5,8,-9,22,44,-77,66,88,33,55,77,99,200,-200,-1]
quickSort(arr, 0, arr.length - 1)
console.log(arr)