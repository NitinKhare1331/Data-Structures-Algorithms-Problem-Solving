function f_bu(value){
    let dp = Array(10005);
    dp[0] = 0;
    for(let amount=1;amount<=value;amount++){
        let ans = Number.MAX_VALUE;
        let n = c.length;
        for(let i=0; i<n; i++){
            if(amount>=c[i]){
                ans = Math.min(ans,dp[amount-c[i]]);
            }
        }
        if(ans == Number.MAX_VALUE){
            dp[amount] = Number.MAX_VALUE;
        }
        dp[amount] = 1 + ans;
    }
    return dp[value];
}
function coinChange(coins,amount){
    c = coins;
    let ans = f_bu(amount);
    return ((ans == Number.MAX_VALUE)?-1:ans);
}

console.log(coinChange([3],2));