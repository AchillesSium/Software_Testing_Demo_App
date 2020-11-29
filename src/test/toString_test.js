import chai from 'chai';
import toString from '../toString.js';
const expect = chai.expect;
const assert = chai.assert;
    
describe("To String checking",()=> {
    it("Case 1", function(){
        const result = toString(null);
        expect(result).to.equal(null);
    });
    it("Case 2",function(){
        const result = toString(-0);
        expect(result).to.equal('-0');
    });
    it("Case 3", function(){
        const result = toString([1, 2, 3]);
        expect(result).to.equal('1,2,3');
    });
});