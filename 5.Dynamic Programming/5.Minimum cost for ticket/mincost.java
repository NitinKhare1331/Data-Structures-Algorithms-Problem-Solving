import java.util.HashSet;
import java.util.Arrays;

public class mincost{
    public static int lastDay;
    public static HashSet<Integer> s;
    public static int[] c;
    public static int[] dp;

    public static int f(int day){
        if(day > lastDay) return 0;
        if(!s.contains(day)) return f(day+1);
        if(dp[day] != -1) return dp[day];
        int ans = Math.min(c[0]+f(day+1),Math.min(c[1]+f(day+7),c[2]+f(day+30)));
        return dp[day] = ans;
    }

    public static int mincostTickets(int[] days, int[] costs) {
        s = new HashSet<>();
        for(int day : days){
            s.add(day);
        }
        lastDay = days[days.length-1];
        c = costs;
        dp = new int[400];
        Arrays.fill(dp,-1);
        return f(1);
    }
    public static void main(String[] args){
        int[] days = {1,2,3,4,5,6,7,8,9,10,30,31};
        int[] cost = {2,7,15};
        int res = mincostTickets(days, cost);
        System.out.println(res);
    }
}