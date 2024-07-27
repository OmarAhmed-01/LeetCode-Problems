/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let newArr = [];

    for (let i = 0; i < nums.length; i++){
        var counter = 0;
        for (let j = 0; j < nums.length; j++){
            if(j!=i && nums[j] < nums[i]){
                counter++;
            }
        }
        newArr.push(counter);
    }
    return newArr;
};
smallerNumbersThanCurrent([8,1,2,2,3]);