import java.util.Arrays;

public class coinchange {
    public static int[] dp;
    public static int[] c;
    public static int f(int amount){
        if(amount < 0) return Integer.MAX_VALUE;
        if(amount == 0) return 0;
        if(dp[amount] != -1) return dp[amount];
        int ans = Integer.MAX_VALUE;
        int n = c.length;
        for(int i=0; i<n; i++){
            if(amount>=c[i]){
                ans = Math.min(ans,f(amount-c[i]));
            }
        }
        if(ans == Integer.MAX_VALUE){
            return dp[amount] = Integer.MAX_VALUE;
        }
        return dp[amount] = 1+ans;
    }
    public static int coinChange(int[] coins, int amount){
        c = coins;
        int ans = f(amount);
        return ((ans == Integer.MAX_VALUE)?-1:ans);
    }
    public static void main(String[] args){
        dp = new int[100005];
        Arrays.fill(dp,-1);
        int[] coins = {1,2,5};
        int amount = 11;
        int ans = coinChange(coins, amount);
        System.out.println(ans);
    }
}
