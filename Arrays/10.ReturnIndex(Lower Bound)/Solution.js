/*
You are given an sorted integer array sorted in asc order which is of size n. You are also given an element
x which may or may not present in the array. Return the index of first value >=x else return length of array.

Ex -
arr = [1,1,2,2,3,3,4,4,5];
x = 2;
Output = 2;

*/

function lowerBound(arr,x){
    let lo = 0;
    let hi = arr.length - 1;
    let ans = arr.length;
    while(lo<=hi){
        let mid = Math.floor(lo + (hi-lo)/2);
        if(arr[mid] < x){
            lo = mid+1; //discard the left half
        }
        else{
            ans = mid; //we got a candidate ans which is>= x and we can find better on left side
            hi = mid-1;
        }
    }
    return ans;
}

let arr = [1,1,2,2,3,3,4,4,5,6];
let x = 0;
console.log(lowerBound(arr,x));