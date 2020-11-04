import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import eq from '../eq.js';
//const fs = require("../add");
    
describe("Type equality Testing",()=>{
    it("Checking two elements of same type", function(){
    const result = eq('a','b');
    expect(result).to.equal(true);
    });
    it("Checking two elements of same type 1",function(){
        const result = eq({ 'a': 1 },{ 'a': 1 });
        expect(result).to.equal(true);
        
    });
    it("Checking two elements with different type ",function(){
        const result = eq('a',object('a'));
        expect(result).to.equal(false);
        
    });
   
   
        


    });