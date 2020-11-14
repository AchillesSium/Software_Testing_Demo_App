import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import compact from '../compact.js';
//const fs = require("../add");
describe("Compact",()=>{
<<<<<<< HEAD:src/compact_test.js
    it("Return a new array with falsy values removed", function(){
    const result = compact([0,1,2,undefined,false]);
    console.log(result);
    expect(result).to.deep.equal([0,1,2]);
    });
=======
    // it("Return a new array with falsy values removed", function(){
    // const result = compact([0,1,2,undefined,false]);
    // expect(result).to.deep.equal([0,1,2]);
    // });
>>>>>>> 4b917fecc37a338457b9227799177c88e93d1e11:src/test/compact_test.js
    it("Return an empty array with all falsy values removed",function(){
        const result = compact([false,null,null,false]);
        expect(result).to.deep.equal([]);
        
    });
    
        


    });