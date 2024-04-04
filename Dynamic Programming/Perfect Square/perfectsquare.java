import java.util.Arrays;

public class perfectsquare{
    public static int[] c;
    public static int[] dp;
    public static int f(int amount){
        if(amount < 0) return Integer.MAX_VALUE;
        if(amount == 0) return 0;
        if(dp[amount] != -1) return dp[amount];
        int ans = Integer.MAX_VALUE;
        int n = c.length;
        for(int i=0; i<n; i++){
            if(amount>=c[i]){
                ans = Math.min(ans, f(amount-c[i]));
            }else{
                break;
            }
        }
        if(ans == Integer.MAX_VALUE){
            return dp[amount] = Integer.MAX_VALUE;
        }
        return dp[amount] = 1 + ans;
    }
    public static int numSquares(int n) {
        c = new int[1000];
        int j=0;
        for(int i=1;i*i<=1000000;i++){
            c[j] = i*i;
            j++;
        }
        dp = new int[10005];
        Arrays.fill(dp,-1);
        int ans = f(n);
        return ans;
    }
    public static void main(String[] args) {
        int n = 13;
        int ans = numSquares(n);
        System.out.println(ans);
    }
}