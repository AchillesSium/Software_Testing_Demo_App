import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import difference from '../difference.js';
//const fs = require("../add");
    
describe("Difference Integration Testing",()=>{
    it("Return a new array with filtered values type 1", function(){
    const result = difference([2,1],[2,3]);
    console.log(result);
    expect(result).to.deep.equal([1]);
    });
    it("Return a new array with filtered values error type",function(){
        const result = difference([2,1],[2,3,1]);
        console.log(result);
        expect(result).to.deep.equal([]);
        
    });
    
        


    });