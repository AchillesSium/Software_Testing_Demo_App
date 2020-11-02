import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import endsWith from '../endsWith.js';
//const fs = require("../add");
    
describe("Endswith Testing",()=>{
    it("Checking an element in String without index", function(){
    const result = endsWith('abc', 'c');
    expect(result).to.equal(true);
    });
    it("Checking an element in String without index false case",function(){
        const result = endsWith('abc', 'a');
        expect(result).to.equal(false);
        
    });
    it("Checking an element in String with index ",function(){
        const result = endsWith('abc', 'a',1);
        expect(result).to.deep.equal(true);
        
    });
   
   
        


    });