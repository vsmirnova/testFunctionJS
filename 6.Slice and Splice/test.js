const frankenSplice = require('./index');

const assert = require('assert');

describe("frankenSplice", function() {

    it('frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5]', () => {
        assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
    });

    it('frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"]', () => {
        assert.deepEqual(frankenSplice([1, 2], ["a", "b"], 1), ["a", 1, 2, "b"]);
    });

    it('frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]', () => {
        assert.deepEqual(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2), ["head", "shoulders", "claw", "tentacle", "knees", "toes"]);
    });

    it('All elements from the first array should be added to the second array in their original order', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5];
        const n = 1;
        assert.deepEqual(frankenSplice(array1, array2, n).splice(n, array1.length), array1);
    });

    it('The first array should remain the same after the function runs', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5];
        const n = 1;
        frankenSplice(array1, array2, n);
        assert.deepEqual(array1, [1, 2, 3]);
    });

    it('The second array should remain the same after the function runs', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5];
        const n = 1;
        frankenSplice(array1, array2, n);
        assert.deepEqual(array2, [4, 5]);
    });

});
