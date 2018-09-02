"use strict";

describe('FlickrService', function(){
    var testService;
    var testHTTPService;
    var responseData = {    
        items:[],
        title:"Test"
    };
    var testURL = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK&tags=test";

    beforeEach(function() {
        module("mainApp");

        inject(function(flickrService, $httpBackend) {
            testHTTPService = $httpBackend;
            testService = flickrService;
        });
    });

    
    it('should be correctly instantiated', function(){
        expect(testService).not.toBe(undefined);
    });
    
    it('should invoke the getFeed successfully', function(){
        testHTTPService.whenJSONP(testURL).respond(responseData);
        testService.getFeed("test",function(data){
            expect(data).not.toBe(undefined);
            expect(data.title).toBe("Test");
        });
        testHTTPService.flush();
    });
});