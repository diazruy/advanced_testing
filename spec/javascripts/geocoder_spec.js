//= require geocoder
describe('Geocoder', function(){
  var geocoder;

  // Google's Geocoding API lives at http://maps.googleapis.com/maps/api/geocode/json
  // It takes the following GET parameters:
  // - sensor: (boolean) Indicates whether or not the geocoding request comes
  //           from a device with a location sensor
  // - address: (String) The address you want to geocode
  //
  // The response is a JSON object like the following:
  // {results: [
  //   {formatted_addres: '123 12th St', ...},
  //   {formatted_address: '123 12th Ave', ...}
  // ]}
  //
  // Create a Geocoder class with a #geocode method which will take an address
  // to search for and a callback to execute with the first available result, or null
  // if none is found
  //
  // Example usage:
  // var geocoder = new Geocoder();
  // geocoder.geocode(address, function(address){ console.log(address);});
  //
  // Use $.getJSON() to get the content. In the spec, stub out this call
  // to prevent hitting an external resource

  it("executes the callback with the first matched address as an argument", function(){
    expect(false).toBeTruthy();
  });

  it('returns null when no results are found', function(){
    expect(false).toBeTruthy();
  });
});
