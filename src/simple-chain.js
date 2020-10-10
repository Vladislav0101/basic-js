const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],
    str: '',
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (value === null) {
            this.chain.push('null');
        } else {
            this.chain.push(value);
        }
        return this;
    },
    removeLink(position) {
        if (position <= 0 || typeof position === 'string') {
            this.chain.splice(0, this.chain.length);
            throw new Error();
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        this.str = this.chain.join(' )~~( ');
        this.str = '( ' + this.str + ' )';
        this.chain.splice(0, this.chain.length);
        return this.str;
    }
};

module.exports = chainMaker;