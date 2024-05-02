public class BubbleSort {
    public static void bubblesort(int[] arr){
        int  n = arr.length;
        for(int i=0; i<n; i++){
            boolean isSwapped = false;
            for(int j=0; j<n-i-1; j++){  // why j<n-i-1 --> because in every iteration we push the biggest element at thr last so need to compare that
                if(arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    isSwapped = true;
                }
            }
            if(isSwapped == false) return;
        }
    } 

    public static void main(String[] args){
        int[] arr = {1,2,3,4,5};
        bubblesort(arr);
        for(int i=0; i<arr.length; i++){
            System.out.println(arr[i]);
        }
    }
}
