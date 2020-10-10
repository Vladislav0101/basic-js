const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let team = new Array();
    if (Array.isArray(members)) {
        for (let i = 0; i < members.length; i++) {
            if ((typeof(members[i]) === 'string')) {
                team.push(members[i].trim().charAt(0));
            }
        }
        if (!(typeof team[0] === 'string')) {
            return false;
        }
        let SortTeam = team.join('').toUpperCase().split('').sort().join('');
        return SortTeam;
    } else {
        return false;
    }
};