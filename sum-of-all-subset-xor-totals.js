/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let sumTotal = 0;

    for (let num of nums) {
        sumTotal |= num;
    }
    return sumTotal << (nums.length - 1);
};
subsetXORSum([5,1,6]);