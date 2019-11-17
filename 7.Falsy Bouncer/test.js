const bouncer = require('./index');

const assert = require('assert');

describe("bouncer", function() {

    it('bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9]', () => {
        assert.deepEqual(bouncer([7, "ate", "", false, 9]), [7, "ate", 9]);
    });

    it('bouncer(["a", "b", "c"]) should return ["a", "b", "c"]', () => {
        assert.deepEqual(bouncer(["a", "b", "c"]), ["a", "b", "c"]);
    });

    it('bouncer([false, null, 0, NaN, undefined, ""]) should return []', () => {
        assert.deepEqual(bouncer([false, null, 0, NaN, undefined, ""]), []);
    });

    it('bouncer([1, null, NaN, 2, undefined]) should return [1, 2]', () => {
        assert.deepEqual(bouncer([1, null, NaN, 2, undefined]), [1, 2]);
    });
});
