import chai from 'chai';
import isBoolean from '../isBoolean.js';
const expect = chai.expect;
const assert = chai.assert;
let x = false;
let y = null;
let z = true;
    
describe("Integration Testing for Boolean Object type checking",()=> {
    it("Case 1", function(){
    const result = isBoolean(x);
    expect(result).to.equal(true);
    });
    it("Case 2",function(){
        const result = isBoolean(y);
        expect(result).to.equal(false);
       
    });
    it("Case 3",function(){
        const result = isBoolean(z);
        expect(result).to.equal(true);
    });     
});
