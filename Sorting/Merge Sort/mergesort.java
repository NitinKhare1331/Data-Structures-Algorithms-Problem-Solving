public class mergesort{
    public static int[] merge(int[] left, int[] right){
        int i = 0;
        int j = 0;
        int k = 0;
        int m = left.length;
        int n = right.length;
        int[] result = new int[m+n];
        while (i < m && j < n) {
            if (left[i] < right[j]) {
                result[k] = left[i];
                i++;
                k++;
            } else {
                result[k] = right[j];
                j++;
                k++;
            }
        }
        while (j < n) {
            result[k] = right[j];
            j++;
            k++;
        }
        while (i < m) {
            result[k] = left[i];
            i++;
            k++;
        }
        return result;
    }

    public static int[] mergeSortHelper(int[] arr, int start, int end){
        if(start == end){
            int[] result = new int[1];
            result[0] = arr[start];
            return result;
        }
        int mid = (start+end)/2;
        int[] left = mergeSortHelper(arr, start, mid);
        int[] right = mergeSortHelper(arr, mid+1, end);
        return merge(left, right);
    }

    public static int[] mergeSort(int[] array){
        return mergeSortHelper(array, 0, array.length-1);
    }

    public static void main(String[] args){
        int[] arr = {-1,-3,5,-6,8,5,4,8,1,-7,10};
        arr = mergeSort(arr);
        for(int i=0; i<arr.length;i++){
            System.out.println(arr[i]);
        }
    }
}