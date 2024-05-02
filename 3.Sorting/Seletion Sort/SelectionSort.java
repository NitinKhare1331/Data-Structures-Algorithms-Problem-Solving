public class SelectionSort{
    public static void selectionsort(int[] arr){
        for(int i=0; i<arr.length-1; i++){
            int minIdx = FindMinEl(arr,i);
            if(minIdx != i){
                int temp = arr[i];
                arr[i] = arr[minIdx];
                arr[minIdx] = temp;
            }
        }
    }

    public static int FindMinEl(int[] arr, int i){
        int minIdxEl = i;
        for(int j=i+1; j< arr.length; j++){
            if(arr[j] < arr[minIdxEl]){
                minIdxEl = j;
            }
        }
        return minIdxEl;
    }

    public static void main(String[] args){
        int[] arr = {5,4,3,2,1};
        selectionsort(arr);
        for(int i=0; i<arr.length; i++){
            System.out.println(arr[i]);
        }
    } 
}