
var expect  = require("chai").expect;
var should = require('chai').should();
var sinon = require("sinon");
var proxyquire =  require('proxyquire')


describe("Server test cases", function() {
	var mockApp, mockLogger;
	var app, logger, server;
	var callback = sinon.spy();
	beforeEach(function(done) {
		console.log('running block for beforeEach');
		app = {
			init : function(){},
			start : function(){}
		}
		mockApp = sinon.stub(app);
		

		server = proxyquire('../server',{
			'../app' : app
		})

		mockApp.start.returns(callback);

		console.log('&********************', server)

	   	done();
	});

	 describe('setting app start', function(){
	  	it('should have a file name as server.js', function(done){
	  		done();
	  	})
	 })

});