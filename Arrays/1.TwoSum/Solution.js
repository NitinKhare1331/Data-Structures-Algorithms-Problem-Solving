// https://leetcode.com/problems/two-sum/description///


var TwoSum = function(nums,target){
    for(let i = 0; i < nums.length ; i++){
        let current  = nums[i];
        let complement = target - current;
        let complementIndex = nums.indexOf(complement, i+1);
        if(complementIndex !== -1){
            return [i,complementIndex]
        }
    }
}

let nums = [2,7,11,15];
let target = 9;

let result = TwoSum(nums,target);
console.log(result);


