const truncateString = require('./index');

const assert = require('assert');

describe("truncateString", function() {

    it('truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket..."', () => {
        assert.equal(truncateString("A-tisket a-tasket A green and yellow basket", 8), 'A-tisket...');
    });

    it('truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper..."', () => {
        assert.equal(truncateString("Peter Piper picked a peck of pickled peppers", 11), "Peter Piper...");
    });

    it('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket"', () => {
        assert.equal(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length), "A-tisket a-tasket A green and yellow basket");
    });

    it('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket"', () => {
        assert.equal(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2), "A-tisket a-tasket A green and yellow basket");
    });

    it('truncateString("A-", 1) should return "A..."', () => {
        assert.equal(truncateString("A-", 1), "A...");
    });

    it('truncateString("Absolutely Longer", 2) should return "Ab..."', () => {
        assert.equal(truncateString("Absolutely Longer", 2), "Ab...");
    });
});
