module.exports = function(config){
  config.set({

    basePath : '../',

    preprocessors: {
      'app/**/*.html':'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
      prependPrefix: '/'
    },

    files : [
      'app/lib/angular.js',
      'app/lib/angular-*.js',
      'app/lib/underscore.min.js',
      'app/js/**/*.js',
      'app/**/*.html',
      'test/tests/**/*.js'
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
