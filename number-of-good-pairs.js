/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++){
        for (let j =  + 1; j < nums.length; j++){
            if (nums[i] == nums[j] && i < j){
                counter++;
            }
        }
    }
    return counter;
};
numIdenticalPairs([1,2,3,1,1,3]);