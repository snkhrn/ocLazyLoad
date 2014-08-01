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

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe('the method setModuleConfig', function() {
		beforeEach(function() {
			// Inject with expected values
			_setup();

			// backend definition common for all tests
			$httpBackend.whenGET('testTemplate.html').respond('<script type="text/ng-template" id="myTemplate">Inside template</script>');
		});

		var moduleConfig = {
			name: 'testModule',
			files: ['testTemplate.html']
		};

		it("should return the module config that you just set", function() {
			var config = $ocLazyLoad.setModuleConfig(moduleConfig);
			expect(config instanceof Object).toBe(true)
			expect(config.name).toEqual('testModule');
			expect(config.files instanceof Array).toBe(true);
			expect(config.files.length).toEqual(1);
			expect(config.files[0]).toEqual('testTemplate.html');
		});

		it('should throw an error when the parameter is not an object', function() {
			var wrapper = function wrapper() {
				$ocLazyLoad.setModuleConfig('test');
			}
			expect(wrapper).toThrow(new Error('$ocLazyLoad: The module config has to be an object'));
		});

		it('should allow you to load a module with the module name', function(done) {
			$ocLazyLoad.setModuleConfig(moduleConfig);
			$ocLazyLoad.load('testModule');
			$httpBackend.expectGET('testTemplate.html');
			$httpBackend.flush();
		});
	});
});