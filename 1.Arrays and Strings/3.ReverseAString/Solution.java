import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        char[] s = {'h','e','l','l','o'};
        reverseAString(s);
        System.out.println(Arrays.toString(s));
    }

    public static void reverseAString(char[] s){
        int left = 0;
        int right = s.length - 1;
        char temp;
        while(left<right){
            temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
    }
}
