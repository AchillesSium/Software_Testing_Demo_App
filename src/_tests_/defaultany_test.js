import chai from 'chai';
const expect = chai.expect;
//const assert = chai.assert;
//const {expect,assert} = require('chai');
import defaultToAny from '../defaultToAny.js';
//const fs = require("../add");
describe("Integration Testing setting value with multiple default values",()=>{
    it("Default for normal cases", function(){
    const result = defaultToAny(2,5,6);
    expect(result).to.equal(2);
    });
    it("Default for falsy case 1",function(){
    const result1 = defaultToAny(undefined,5,10);
    expect(result1).to.equal(5);
    });
    it("Default for falsy case 2",function(){
        const result2 = defaultToAny(null,undefined,10);
        expect(result2).to.equal(10);
        });
        it("Default for falsy case 3",function(){
            const result2 = defaultToAny(null,undefined,NaN);
            expect(result2).to.deep.equal(NaN);
            });
    

    });