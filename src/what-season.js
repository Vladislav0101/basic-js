const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    // throw new CustomError('Not implemented');
    if (typeof date === 'undefined') return 'Unable to determine the time of year!';
    if (!date.getTime()) {
        return new Error('Unable to determine the time of year!');
    }
    let month = date.getMonth();

    switch (month) {
        case 0:
        case 1:
            return 'winter';
        case 2:
        case 3:
        case 4:
            return 'spring';
        case 5:
        case 6:
        case 7:
            return 'summer';
        case 8:
        case 9:
        case 10:
            return 'autumn';
        case 11:
            return 'winter';
    }
};