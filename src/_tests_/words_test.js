import chai from 'chai';
import words from '../words.js';
const expect = chai.expect;
const assert = chai.assert;
    
describe("Words checking",()=> {
    it("Case 1", function(){
        const result = words('fred, barney, & pebbles');
        expect(result).to.deep.equal(['fred', 'barney', 'pebbles']);
    });
    it("Case 2",function(){
        const result = words('fred, barney, & pebbles', /[^, ]+/g);
        expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    });
});