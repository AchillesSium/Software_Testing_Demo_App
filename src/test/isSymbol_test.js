import chai from 'chai';
import isSymbol from '../isSymbol.js';
const expect = chai.expect;
const assert = chai.assert;
    
describe("Symbol checking",()=> {
    it("Case 1", function(){
    const result = isSymbol(Symbol.iterator);
    expect(result).to.equal(true);
    });
    it("Case 2",function(){
        const result = isSymbol('abc');
        expect(result).to.equal(false);
    });
});