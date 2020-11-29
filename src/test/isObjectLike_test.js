import chai from 'chai';
import isObjectLike from '../isObjectLike.js';
const expect = chai.expect;
const assert = chai.assert;
    
describe("Object Like checking",()=> {
    it("Case 1", function(){
    const result = isObjectLike({});
    expect(result).to.equal(true);
    });
    it("Case 2",function(){
        const result = isObjectLike([1,2,3]);
        expect(result).to.equal(true);
    });
    it("Case 3", function(){
        const result = isObjectLike(Function);
        expect(result).to.equal(false);
    });
    it("Case 4",function(){
        const result = isObjectLike(null);
        expect(result).to.equal(false);
    });
});