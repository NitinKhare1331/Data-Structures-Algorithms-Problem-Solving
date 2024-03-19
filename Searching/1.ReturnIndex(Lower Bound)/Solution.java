public class Solution {
    public static int lowerBound(int[] arr, int x){
        int lo = 0;
        int hi = arr.length-1;
        int ans = arr.length;
        while(lo<=hi){
            int mid = lo + (hi-lo)/2;
            if(arr[mid] < x){
                lo = mid+1;
            }
            else{
                ans = mid;
                hi = mid-1;
            }
        }
        return ans;
    }

    public static void main(String[] args){
        int[] arr = {1,1,1,2,3,4,5,5,5,6,7,8};
        int result = lowerBound(arr, 0);
        System.out.println(result);
    }
}

