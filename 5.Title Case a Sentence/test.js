const titleCase = require('./index');

const assert = require('assert');

describe("titleCase", function() {

    it('should return a stringy', () => {
        assert.equal(typeof titleCase("I'm a little tea pot"), 'string');
    });

    it('titleCase("I\'m a little tea pot") should return I\'m A Little Tea Pot', () => {
        assert.equal(titleCase("I'm a little tea pot"), "I'm A Little Tea Pot");
    });

    it('titleCase("sHoRt AnD sToUt") should return Short And Stout', () => {
        assert.equal(titleCase("sHoRt AnD sToUt"), "Short And Stout");
    });

    it('titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout', () => {
        assert.equal(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"), "Here Is My Handle Here Is My Spout");
    });
});
