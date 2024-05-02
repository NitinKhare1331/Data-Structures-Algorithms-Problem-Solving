let dp;
function f(n){
    if(n==0||n==1) return 1;
    if(dp[n] != -1) return dp[n];
    return dp[n] = f(n-1) + f(n-2);
}

var climbStairs = function(n) {
    dp = Array(60).fill(-1);
    return f(n);
}