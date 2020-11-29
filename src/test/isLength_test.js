import chai from 'chai';
import isLength from '../isLength.js';
const expect = chai.expect;
const assert = chai.assert;
    
describe("Length checking",()=> {
    it("Case 1", function(){
    const result = isLength(3);
    expect(result).to.equal(true);
    });
    it("Case 2",function(){
        const result = isLength(Number.MIN_VALUE);
        expect(result).to.equal(false);
    });
    it("Case 3", function(){
        const result = isLength(Infinity);
        expect(result).to.equal(false);
    });
    it("Case 4",function(){
        const result = isLength('3');
        expect(result).to.equal(false);
    });
});
