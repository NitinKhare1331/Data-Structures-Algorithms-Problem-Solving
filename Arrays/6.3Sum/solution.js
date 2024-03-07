/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

var threeSum = function (nums){
    nums.sort((a,b)=>a-b);
    let n = nums.length;
    let resultArr = [];
    for(let i=0; i<n; i++){
        let a = i+1;
        let b = n-1;
        while(a<b){
            let sum = nums[i] + nums[a] + nums[b];
            if(sum == 0){
                resultArr.push([nums[i],nums[a],nums[b]]);
                while(a<b && nums[a]==nums[a+1]){
                    a++;
                }
                a++;
                while(a>b && nums[b]==nums[b-1]){
                    b--;
                }
                b--;
            }
            else if(sum<0){ 
                a++;
            }
            else{
                b--;
            }
        }
        while(i<n-1 && nums[i]==nums[i+1]){
            i++;
        }
    }
    return resultArr;
}

let nums = [-1,0,1,2,-1,-4];
let result = threeSum(nums);
console.log(result);