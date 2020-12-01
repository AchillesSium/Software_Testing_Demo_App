import chai from 'chai';
import ceil from '../ceil.js';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
//const fs = require("../add")


    
describe("Integration Testing for Ceil for rounding up numbers",()=>{
    it("Case 1", function(){
    const result1 = ceil(4.006);
    console.log(result1);
    expect(result1).to.equal(5);
    });
    it("Case 2",function(){
        const result2 = ceil(6.002,2);
        console.log(result2);
        expect(result2).to.equal(6.01);
       
    });
    it("Case 3 for non-numbers",function(){
        try {const result = ceil("abc",2);
        console.log(result);}
        catch(e){
            console.log(e);
        }}
       
     );
   
        
    });
   
   
        


