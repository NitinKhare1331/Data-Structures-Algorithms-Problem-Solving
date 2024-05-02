/*
Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

Example 1:

Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
Example 2:

Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
 */

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