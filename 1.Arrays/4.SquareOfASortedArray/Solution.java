import java.util.Arrays;

class Solution {
    public static int[] sortedSquares(int[] nums) {
        int n = nums.length;
        int left = 0;
        int right = n-1;
        int[] result = new int[n];
        for(int i=n-1; i>=0; i--){
            if(nums[left]*nums[left] < nums[right]*nums[right]){
                result[i] = nums[right]*nums[right];
                right--;
            }
            else{
                result[i] = nums[left]*nums[left];
                left++;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {-1,0,1,2,3,4};
        int[] op = sortedSquares(nums);
        System.out.println(Arrays.toString(op));
    }
}