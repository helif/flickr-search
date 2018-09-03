'use strict';

describe('GridDirective', function(){
    var gridElement, testScope;
    var testFlickrService = {
        getFeed: function(tags, onSuccess, onFailure) {
            return;
        }
    };

    beforeEach(function() {
        module('mainApp');
        module("/app/js/directives/GridTemplate.html");

        inject(function($compile, $rootScope) {
            testScope = $rootScope.$new();
            testScope.tags = "tests";
            testScope.list = [
                {title:"T1", published:"2018-09-01T18:20:00Z"},
                {title:"T2", published:"2018-08-31T08:50:00Z"},
                {title:"", published:""}
            ];

            gridElement = angular.element('<grid-directive tags="tags" list="list"></grid-directive>');
            $compile(gridElement)(testScope);
            testScope.$digest();
        });
    });

        it('should correctly bind mock data', function(){
            expect(gridElement).not.toBe(undefined);
            expect(gridElement.text()).toContain("T1");
            expect(gridElement.text()).toContain("T2");
            expect(gridElement.text()).toContain("Saturday, 1 September 2018");
            expect(gridElement.text()).toContain("Friday, 31 August 2018");
            expect(gridElement.text()).toContain("No Title");
            expect(gridElement.text()).toContain("Not Available");
        });
});
