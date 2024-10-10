function moveZeros(nums){
    let i=0;
    for(let j=0; j<nums.length; j++){
        if(nums[j] !== 0){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
    return nums;
}

let nums = [1,0,1,0,1];
console.log(moveZeros(nums));
