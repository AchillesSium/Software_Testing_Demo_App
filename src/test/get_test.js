import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import get from '../get.js';
//const fs = require("../add")

const object = { 'a': [{ 'b': { 'c': 3 } }] };
    
describe("Integration Testing for path of an object",()=>{
    it("Case 1", function(){
    const result = get(object,'a[0].b.c');
    console.log(result);
    expect(result).to.equal(3);
    });
    it("Case 2",function(){
        const result = get(object,'a.b.c','default');
        console.log(result);
        expect(result).to.equal('default');
       
    });
    
        
    });
   
   
        


