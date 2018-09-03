'use strict';

describe('NavBarDirective', function(){
    var navBarElement, testScope;
    var testFlickrService = {
        getFeed: function(tags, onSuccess, onFailure) {
            return;
        }
    };

    beforeEach(function() {
        module('mainApp');
        module('app/js/directives/NavBarTemplate.html');

        inject(function($rootScope, $compile) {
            testScope = $rootScope.$new();
            testScope.searching = true;
            testScope.list = [];

            navBarElement = angular.element('<navbar-directive tags="tags" list="list"></navbar-directive>');
            $compile(navBarElement)(testScope);
            testScope.$digest();
        });
    });

    it('should correctly bind mock data', function(){
        expect(navBarElement).not.toBe(undefined);
    });
});
