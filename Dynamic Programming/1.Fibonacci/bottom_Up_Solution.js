function f_bu(n){
    let dp = Array(100005);
    dp[0] = 0;
    dp[1] = 1;
    for(let i=2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

console.log(f_bu(10));