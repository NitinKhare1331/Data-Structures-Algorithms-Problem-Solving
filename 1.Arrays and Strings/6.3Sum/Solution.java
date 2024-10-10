import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {
    public static List<List<Integer>> threeSum(int[] nums){
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        int n = nums.length;
        for(int c = 0; c<n-2; c++){
            int a = c+1;
            int b = n-1;
            while(a<b){
                int sum = nums[c] + nums[a] + nums[b];
                if(sum == 0){
                    result.add(Arrays.asList(nums[c], nums[a], nums[b]));
                    while(a<b && nums[a] == nums[a+1]){
                        a++;
                    }
                    a++;
                    while(a<b && nums[b] == nums[b-1]){
                        b--;
                    }
                    b--;
                }
                else if(sum<0){
                    a++;
                }
                else{
                    b--;
                }
            }
            while(c<n-1 && nums[c] == nums[c+1]){
                c++;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {-1,0,1,2,-1,-4};
        System.out.println(threeSum(nums));
    }
}
