public class square{
    public static boolean perfectValidSquare(int num){
        long lo = 0;
        long hi = num;
        boolean ans = false;
        while(lo<=hi){
            long mid = lo + (hi-lo)/2;
            long val = mid*mid;
            if(val == num){
                return true;
            }
            else if(val < num){
                ans = false;
                lo = mid+1;
            }
            else{
                hi = mid-1;
            }
        }
        return ans;
    }

    public static void main(String[] args){
        int num = 14;
        boolean result = perfectValidSquare(num);
        System.out.println(result);
    }
}