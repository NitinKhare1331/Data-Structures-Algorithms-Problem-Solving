import java.util.Arrays;

public class fibonacci {
    public static int[] dp;
    public static int Fibonacci(int n){
        if(n==0 || n==1) return n;
        if(dp[n] != -1) return dp[n];
        return dp[n] = Fibonacci(n-1) + Fibonacci(n-2);
    }
    public static int fib(int n){
        dp = new int [100005];
        Arrays.fill(dp,-1);
        return Fibonacci(n);
    }
    public static void main(String[] args){
        int res = fib(32352);
        System.out.println(res);
    }
}
