import chai from 'chai';
import isObject from '../isObject.js';
const expect = chai.expect;
const assert = chai.assert;
    
describe("Object checking",()=> {
    it("Case 1", function(){
    const result = isObject({});
    expect(result).to.equal(true);
    });
    it("Case 2",function(){
        const result = isObject([1,2,3]);
        expect(result).to.equal(true);
    });
    it("Case 3", function(){
        const result = isObject(Function);
        expect(result).to.equal(true);
    });
    it("Case 4",function(){
        const result = isObject(null);
        expect(result).to.equal(false);
    });
});