//= require geocoder
describe('Geocoder', function(){
  var geocoder;

  beforeEach(function(){
    geocoder = new Geocoder();
  });

  it("executes the callback with the first matched address as an argument", function(){
    var address = "Waterfront Station, Vancouver";
    var callback = jasmine.createSpy();

    spyOn($, 'getJSON').andCallFake(function(url, params, jsonCallback){
      jsonCallback({results: [{formatted_address: 'Waterfront Skytrain, Vancouver, BC V6B, Canada'}]});
    });

    geocoder.geocode(address, callback);
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith('Waterfront Skytrain, Vancouver, BC V6B, Canada');
  });

  it('returns null when no results are found', function(){
    var address = "asfasdasdf";
    var callback = jasmine.createSpy();

    spyOn($, 'getJSON').andCallFake(function(url, params, jsonCallback){
      jsonCallback({results: []});
    });

    geocoder.geocode(address, callback);
    expect(callback).toHaveBeenCalledWith(null);
  });
});
