import java.util.Arrays;

public class Solution {
    public static int[] moveZeros(int[] nums){
        int i=0;
        for(int j=0; j<nums.length; j++){
            if(nums[j] != 0){
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
            }
        }
        return nums;
    }

    public static void main(String[] args) {
        int[] nums = {1,0,1,0,1};
        int[] res = moveZeros(nums);
        System.out.println(Arrays.toString(res));
    }
}