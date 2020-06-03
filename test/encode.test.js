//WIP
var assert = require('chai').assert;
var encoder = require('../src/Encoder');

describe('Encoder', function() {
    
    var str = "Jusselly";

    var base64 = encoder(0, str);
    var rot13 = encoder(1, str);
    var hexa = encoder(2, str);
    var binary = encoder(3, str);

    it('should encode a string', function() {
        assert.equal(base64, "SnVzc2VsbHk=")
    });
    it('should encode a string', function() {
        assert.equal(rot13, "W,h,f,f,r,y,y,l")
    });
    it('should encode a string', function() {
        assert.equal(hexa, "4a757373656c6c79")
    });
    it('should encode a string', function() {
        assert.equal(binary, " 1010011 1100001 1110010 1100001 1111001 ")
    });
})
