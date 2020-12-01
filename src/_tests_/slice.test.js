import chai from 'chai';
import slice from '../slice.js';
const expect = chai.expect;
const assert = chai.assert;

var array = [1, 2, 3, 4]
    
describe("Slice checking",()=> {
    it("Case 1", function(){
        const result = slice(array, 2);
        expect(result).to.deep.equal([3, 4]);
    });
    it("Case 2",function(){
        const result = slice(array, 2, 3);
        expect(result).to.deep.equal([3]);
    });
});