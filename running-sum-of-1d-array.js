/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var sum = 0;
    var newArr = [];

    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
        newArr.push(sum);
    }
    return newArr;
};
runningSum([1,2,3,4]);