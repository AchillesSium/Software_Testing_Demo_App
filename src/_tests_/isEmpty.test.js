import chai from 'chai';
import isEmpty from '../isEmpty.js';
const expect = chai.expect;
const assert = chai.assert;
    
describe("Empty checking",()=> {
    it("Case 1 null", function(){
    const result = isEmpty(null);
    expect(result).to.equal(true);
    });
    it("Case 2 bool",function(){
        const result = isEmpty(true);
        expect(result).to.equal(true);
    });   
    it("Case 3 number", function(){
        const result = isEmpty(1);
        expect(result).to.equal(true);
    });
    it("Case 4 array",function(){
        const result = isEmpty([1,2,3]);
        expect(result).to.equal(false);
    }); 
    it("Case 5 string", function(){
        const result = isEmpty('abc');
        expect(result).to.equal(false);
    });
    it("Case 6 object",function(){
        const result = isEmpty({ 'a': 1 });
        expect(result).to.equal(false);
    }); 
});
