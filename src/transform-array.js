const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Array.isArray(arr)) {

        for (let i = 0; i < arr.length; i++) {

            switch (arr[i]) {
                case '--discard-prev':
                    arr.splice(i - 1, 2);
                    i -= 2;
                    break;
                case '--discard-next':
                    arr.splice(i, 2);
                    i -= 2;
                    break;
                case '--double-next':
                    arr[i] = arr[i + 1];
                    break;
                case '--double-prev':
                    arr[i] = arr[i - 1];
                    break;
            }
        }

    } else {
        throw new Error();
    }
    return arr;
};