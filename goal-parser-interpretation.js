// /**
//  * @param {string} command
//  * @return {string}
//  */
// var interpret = function(command) {
//     return command.split("()").join("o").split("(al)").join("al");
// };
// interpret("G()(al)")

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let result = [];
    command.split("");
    let i = 0;
    while (i < command.length){
        if(command[i] === "G" ){
            result.push("G");
            i++;
        }
        else if(command[i] === "(" && command[i+1] === ")"){
            result.push("o");
            i+=2;
        }
        else{
            result.push("al");
            i+=4;
        }
    }
    return result.join("");
};
interpret("G()(al)")