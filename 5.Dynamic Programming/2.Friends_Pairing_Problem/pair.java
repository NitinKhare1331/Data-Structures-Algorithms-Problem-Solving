import java.util.Arrays;

public class pair {
    public static long[] dp;
    public static long mod = 1000000007;
    public static long f(int n){
        if(n==0 || n==1 || n==2){
            return n;
        }
        if(dp[n] != -1) return dp[n];
        long SingleWays = f(n-1) % mod;
        long PairWays = ((n-1) % mod * f(n-2) % mod)%  mod;
        return dp[n] = (SingleWays % mod + PairWays % mod) % mod;
    }
    public static int numberOfWays(int n){
        dp = new long[10005];
        Arrays.fill(dp,-1);
        return (int) f(n);
    }
    public static void main(String[] args){
        int res = numberOfWays(94);
        System.out.println(res);
    }
}


/*
 *Modulo Arithmatic
 *  (a+b)%c => (a%c + b%c)%c
 *  (a*b)%c => (a%c * b%c)%c
 *  (a-b)%c => (a%c - b%c+c)%c (b>a)
 */