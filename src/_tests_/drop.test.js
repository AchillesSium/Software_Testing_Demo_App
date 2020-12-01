import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import drop from '../drop.js';
//const fs = require("../add");
    
describe("Drop Integration Testing",()=>{
    it("Dropping number of elements less than array length", function(){
    const result = drop([1,2,3])
    expect(result).to.deep.equal([2,3]);
    });
    it("Dropping number of elements less than array length",function(){
        const result = drop([1,2,3],2)
        expect(result).to.deep.equal([3]);
        
    });
    it("Dropping number of elements greater than array length",function(){
        const result = drop([1,2,3],5)
        expect(result).to.deep.equal([]);
        
    });
   
   
        


    });