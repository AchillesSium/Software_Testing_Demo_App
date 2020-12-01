import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import filter from '../filter.js';
//const fs = require("../add");
const users = [
       { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
     ];
    
describe("Truthy Testing using everyIterates over elements of `array`, returning an array of all elements `predicate` returns truthy for",()=>{
    it("Case 1", function(){
    const result = filter(users, ({ active }) => active);
    console.log(result);
    expect(result).to.deep.equal([ { user: 'barney', active: true } ]);
    });
    it("Case 2",function(){
        const result = filter(users, ({ active }) => !active);
        console.log(result);
        expect(result).to.deep.equal([ { user: 'fred', active: false } ]
        );
       
    });
    
        
    });
   
   
        


    