import chai from 'chai';
import isBuffer from '../isBuffer.js';
const expect = chai.expect;
const assert = chai.assert;
let x = Buffer(2);
//let y = new Uint8Array(2);
    
describe("Buffer checking",()=> {
    it("Case 1", function(){
    const result = isBuffer(new Buffer(2));
    expect(result).to.equal(true);
    });
    it("Case 2",function(){
        const result = isBuffer(new Uint8Array(2));
        expect(result).to.equal(false);
    });   
});