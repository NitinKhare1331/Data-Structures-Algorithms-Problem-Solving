function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
    for(let i=1; i<arr.length;i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i]);
        }
        else{
            rightArr.push(arr[i]);
        }
    }
    return [...quickSort(leftArr),pivot, ...quickSort(rightArr)];
}

let arr = [5,4,3,2,1];
let result = quickSort(arr);
console.log(result);

