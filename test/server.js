var expect = require("chai").expect;
var request = require("request");

describe("Color Code Converter API", function(){
    const basePath = "http://localhost:3000";
    describe("RGB to Hex conversion", function(){

        let method = "/rgbToHex?red=255&green=255&blue=255";

        it("returns status 200", function(done){
            request((basePath + method), function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns the color in hex", function(done){
            request((basePath + method), function(error, response, body){
                expect(body).to.equal('ffffff');
                done();
            });
        });
    });
    describe("Hex to RGB conversion", function(){

        let method = "/hexToRgb?hex=00ff00";

        it("returns status 200", function(done){
            request((basePath + method), function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns the color in RGB", function(done){
            request((basePath + method), function(error, response, body){
                expect(body).to.equal("[0,255,0]");
                done();
            });
        });
    });
});