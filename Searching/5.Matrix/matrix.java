public class matrix{
    public static boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length;
        int n = matrix[0].length;
        int lo = 0;
        int hi = m*n-1;
        while(lo<=hi){
            int mid = lo + (hi-lo)/2;
            int row = mid/n;
            int col = mid%n;
            if(matrix[row][col] == target){
                return true;
            }
            else if(matrix[row][col] < target){
                lo = mid+1;
            }
            else{
                hi = mid-1;
            }
        }
        return false;
    }
    public static void main(String[] args){
        int[][] matrix = {{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}};
        int target = 10;
        boolean result = searchMatrix(matrix,target);
        System.out.println(result);

    }
}