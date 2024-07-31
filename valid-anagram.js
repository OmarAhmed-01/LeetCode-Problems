/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false;
    }
    let sHashmap = {};
    let tHashmap = {};

    for(let i = 0; i < s.length; i++){
        if(!sHashmap[s[i]]){
            sHashmap[s[i]] = 1;
        }
        else{
            sHashmap[s[i]] += 1;
        }
        if(!tHashmap[t[i]]){
            tHashmap[t[i]] = 1;
        }
        else{
            tHashmap[t[i]] += 1;
        }
    }

    for (const key in sHashmap) {
        if(sHashmap[key] != tHashmap[key]){
            return false;
        }
    }
    return true;
};