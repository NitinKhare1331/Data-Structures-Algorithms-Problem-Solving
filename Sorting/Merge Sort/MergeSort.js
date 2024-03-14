function merge(left, right) {
    let i = 0;
    let j = 0;
    let k = 0;
    let m = left.length;
    let n = right.length;
    let result = Array(m + n);
    while (i < m && j < n) {
        if (left[i] < right[j]) {
            result[k] = left[i];
            i++;
            k++;
        } else {
            result[k] = right[j];
            j++;
            k++;
        }
    }
    while (j < n) {
        result[k] = right[j];
        j++;
        k++;
    }
    while (i < m) {
        result[k] = left[i];
        i++;
        k++;
    }
    return result;
}

function mergeSortHelper(arr, start, end) {
    if (start === end) {
        let result = Array(1);
        result[0] = arr[start];
        return result;
    }
    let mid = Math.floor((start + end) / 2);
    let left = mergeSortHelper(arr, start, mid);
    let right = mergeSortHelper(arr, mid + 1, end);
    return merge(left, right);
}

function mergeSort(array) {
    return mergeSortHelper(array, 0, array.length - 1);
}

let arr = [5, 4, 3, 2, 1];
arr = mergeSort(arr);
console.log(arr);
