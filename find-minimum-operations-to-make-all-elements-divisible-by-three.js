/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let counter = [];
    for (let i  = 0; i < nums.length; i++){
        if (nums[i] % 3 !== 0){
            counter[i] = nums[i];
        }
    }
    return counter.length;
};
minimumOperations([1,2,3,4])