import chai from 'chai';
import toNumber from '../toNumber.js';
const expect = chai.expect;
const assert = chai.assert;
    
describe("To Number checking",()=> {
    it("Case 1", function(){
        const result = toNumber(3.2);
        expect(result).to.deep.equal(3.2);
    });
    it("Case 2",function(){
        const result = toNumber(Number.MIN_VALUE);
        expect(result).to.deep.equal(5e-324);
    });
    it("Case 3", function(){
        const result = toNumber(Infinity);
        expect(result).to.deep.equal(Infinity);
    });
    it("Case 4",function(){
        const result = toNumber('3.2');
        expect(result).to.deep.equal(3.2);
    });
});