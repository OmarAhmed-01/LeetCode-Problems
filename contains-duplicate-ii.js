/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hashset = new Set();
    let L = 0;
    for (let R = 0; R < nums.length; R++){
        if(R - L > k){
            hashset.delete(nums[L]);
            L++;
        }
        if(hashset.has(nums[R])){
            return true;
        }
        hashset.add(nums[R]);
    }
    return false;
}
containsNearbyDuplicate([1,2,3,1], 3)