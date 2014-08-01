describe('Service: $ocLazyLoad', function() {
	'use strict';

	var $ocLazyLoad;

	// Use to provide any mocks needed
	function _provide(callback) {
		// Execute callback with $provide
		module(function($provide) {
			callback($provide);
		});
	}

	// Use to inject the code under test
	function _inject() {
		inject(function(_$ocLazyLoad_) {
			$ocLazyLoad = _$ocLazyLoad_;
		});
	}

	// Call this before each test, except where you are testing for errors
	function _setup() {
		// Mock any expected data
		_provide(function(provide) {
//			provide.value('myVal', {});
		});

		// Inject the code under test
		_inject();
	}

	beforeEach(function() {
		// Load the service's module
		module('oc.lazyLoad');
	});

	describe('the service api', function() {
		beforeEach(function() {
			// Inject with expected values
			_setup();
		});

		it('should be defined', function() {
			expect($ocLazyLoad).toBeDefined();
		});

		it('should have a method getModuleConfig()', function() {
			expect($ocLazyLoad.getModuleConfig).toBeDefined()
		});

		it('should have a method setModuleConfig()', function() {
			expect($ocLazyLoad.setModuleConfig).toBeDefined()
		});

		it('should have a method getModules()', function() {
			expect($ocLazyLoad.getModules).toBeDefined()
		});

		// deprecated
		it('should have a method loadTemplateFile()', function() {
			expect($ocLazyLoad.loadTemplateFile).toBeDefined()
		});

		it('should have a method load()', function() {
			expect($ocLazyLoad.load).toBeDefined()
		});
	});

	/*describe('service errors', function() {
	 it('should throw an error when required dependency is missing', function() {
	 // Use an anonymous function to wrap the code that will fail
	 function wrapper() {
	 // Inject WITHOUT providing required values
	 _inject();
	 }

	 expect(wrapper).toThrow('$ocLazyLoad: myVal not provided');
	 });
	 });*/
});