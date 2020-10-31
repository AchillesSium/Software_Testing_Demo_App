import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import isArguments from '../isArguments.js';
//const fs = require("../add")


    
describe("Integration Testing for arguments",()=>{
    it("Case 1", function(){
    const result = isArguments(function() { return arguments }());
    expect(result).to.equal(true);
    });
    it("Case 2",function(){
        const result = isArguments([1, 2, 3])
        console.log(result);
        expect(result).to.equal(false);
       
    });
    
        
    });
   
   
        


