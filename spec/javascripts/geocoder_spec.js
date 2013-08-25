//= require geocoder
describe('Geocoder', function(){
  var geocoder;

  beforeEach(function(){
    geocoder = new Geocoder();
  });

  it("executes the callback with the first matched address as an argument", function(){
    var address = "Waterfront Station, Vancouver";
    var callback = jasmine.createSpy();

    runs(function(){
      geocoder.geocode(address, callback);
    });

    waitsFor(function(){
      return callback.callCount > 0;
    }, 300);

    runs(function(){
      expect(callback).toHaveBeenCalled();
      expect(callback).toHaveBeenCalledWith('Waterfront Skytrain, Vancouver, BC V6B, Canada');
    });
  });

  it('returns null when no results are found', function(){
    var address = "asfasdasdf";
    var callback = jasmine.createSpy();

    runs(function(){
      geocoder.geocode(address, callback);
    });

    waitsFor(function(){
      return callback.callCount > 0;
    }, 300);

    runs(function(){
      expect(callback).toHaveBeenCalled();
      expect(callback).toHaveBeenCalledWith(null);
    });
  });
});
