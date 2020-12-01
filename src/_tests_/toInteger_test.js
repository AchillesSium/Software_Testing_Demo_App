import chai from 'chai';
import toInteger from '../toInteger.js';
const expect = chai.expect;
const assert = chai.assert;
    
describe("To Integer checking",()=> {
    it("Case 1", function(){
        const result = toInteger(3.2);
        expect(result).to.deep.equal(3);
    });
    it("Case 2",function(){
        const result = toInteger(Number.MIN_VALUE);
        expect(result).to.deep.equal(0);
    });
    it("Case 3",function(){
        const result = toInteger('3.2');
        expect(result).to.deep.equal(3);
    });
});