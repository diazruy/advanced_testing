//= require widget
describe('Widget', function(){
  var $fixture, widget, geocoder;

  beforeEach(function(){
    jasmine.Clock.useMock();

    $fixture = $("<input type='text' id='address' value=''/><div id='results'>");
    $('body').append($fixture);

    geocoder = {
      geocode: function(input, callback) {
        callback(input);
      }
    }

    spyOn(window, 'Geocoder').andReturn(geocoder)

    widget = new Widget('#address', '#results');
  });

  afterEach(function(){
    $fixture.remove()
  });

  it("displays the results", function(){
    $('#address').val('Waterfront');
    $('#address').trigger('keyup');
    jasmine.Clock.tick(300);

    expect($('#results').html()).toEqual('Waterfront');
  });

  it("displays 'No results' when no results are found", function(){
    spyOn(geocoder, 'geocode').andCallFake(function(input, callback){
      callback(null);
    });

    $('#address').val('asdfasdfasdfasdf');
    $('#address').trigger('keyup');
    jasmine.Clock.tick(300);

    expect($('#results').html()).toEqual('No matches found');
  });

  it("searches for the given address 300ms after last change", function(){
    $('#address').val('Waterfront');
    $('#address').trigger('keyup');

    jasmine.Clock.tick(250);
    expect($('#results').html()).not.toEqual('Waterfront');

    jasmine.Clock.tick(51);
    expect($('#results').html()).toEqual('Waterfront');
  });

  it("displays 'Searching...' while waiting", function(){
    $('#address').val('Waterfront');
    $('#address').trigger('keyup');
    expect($('#results').html()).toEqual('Searching...');
    jasmine.Clock.tick(250);
    expect($('#results').html()).toEqual('Searching...');
    jasmine.Clock.tick(51);
    expect($('#results').html()).not.toEqual('Searching...');
  });
});

