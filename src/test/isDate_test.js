import chai from 'chai';
import isDate from '../isDate.js';
const expect = chai.expect;
const assert = chai.assert;
let x = new Date;
let y = 'Mon April 23 2012';
    
describe("Date checking",()=> {
    it("Case 1", function(){
    const result = isDate(x);
    expect(result).to.equal(true);
    });
    it("Case 2",function(){
        const result = isDate(y);
        expect(result).to.equal(false);
    });   
});
