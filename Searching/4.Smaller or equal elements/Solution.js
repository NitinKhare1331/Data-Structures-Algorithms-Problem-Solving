function SmallerOrEqualElements(A,B){
    let lo = 0;
    let hi = A.length-1;
    let ans = -1;
    while(lo<=hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(A[mid] <= B){
            ans = mid;
            lo = mid+1;
        }
        else{
            hi = mid-1;
        }
    }
    return ans+1;
}

let arr = [1,1,2,2,3,4,5,6];
let x = 7;
console.log(SmallerOrEqualElements(arr,x));
