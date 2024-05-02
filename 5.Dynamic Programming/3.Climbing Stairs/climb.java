import java.util.Arrays;

public class climb {
    public static int[] dp;
    public static int f(int n){
        if(n==0||n==1) return 1;
        if(dp[n]!=-1) return dp[n];
        return dp[n] = f(n-1) + f(n-2);
    }
    public static int climbStairs(int n) {
        dp = new int[50];
        Arrays.fill(dp,-1);
        return f(n);
    }
    public static void main(String[] args){
        int n = 5;
        int res = climbStairs(n);
        System.out.println(res);
    }
}
