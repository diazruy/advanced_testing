//= require geocoder
describe('Geocoder', function(){
  var geocoder, server;

  beforeEach(function(){
    server = sinon.fakeServer.create();
    geocoder = new Geocoder();
  });

  afterEach(function(){
    server.restore();
  });

  it("executes the callback with the first matched address as an argument", function(){
    var address = "Waterfront Station, Vancouver";
    var callback = sinon.spy();

    server.respondWith(new RegExp("http://maps.googleapis.com/maps/api/geocode/json"), [
      200,
      {'Content-Type': 'application/json'},
      JSON.stringify({results: [{formatted_address: 'Waterfront Skytrain, Vancouver, BC V6B, Canada'}]})
    ]);

    geocoder.geocode(address, callback);
    server.respond();

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith('Waterfront Skytrain, Vancouver, BC V6B, Canada');
  });

  it('returns null when no results are found', function(){
    var address = "asfasdasdf";
    var callback = sinon.spy();

    server.respondWith(new RegExp("http://maps.googleapis.com/maps/api/geocode/json"), [
      200,
      {'Content-Type': 'application/json'},
      JSON.stringify({results: []})
    ]);

    geocoder.geocode(address, callback);
    server.respond();

    expect(callback).toHaveBeenCalledWith(null);
  });
});
