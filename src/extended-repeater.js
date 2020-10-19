const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    // throw new CustomError('Not implemented');

    let map = new Map(Object.entries(options));
    for (let [key, value] of map) {
        if (typeof value !== 'number' || typeof value !== 'string') {
            throw new CustomError('Not implemented');
        }
    }

    let result = [];
    let ADDITION = [];

    for (let j = 1; j <= options.additionRepeatTimes; j++) {
        ADDITION.push(options.addition);
        if (options.additionSeparator) {
            ADDITION.push(options.additionSeparator);
        }
        // if (j === options.repeatTimes) ADDITION.pop();
    }
    if (options.additionSeparator) {
        ADDITION.pop();
    }
    for (let i = 1; i <= options.repeatTimes; i++) {
        result.push(str);
        result[i];
        if (!options.separator) {
            result.push('+');
        } else {
            result.push(options.separator);
        }
        if (i === options.repeatTimes) result.pop();
    }
    for (let x = 0; x < result.length; x += 2) {
        result[x] += ADDITION.join('');
        // if(x===)
    }
    return result.join('');
};