import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import every from '../every.js';
//const fs = require("../add");
    
describe("Truthy Testing using every",()=>{
    it("Checking the array type with all type of truthy elements", function(){
    const result = every([true, 1, null, 'yes'], Boolean)
    expect(result).to.equal(false);
    });
    it("Checking the array type with empty elements",function(){
        const result = every([], Boolean)
        expect(result).to.equal(true);
        
    });
    it("Checking the array type with all truthy elements",function(){
        const result = every([1,2,3,4], Boolean)
        expect(result).to.equal(true);
        
    });
   
   
        


    });