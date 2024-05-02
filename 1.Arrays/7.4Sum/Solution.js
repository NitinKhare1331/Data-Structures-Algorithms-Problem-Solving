/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
*/

var fourSum = function(nums,target){
    nums.sort((a,b)=>a-b);
    let n = nums.length;
    let resultArr = [];
    for(let i=0; i<n-3; i++){
        for(let j=i+1; j<n-2; j++){
            let a = j+1;
            let b = n-1;
            while(a<b){
                let sum = nums[i]+nums[j]+nums[a]+nums[b];
                if(sum == target){
                    resultArr.push([nums[i],nums[j],nums[a],nums[b]]);
                    while(nums[a] == nums[a+1]){
                        a++;
                    }
                    a++;
                    while(nums[b] == nums[b+1]){
                        b--;
                    }
                    b--;
                }
                else if(sum < target){
                    a++
                }
                else{
                    b--;
                }
            }
            while(nums[j] == nums[j+1]){
                j++;
            }
        }
        while(nums[i] == nums[i+1]){
            i++;
        }
    }
    return resultArr;
}

let nums = [1,0,-1,0,-2,2]
let target = 0
let result = fourSum(nums,target);
console.log(result);
console.log('****');
nums = [2,2,2,2,2];
target = 8;
result = fourSum(nums,target);
console.log(result);
console.log('****');
nums = [2,2,2,2,2];
target = 9;
result = fourSum(nums,target);
console.log(result);