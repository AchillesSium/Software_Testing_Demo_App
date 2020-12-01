import chai from 'chai';
import upperFirst from '../upperFirst.js';
const expect = chai.expect;
const assert = chai.assert;
    
describe("Upper First checking",()=> {
    it("Case 1", function(){
        const result = upperFirst('fred');
        expect(result).to.equal('Fred');
    });
    it("Case 2",function(){
        const result = upperFirst('FRED');
        expect(result).to.equal('FRED');
    });
});