import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import defaultTo from '../defaultTo.js';
//const fs = require("../add");
describe("Setting Default Values",()=>{
    it("Default for normal cases", function(){
    const result = defaultTo(2,5);
    expect(result).to.equal(2);
    });
    it("Default for falsy case 1",function(){
    const result1 = defaultTo(undefined,5);
    expect(result1).to.equal(5);
    });
   
//  it("Default for falsy case 2",function(){
//             const result2 = defaultTo(null,undefined);
//             expect(result2).to.equal(null);
//             });

     });
