/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let array = [];
    for (let i = 0; i < n; i++){
        array.push(nums[i], nums[i+n])
    }
    return array;
};
shuffle([1,2,3,4,4,3,2,1], 4);