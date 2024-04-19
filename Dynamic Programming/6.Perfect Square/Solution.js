/*
Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

Example 1:

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
*/

var c;
var dp;
function f(amount){
    if(amount<0) return Number.MAX_VALUE;
    if(amount == 0) return 0;
    if(dp[amount] != -1) return dp[amount];
    let ans = Number.MAX_VALUE;
    let n = c.length;
    for(let i=0; i<n; i++){
        if(amount>=c[i]){
            ans = Math.min(ans,f(amount-c[i]));
        }else{
            break;
        }
    }
    if(ans == Number.MAX_VALUE){
        return dp[amount] = Number.MAX_VALUE;
    }
    return dp[amount] = 1 + ans;
}

function numSquare(n){
    c = Array(1004);
    let j=0;
    for(i=1;i<=10000;i++){
        c[j] = i*i;
        j++;
    }
    dp = Array(10005).fill(-1);
    return f(n);
}

console.log(numSquare(100));