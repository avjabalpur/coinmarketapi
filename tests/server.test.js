
var expect  = require("chai").expect;
var should = require('chai').should();
var sinon = require("sinon");
var proxyquire =  require('proxyquire')


describe("Server test cases", function() {
	var mockApp, mockLogger;
	var app, logger, server;
	var callback = function(){};
	beforeEach(function() {
		console.log('running block for beforeEach');
		app = {
			init : callback,
			start : callback
		}

		logger = {
			info : callback
		}
		
		server = proxyquire
	    .noCallThru()
	    .load('../server', {
	        './app' : app,
	        './logger/logger' : logger
	       
	    });

	    mockApp = sinon.stub(app);
	});

	 describe('setting app start', function(){
	  	it('it exits', function(){
	  		expect(server).to.exist;
	  	})

	  	it('it object', function(){
	  		expect(server).to.be.an('object');
	  	})
	 })

});