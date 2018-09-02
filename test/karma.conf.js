module.exports = function(config){
  config.set({

    basePath : '../',

    preprocessors: {
      '**/*.html':'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
      // stripPrefix: 'app/'
      prependPrefix: '/'
    },

    files : [
      'app/lib/angular.js',
      'app/lib/angular-*.js',
      'app/lib/underscore.min.js',
      'app/js/**/*.js',
      'test/tests/**/*.js',
      'app/**/*.html'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
