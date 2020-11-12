import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import isArrayLike from '../isArrayLike.js';
//const fs = require("../add")
let x = true;
let xx = undefined;

describe("Integration Testing for Array type checking",()=>
{
    it("Case 1", function(){
    const result = isArrayLike([1, 2, 3]);
    expect(result).to.equal(true);
    });
    it("Case 2",function(){
        const result = isArrayLike(x);
        expect(result).to.equal(false);
       
    });
    it("Case 3",function(){
        const result = isArrayLike(xx);
        expect(result).to.equal(false);
       
    });
   
        
    }
    
    );
   
   
        


