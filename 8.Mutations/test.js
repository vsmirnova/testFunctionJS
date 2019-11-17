const mutation = require('./index');

const assert = require('assert');

describe("mutation", function() {

    it('mutation(["hello", "hey"]) should return false', () => {
        assert.equal(mutation(["hello", "hey"]), false);
    });

    it('mutation(["hello", "Hello"]) should return true', () => {
        assert.equal(mutation(["hello", "Hello"]), true);
    });

    it('mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true', () => {
        assert.equal(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]), true);
    });

    it('mutation(["Mary", "Army"]) should return true', () => {
        assert.equal(mutation(["Mary", "Army"]), true);
    });

    it('mutation(["Mary", "Aarmy"]) should return true', () => {
        assert.equal(mutation(["Mary", "Aarmy"]), true);
    });

    it('mutation(["Alien", "line"]) should return true', () => {
        assert.equal(mutation(["Alien", "line"]), true);
    });

    it('mutation(["floor", "for"]) should return true', () => {
        assert.equal(mutation(["floor", "for"]), true);
    });

    it('mutation(["hello", "neo"]) should return false', () => {
        assert.equal(mutation(["hello", "neo"]), false);
    });

    it('mutation(["ate", "date"] should return false should return false', () => {
        assert.equal(mutation(["ate", "date"]), false);
    });

    it('mutation(["Tiger", "Zebra"]) should return false', () => {
        assert.equal(mutation(["Tiger", "Zebra"]), false);
    });

    it('mutation(["Noel", "Ole"]) should return true', () => {
        assert.equal(mutation(["Noel", "Ole"]), true);
    });
});
