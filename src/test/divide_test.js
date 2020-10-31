import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import divide from '../divide.js';
//const fs = require("../add");
    
describe("Divide Integration Testing",()=>{
    it("Case 1 for integers operands > 0", function(){
    const result = divide(5,2)
    expect(result).to.equal(2.5);
    });
    it("Case 2 for float operands > 0",function(){
        const result = divide(5.0,2.0);
        expect(result).to.equal(2.5);
        
    });
    it("Case 3 for mixed operands > 0",function(){
        const result = divide(6.0,3);
        expect(result).to.equal(2.0);
        
    });
    it("Divide two non-numbers and throws error",function(){
        try {const string_res = divide("Niladri","Saha");
       assert.fail("Error thrown!");}
       catch(e){
           expect(e).to.equal("Bad Parameters!");
       }});
   
        


    });