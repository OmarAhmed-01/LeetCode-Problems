/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split(".").join("[.]");
};
defangIPaddr("255.100.50.0");