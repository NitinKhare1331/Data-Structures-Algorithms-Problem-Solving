function SelectionSort(arr){
    let n = arr.length;
    /**
     * We have unsorted region initially from idx 0
     * so i denotes the start of unsorted region
     */
    for(let i=0; i<n-1; i++){ //i < n-1 means we just want to got to second last element
        let minIdx = findMinEl(arr,i);
        if(minIdx != i){
            let temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
}
/*
*This function finds out the inx of min element
*/
function findMinEl(arr,i){
    let min_idx_el = i; //initially the first element is min
    for(let j=i+1; j<arr.length; j++){
        if(arr[j] < arr[min_idx_el]){
            //if the current el is smaller than the assumed el, then we update the assumed min el
            min_idx_el = j;
        }
    }
    return min_idx_el
}

const arr = [5,4,3,2,1];
SelectionSort(arr);
console.log(arr);