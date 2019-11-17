const countdown = require('./index');

const assert = require('assert');

describe("countdown", function() {

    it('After calling countdown(myArray, -1), myArray should be empty', () => {
        let myArray = [];
        countdown(myArray, -1);
        assert.deepEqual(myArray, []);
    });

    it('After calling countdown(myArray, 10), myArray should contain [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]', () => {
        let myArray = [];
        countdown(myArray, 10);
        assert.deepEqual(myArray, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });

    it('After calling countdown(myArray, 5), myArray should contain [5, 4, 3, 2, 1]', () => {
        let myArray = [];
        countdown(myArray, 5);
        assert.deepEqual(myArray, [5, 4, 3, 2, 1]);
    });

    it('Your code should not rely on any kind of loops (for or while or higher order functions such as forEach, map, filter, or reduce.)', () => {
        assert.equal(countdown.toString().includes('map'), false);
        assert.equal(countdown.toString().includes('for'), false);
        assert.equal(countdown.toString().includes('while'), false);
        assert.equal(countdown.toString().includes('forEach'), false);
        assert.equal(countdown.toString().includes('filter'), false);
        assert.equal(countdown.toString().includes('reduce'), false);
    });

    it('You should use recursion to solve this problem', () => {
        assert.equal(countdown.toString().includes('countdown'), true);
    });
});
