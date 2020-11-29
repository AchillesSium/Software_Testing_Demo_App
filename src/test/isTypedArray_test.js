import chai from 'chai';
import isTypedArray from '../isTypedArray.js';
const expect = chai.expect;
const assert = chai.assert;
    
describe("Typed array checking checking",()=> {
    it("Case 1", function(){
    const result = isTypedArray(new Uint8Array);
    expect(result).to.equal(true);
    });
    it("Case 2",function(){
        const result = isTypedArray([]);
        expect(result).to.equal(false);
    });
});