import chai from 'chai';
import reduce from '../reduce.js';
const expect = chai.expect;
const assert = chai.assert;
    
describe("Reduce checking",()=> {
    it("Case 1", function(){
        const result = reduce([1, 2], (sum, n) => sum + n, 0);
    expect(result).to.deep.equal(3);
    });
    it("Case 2",function(){
        const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key)
            return result
          }, {});
        expect(result).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });
    });
});