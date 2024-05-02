function InsertionSort(arr){
    let n = arr.length;
    for(let i=1; i<n; i++){
        let element = arr[i];
        let j = 0;
        for(j=i-1; j>=0; j--){
            if(arr[j] > element){
                arr[j+1] = arr[j];
            }
            else{
                break;
            }
        }
        arr[j+1] = element;
    }
}

let arr = [-1,-2,-3,-4,-5];
InsertionSort(arr);
console.log(arr);