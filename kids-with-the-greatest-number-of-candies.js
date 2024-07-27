/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let newArr = [];
    for (let i = 0; i < candies.length; i++){
        if(candies[i]+extraCandies >= Math.max(...candies)){
            newArr.push(true);
        }
        else{
            newArr.push(false);
        }
    }
    return newArr;
};
kidsWithCandies([4,2,1,1,2], 1)