import java.util.Arrays;

public class fibonacci{
    public static int[] dp = new int[100005];
    public static int f(int n){
        if(n==0||n==1) return n;
        if(dp[n] != -1) return dp[n];
        return dp[n] = f(n-1) + f(n-2);
    }
    public static int fib(int n){
        dp = new int[100005];
        Arrays.fill(dp,-1);
        return f(n);
    }
    public static void main(String[] args){
        int res = fib(5);
        System.out.println(res);
    }
}