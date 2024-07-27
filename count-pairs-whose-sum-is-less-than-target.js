/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    var counter = 0;
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] < target){
                counter++;
            }
        }
    }
    return counter;
};
countPairs([-1,1,2,3,1], 2);