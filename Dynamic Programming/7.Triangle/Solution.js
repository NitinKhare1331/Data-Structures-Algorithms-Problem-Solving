/*
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
Example 2:

Input: triangle = [[-10]]
Output: -10
*/

let matrix;
let dp;
function f(row,col){
    if(row == matrix.length-1){
        return matrix[row][col];
    }
    if(dp[row][col] != -1) return dp[row][col];
    return dp[row][col] = matrix[row][col] + Math.min(f(row+1,col),f(row+1,col+1));
}
var minimumTotal = function(triangle) {
    matrix = triangle;
    dp = Array(300);
    for(let i=0; i<300; i++){
        dp[i] = Array(300).fill(-1);
    }
    return f(0,0);
}

console.log(minimumTotal([[1],[2,3],[2,3,4],[5,6,7,8],[9,10,11,12,13]]));