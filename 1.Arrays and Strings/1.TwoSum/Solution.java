import java.util.Arrays;

public class Solution{
    public static int[] TwoSum(int[] nums, int target){
        int n = nums.length;
        for( int i=0; i<n-1; i++){
            for(int j = i+1; j<n; j++){
                if(nums[i] + nums[j] == target){
                    return new int[] {i,j};
                }
            }
        }
        return new int[] {};
    }

    public static void main(String[] args) {
        int[] nums = {1,2,3,4,5,6,7,8,9};
        int target = 10;
        int[] sol = TwoSum(nums, target);
        System.out.println(Arrays.toString(sol));
    }
}