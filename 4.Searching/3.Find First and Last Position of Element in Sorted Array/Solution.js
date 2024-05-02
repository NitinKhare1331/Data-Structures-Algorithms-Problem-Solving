function LowerBound(arr,x){
    let lo = 0;
    let hi = arr.length-1;
    let ans = arr.length;
    while(lo<=hi){
        let mid = lo+ Math.floor((hi-lo)/2);
        if(arr[mid] < x){
            lo = mid+1;
        }
        else{
            ans = mid;
            hi = mid-1;
        }
    }
    return ans;
}

function UpperBound(arr,x){
    let lo = 0;
    let hi = arr.length-1;
    let ans = arr.length;
    while(lo<=hi){
        let mid = lo+ Math.floor((hi-lo)/2);
        if(arr[mid] <= x){
            lo = mid+1;
        }
        else{
            ans = mid;
            hi = mid-1;
        }
    }
    return ans;
}

function SearchRange(nums,target){
    let lb = LowerBound(nums,target);
    let result = new Array(2)
    if(lb === nums.length || nums[lb] !== target){
        result[0] = -1;
        result[1] = -1;
        return result;
    }
    let ub = UpperBound(nums,target);
    return [lb,ub-1]
}

let arr = [1,2,3,3,4,4,5,6,7,8,8,9];
let target = 7;
console.log(SearchRange(arr,target));
