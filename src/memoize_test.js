import chai from 'chai';
import memoize from '../memoize.js';
const expect = chai.expect;
const assert = chai.assert;

const object = { 'a': 1, 'b': 2 };
const other = { 'c': 3, 'd': 4 };
    
describe("Memoize checking",()=> {
  /*it("Case 1", function(){
     const result = memoize(object);
     console.log(result);
     expect(result).to.deep.equal([1, 2]);
     });
     it("Case 2",function(){
         const result = memoize(other);
         expect(result).to.deep.equal([3, 4]);
     });*/
    // it("Case 3", function(){
    //     object.a = 2;
    //     const result = memoize(object);
    //     expect(result).to.deep.equal([1, 2]);
    // });
    // it("Case 4",function(){
    //     values.cache.set(object, ['a', 'b'])
    //     const result = memoize(object);
    //     expect(result).to.deep.equal(['a', 'b']);
    // });
});