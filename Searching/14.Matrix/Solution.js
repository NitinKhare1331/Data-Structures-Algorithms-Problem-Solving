/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

*/

var searchMatrix = function(matrix, target) {
    let n = matrix.length;
    let arr = []
    for(let i=0;i<n;i++){
        arr = arr.concat(matrix[i])
    }
    console.log(arr); // for reference
    let hi = arr.length;
    let lo = 0;
    while(lo <= hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(arr[mid] == target){
            return true;
        }
        else if(arr[mid] < target){
            lo = mid+1;
        }
        else{
            hi = mid-1
        }
    }
    return false;
};

let ar = [[1,2,3],[4,5,6]];
console.log(searchMatrix([[1,2,3,4],[5,6,7,8]],10));