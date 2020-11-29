import chai from 'chai';
import toFinite from '../toFinite.js';
const expect = chai.expect;
const assert = chai.assert;
    
describe("To finite checking",()=> {
    it("Case 1", function(){
        const result = toFinite(3.2);
        expect(result).to.deep.equal(3.2);
    });
    it("Case 2",function(){
        const result = toFinite(Number.MIN_VALUE);
        expect(result).to.deep.equal(5e-324);
    });
    it("Case 3", function(){
        const result = toFinite(Infinity);
        expect(result).to.deep.equal(1.7976931348623157e+308);
    });
    it("Case 4",function(){
        const result = toFinite('3.2');
        expect(result).to.deep.equal(3.2);
    });
});