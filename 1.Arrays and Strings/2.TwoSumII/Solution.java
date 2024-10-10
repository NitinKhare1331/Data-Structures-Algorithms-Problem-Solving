import java.util.Arrays;

public class Solution {
    public static int[] twoSumII(int[] numbers, int target){
        for(int i = 0; i<numbers.length-1; i++){
            for(int j=0; j<numbers.length; j++){
                if(numbers[i]+numbers[j]== target){
                    return new int[] {i+1,j+1};
                }
            }
        }
        return new int[] {};
    }

    public static void main(String[] args) {
        int[] numbers = {1,2,3,4,5,6,7,8,9};
        int target = 10;
        int[] op = twoSumII(numbers, target);
        System.out.println(Arrays.toString(op));
    }
}
