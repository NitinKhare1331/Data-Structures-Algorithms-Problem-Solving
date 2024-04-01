public class fibonacci_bu {
    public static int f_bu(int n){
        int[] dp = new int[100005];
        dp[0] = 0;
        dp[1] = 1;
        for(int i=2;i<=n;i++){
            dp[i] = dp[n-1] + dp[n-2];
        }
        return dp[n];
    }
    public static int fib(int n){
        return f_bu(n);
    }
}
