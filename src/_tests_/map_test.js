import chai from 'chai';
import map from '../map.js';
const expect = chai.expect;
const assert = chai.assert;

function square(n) {
    return n * n
}

describe("map checking",()=> {
    it("Case 1", function(){
    const result = map([4, 8], square);
    expect(result).to.deep.equal([16, 64]);
    });
});