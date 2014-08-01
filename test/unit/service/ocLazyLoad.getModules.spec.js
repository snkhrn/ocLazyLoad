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

	describe('the method getModules', function() {
		beforeEach(function() {
			// Inject with expected values
			_setup();
		});

		it('should list the loaded modules', function() {
			expect($ocLazyLoad.getModules() instanceof Array).toBe(true)
		});

		it('should have ng defined', function() {
			expect($ocLazyLoad.getModules().indexOf('ng')).toEqual(0);
		});

		it('should only have ng defined', function() {
			expect($ocLazyLoad.getModules().length).toEqual(1);
		});
	});
});