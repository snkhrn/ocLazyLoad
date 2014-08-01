describe('Service: $ocLazyLoad', function() {
	'use strict';

	var $ocLazyLoad,
		$rootScope,
		$httpBackend;

	// Use to provide any mocks needed
	function _provide(callback) {
		// Execute callback with $provide
		module(function($provide) {
			callback($provide);
		});
	}

	// Use to inject the code under test
	function _inject() {
		inject(function(_$ocLazyLoad_, _$rootScope_, _$httpBackend_) {
			$ocLazyLoad = _$ocLazyLoad_;
			$rootScope = _$rootScope_;
			$httpBackend = _$httpBackend_;
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

	describe('the method load', function() {
		beforeEach(function() {
			// Inject with expected values
			_setup();
		});

		var moduleConfig = {
			name: 'testModule',
			files: ['testFile.js']
		};

		it('should work', function(done) {
			runs(function() {
				return $ocLazyLoad.load(moduleConfig).then(function success() {
					console.log('then success');
					expect(true).toBe(false);
				}, function error() {
					console.log('then error');
					expect(true).toBe(false);
				});
			});
		});
	});
});