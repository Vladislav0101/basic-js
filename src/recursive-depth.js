const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        // throw new CustomError('Not implemented');
        if (arr.some(item => Array.isArray(item))) {
            return 1 + this.calculateDepth(arr.reduce((result, item) => result.concat(item), []));
        }
        return 1;
    }
};