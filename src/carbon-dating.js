const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    let count = parseFloat(sampleActivity);
    const K = 0.693 / HALF_LIFE_PERIOD;
    if ((typeof sampleActivity !== 'string') || (count < 0 || count > 15) || Number.isNaN(count)) {
        return false;
    } else {
        return time = Math.ceil(Math.log(MODERN_ACTIVITY / count) / K);
    }
};