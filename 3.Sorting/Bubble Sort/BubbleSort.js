function BubbleSort(arr){
    let n = arr.length;
    for(let i=0; i<n; i++){
        let isSwapped = false;
        for(let j=0; j<n-i-1; j++){ // why j<n-i-1 --> because in every iteration we push the biggest element at thr last so need to compare that
            if(arr[j] > arr[j+1]){
                // adjacent element swapping
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(isSwapped == false) return;
    }
}

let arr = [5,4,3,2,1];
BubbleSort(arr);
console.log(arr);