function f(n){
    let dp = Array(10005);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for(let i=3; i<=n; i++){
        dp[i] = dp[i-1] + (i-1)*dp[i-2];
    }
    return dp[n];
}

console.log(f(4));