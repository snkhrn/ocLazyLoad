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

	describe('the method getModuleConfig', function() {
		beforeEach(function() {
			// Inject with expected values
			_setup();
		});

		it("should return null if the module doesn't exist", function() {
			expect($ocLazyLoad.getModuleConfig('testModule')).toBe(null)
		});

		it('should return the config of module predefined', function() {
			$ocLazyLoad.setModuleConfig({
				name: 'testModule',
				files: ['testFile.js']
			});
			var config = $ocLazyLoad.getModuleConfig('testModule');
			expect(config instanceof Object).toBe(true);
			expect(config.name).toEqual('testModule');
			expect(config.files instanceof Array).toBe(true);
			expect(config.files.length).toEqual(1);
			expect(config.files[0]).toEqual('testFile.js');
		});
	});
});