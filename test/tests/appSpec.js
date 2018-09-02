"use strict";

describe('MainController', function(){
    var testController, testScope;

    beforeEach(function() {
        module("mainApp");

        inject(function($rootScope, $controller) {
            testScope = $rootScope.$new();
            testController = $controller("MainController", {'$scope': testScope});
        });
    });

    it('should be correctly instantiated', function(){
        expect(testController).not.toBe(undefined);
        expect(testScope).not.toBe(undefined);
    });

    it('should initialise its scope variables correctly', function(){
        expect(testScope.message).toBe("Flickr Search");
        expect(testScope.tags).toBe("");
        expect(testScope.list).not.toBe(undefined);
        expect(testScope.list.length).toBe(0);
    })
})