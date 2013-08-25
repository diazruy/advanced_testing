//= require widget
describe('Widget', function(){
  var $fixture, widget, geocoder;

  beforeEach(function(){
    loadFixtures('widget');
    jasmine.Clock.useMock();

    geocoder = {
      geocode: function(input, callback) {
        callback(input);
      }
    }

    spyOn(window, 'Geocoder').andReturn(geocoder)

    widget = new Widget('#address', '#results');
  });

  it("displays the results", function(){
    $('#address').val('Waterfront');
    $('#address').trigger('keyup');
    jasmine.Clock.tick(300);

    expect($('#results')).toHaveText('Waterfront');
  });

  it("displays 'No results' when no results are found", function(){
    spyOn(geocoder, 'geocode').andCallFake(function(input, callback){
      callback(null);
    });

    $('#address').val('asdfasdfasdfasdf');
    $('#address').trigger('keyup');
    jasmine.Clock.tick(300);

    expect($('#results')).toHaveText('No matches found');
  });

  it("searches for the given address 300ms after last change", function(){
    $('#address').val('Waterfront');
    $('#address').trigger('keyup');

    jasmine.Clock.tick(250);
    expect($('#results')).not.toHaveText('Waterfront');

    jasmine.Clock.tick(51);
    expect($('#results')).toHaveText('Waterfront');
  });

  it("displays 'Searching...' while waiting", function(){
    $('#address').val('Waterfront');
    $('#address').trigger('keyup');
    expect($('#results')).toHaveText('Searching...');
    jasmine.Clock.tick(250);
    expect($('#results')).toHaveText('Searching...');
    jasmine.Clock.tick(51);
    expect($('#results')).not.toHaveText('Searching...');
  });
});

