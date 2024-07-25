/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    for (let  i = 0; i < accounts.length; i++){
        let sum = 0;
        for (let j = 0; j < accounts[i].length; j++){
            sum += accounts[i][j];
        }
        max = Math.max(max, sum);
    }
    return max;
};
maximumWealth([[1,2,3],[3,2,1]]);