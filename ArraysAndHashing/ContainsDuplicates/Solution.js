/**
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

var containsDuplicates = function(nums){
    let n = nums.length;
    let mp = {};
    for(let i=0; i<n-1; i++){
        if(mp[nums[i]]){
            mp[nums[i]] +=1;
        }
        else{
            mp[nums[i]] = 1;
        }
    }
    for(let i=0; i<n-1; i++){
        if(mp[nums[i]]>1){
            return true;
        }
    }
    return false;
}

let nums = [1,2,3,4,5,6];
let result = containsDuplicates(nums);
console.log(result);
console.log('****');
nums = [0,0,0,0,0];
result = containsDuplicates(nums);
console.log(result);