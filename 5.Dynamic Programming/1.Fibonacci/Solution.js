var dp = Array(10005);
function f(n){
    if(n==0||n==1) return n;
    if(dp[n] != -1) return dp[n];
    return dp[n] = f(n-1) + f(n-2);
}
function fib(n){
    dp = Array(100005); //for new test case on leetcode
    dp.fill(-1);
    return f(n);
}

console.log(fib(10));