/*
You are given an array of integer values. Find the min cost to remove all the elements from the array.
The cost to remove any one element is equal to the sum of elements at tht point of time in the array.

Example 1: [4,1,6]
Output = 17
*/

function findMinCost(arr){
    let totalSum = 0;
    let n = arr.length;
    for(let i=0; i<n; i++){
        totalSum += arr[i];
    }
    let totalCost = 0;
    arr.sort((a,b)=>b-a);
    for(let i=0; i<n;i++){
        totalCost += totalSum;
        totalSum -= arr[i];
    }
    return totalCost;
}

let arr = [4,1,6];
let result = findMinCost(arr);
console.log(result);