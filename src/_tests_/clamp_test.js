import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import clamp from '../clamp.js';
//const fs = require("../add");
describe("Clamp",()=>{
    it("Return a clamp for a number higher than min range", function(){
    const result1 = clamp(-4,-5,10);
    expect(result1).to.equal(-5);
    });
    it("Return a clamp for a number higher than maximum range",function(){
        const result2 = clamp(11,-5,10);
        expect(result2).to.equal(-5);
        
    });
    it("Return a clamp for a within the range",function(){
        const result3 = clamp(-3,-4,5);
        expect(result3).to.equal(-4);
        
    });
   
    it("Return a clamp for undefined range ",function(){
        try{
            const result = clamp(-3,undefined,undefined);
           console.log(result);
        }catch(e){
            console.log(e);
        }
        });
        


    });