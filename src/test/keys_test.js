import chai from 'chai';
import keys from '../keys.js';
const expect = chai.expect;
const assert = chai.assert;

let rslt = ['0','1']

describe("Keys checking",()=> {
    it("Case 1", function(){
    const result = keys({});
    expect(result).to.deep.equal([]);
    });
    it("Case 2",function(){
        const result = keys('hi');
        expect(result).to.deep.equal(rslt);
    });
});