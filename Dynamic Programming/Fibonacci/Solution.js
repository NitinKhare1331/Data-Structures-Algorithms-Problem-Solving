let dp;
function fibonacci(n){
    if(n==0 || n==1) return n;
    if(dp[n] != -1) return dp[n];
    return dp[n] = fibonacci(n-1) + fibonacci(n-2);
}
function fib(n){
    dp = Array(100005).fill(-1);
    return fibonacci(n);
}

console.log(fib(56));