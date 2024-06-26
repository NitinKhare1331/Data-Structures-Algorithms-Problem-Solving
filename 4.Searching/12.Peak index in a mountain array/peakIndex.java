/*
An array arr is a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

You must solve it in O(log(arr.length)) time complexity.

Example 1:

Input: arr = [0,1,0]
Output: 1

Example 2:

Input: arr = [0,2,1,0]
Output: 1

Example 3:

Input: arr = [0,10,5,2]
Output: 1
*/

public class peakIndex {
    public static int peakElementInAMountainArray(int[] arr){
        if(arr.length == 1) return 0;
        int lo = 0;
        int hi = arr.length - 1;
        while(lo <= hi){
            int mid = lo + (hi-lo)/2;
            if(mid == 0 && arr[mid] < arr[mid+1]) return mid;
            if(mid == arr.length - 1 && arr[mid] > arr[mid-1]) return mid;
            if(arr[mid] > arr[mid+1] && arr[mid] > arr[mid-1]) return mid;
            if(mid < arr.length-1 && arr[mid] < arr[mid+1]){
                lo = mid+1;
            }
            else{
                if(mid == 0 || arr[mid] > arr[mid-1]) return mid;
                hi = mid-1;
            }
        }
        return 0;
    }

    public static void main(String[] args){
        int[] arr = {1,2,3,4,3,2,1};
        int res = peakElementInAMountainArray(arr);
        System.out.println(res);
    }
}
