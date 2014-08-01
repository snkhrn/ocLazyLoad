module.exports = function(config) {

	config.set({
		basePath: '../',

		frameworks: ['jasmine'],

		browsers: ['PhantomJS'],

		plugins: [
			'karma-junit-reporter',
			'karma-jasmine',
			'karma-phantomjs-launcher'
		],

		autoWatch: true,
		singleRun: true,
		colors: true,
		port: 9876,
		logLevel: config.LOG_INFO,

		files: [
			'node_modules/jasmine-as-promised/src/jasmine-as-promised.js',
			'bower_components/jquery/dist/jquery.js',
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'src/ocLazyLoad.js',
			'test/unit/**/*.spec.js'
		],

		exclude: [
		],

		junitReporter: {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}
	});
};