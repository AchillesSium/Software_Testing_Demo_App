import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import capitalize from '../capitalize.js';
//const fs = require("../add");
describe("Capitalize Integration Testing",()=>{
    it("Creates upper case of the initial alphabet of a  capitalized string", function(){
    const result1 = capitalize('LONDON');
    expect(result1).to.equal('London');
    });
    it("Creates upper case of the initial alphabet of a lowercased string", function(){
        const result2 = capitalize('bengal');
        expect(result2).to.equal('Bengal');
        });
    it(" throws error",function(){
     try {const result = capitalize(13);
    console.log(result);}
    catch(e){
        console.log(e);
    }



     });
});
