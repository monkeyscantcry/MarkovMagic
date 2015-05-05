export class IfElse {

    constructor (exp) {
        this._exp = exp;
        this._cases= [];
    }

    get () {
        return this._cases.reduce((carry, c) => {
            const test = !Array.isArray(c.condition)? (this._exp === c.condition) : c.condition.reduce((carry, piece) => {
                    return carry || (this._exp === piece);
                }, false);

            const testInverse = !Array.isArray(c.condition)? (this._exp !== c.condition) : c.condition.reduce((carry, piece) => {
                    return carry && (this._exp !== piece);
                }, true);

            if (carry === undefined && !c.not && (test || c.condition === 'DEFAULT')) {
                if (!!(c.value && c.value.constructor && c.value.call && c.value.apply)) {
                    return c.value();
                } else {
                    return c.value;
                }
            } else if (carry === undefined && c.not && testInverse) {
                if (!!(c.value && c.value.constructor && c.value.call && c.value.apply)) {
                    return c.value();
                } else {
                    return c.value;
                }
            } else {
                return carry;
            }
        }, undefined);
    }

    when (condition, value) {
        this._cases.push({condition: condition, value: value, not: false})
        return this;
    }

    whenNot (condition, value) {
        this._cases.push({condition: condition, value: value, not: true})
        return this;
    }

    default (value) {
        this._cases.push({condition: 'DEFAULT', value: value, not: false})
        return this;
    }

}
