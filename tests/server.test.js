
var expect  = require("chai").expect;
var should = require('chai').should();
var sinon = require("sinon");
var proxyquire =  require('proxyquire')


describe("Server test cases", function() {
	var mockApp, mockLogger;
	var app, logger, server,instence;
	var callback = function(){};
	beforeEach(function(done) {
		console.log('running block for beforeEach');
		app = {
			init : function(){},
			start : function(){}
		}
		mockApp = sinon.stub(app);
		
		
		instence = proxyquire
	    .noCallThru()
	    .load('../server', {
	        './app' : app
	       
	    });

	   	done();
	});

	 describe('setting app start', function(){
	  	it('should have a file name as server.js', function(done){
	  		done();
	  	})
	 })

});