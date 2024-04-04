/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
*/

let c;
let dp;
function f(amount){
    if(amount < 0) return Number.MAX_VALUE;
    if(amount == 0) return 0;
    if(dp[amount]!= -1) return dp[amount];
    let ans = Number.MAX_VALUE;
    let n = c.length;
    for(let i=0; i<n; i++){
        if(amount>=c[i]){
            ans = Math.min(ans,f(amount-c[i]));
        }
    }
    if(ans == Number.MAX_VALUE){
        return dp[amount] = Number.MAX_VALUE;
    }
    return dp[amount] = 1 + ans;
}

function coinChange(amount,coins){
    c= coins;
    dp = Array(100005);
    dp.fill(-1);
    let ans = f(amount);
    return ((ans == Number.MAX_VALUE)?-1:ans);
}

console.log(coinChange(100,[1,2,5,7,9,11,100]));

