import chai from 'chai';
import isArrayLikeObject from '../isArrayLikeObject.js';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import isArrayLikeObject from '../isArrayLikeObject.js';
//const fs = require("../add")


    
describe("Integration Testing for Array Object type checking",()=>{
    it("Case 1", function(){
    const result = isArrayLikeObject([1, 2, 3]);
    expect(result).to.equal(true);
    });
    it("Case 2 non-array object",function(){
        const result = isArrayLikeObject(x.id);
        expect(result).to.equal(false);
       
    });
    it("Case 3 non-array object",function(){
        const result = isArrayLikeObject(Function);
        expect(result).to.equal(false);
       
    });
   
        
    });
   
   
        


