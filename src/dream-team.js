const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let team = new Array();
    for (let i = 0; i < members.length; i++) {
        // if (typeof(members[i]) === 'string') {
        //     team[i] = members[i].trim().charAt(0);
        // } else if (typeof(!members[i] === 'string')) {
        //     members.splice(i, 1);
        // }
        if ((typeof(members[i]) === 'string')) {
            team.push(members[i].trim().charAt(0));
        }
    }
    if (!(typeof team[0] === 'string')) {
        return false;
    }
    let SortTeam = team.join('').toUpperCase().split('').sort().join('');
    return SortTeam;
};