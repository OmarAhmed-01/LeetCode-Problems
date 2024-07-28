// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     nums = nums.sort();
//     for (let i = 0; i < nums.length; i++){
//         if(nums[i] === nums[i + 1]){
//             return true;
//         }
//     }
//     return false;
// };
// containsDuplicate([1,2,3,1]);

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashset = new Set();
    for (const n of nums) {
        if (hashset.has(n)) {
            return true;
        }
        hashset.add(n);
    }
    return false;
};
containsDuplicate([1,2,3,1]);