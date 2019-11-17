const findLongestWordLength = require('./index');

const assert = require('assert');

describe("findLongestWordLength", function() {

    it('should return a number', () => {
        assert.equal(typeof findLongestWordLength("The quick brown fox jumped over the lazy dog"), 'number');
    });

    it('findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6', () => {
        assert.equal(findLongestWordLength("The quick brown fox jumped over the lazy dog"), 6);
    });

    it('findLongestWordLength("May the force be with you") should return 5', () => {
        assert.equal(findLongestWordLength("May the force be with you"), 5);
    });

    it('findLongestWordLength("Google do a barrel roll") should return 6', () => {
        assert.equal(findLongestWordLength("Google do a barrel roll"), 6);
    });

    it('findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8', () => {
        assert.equal(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"), 8);
    });

    it('findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19', () => {
        assert.equal(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"), 19);
    });
});
