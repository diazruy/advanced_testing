//= require widget
describe('Widget', function(){

  it("displays the results", function(){
    var $fixture = $("<input type='text' id='address' value=''/><div id='results'>");
    $('body').append($fixture);
    var widget = new Widget('#address', '#results');

    runs(function(){
      $('#address').val('Waterfront');
      $('#address').trigger('keyup');
    })

    waitsFor(function(){ return $('#results').html().length > 0; }, 500);

    runs(function(){
      expect($('#results').html()).not.toEqual('');
      $fixture.remove();
    });
  });

  it("displays 'No results' when no results are found", function(){
    var $fixture = $("<input type='text' id='address' value=''/><div id='results'>");
    $('body').append($fixture);
    var widget = new Widget('#address', '#results');

    runs(function(){
      $('#address').val('asdfasdfasdfasdf');
      $('#address').trigger('keyup');
    })

    waitsFor(function(){ return $('#results').html() != 'Searching...'; }, 500);

    runs(function(){
      expect($('#results').html()).toEqual('No matches found');
      $fixture.remove();
    });
  });

  it("searches for the given address 300ms after last change", function(){
    var $fixture = $("<input type='text' id='address' value=''/><div id='results'>");
    $('body').append($fixture);
    var widget = new Widget('#address', '#results');

    runs(function(){
      $('#address').val('Waterfront');
      $('#address').trigger('keyup');
      expect($('#results').html()).toEqual('Searching...');
    });

    waits(250);

    runs(function(){
      expect($('#results').html()).toEqual('Searching...');
    });

    waitsFor(function(){ return $('#results').html() != 'Searching...'; }, 500);

    runs(function(){
      expect($('#results').html()).not.toEqual('Searching...');
      $fixture.remove();
    });

  });

  it("displays 'Searching...' while waiting", function(){
    var $fixture = $("<input type='text' id='address' value=''/><div id='results'>");
    $('body').append($fixture);
    var widget = new Widget('#address', '#results');

    runs(function(){
      $('#address').val('Waterfront');
      $('#address').trigger('keyup');
      expect($('#results').html()).toEqual('Searching...');
    })

    waitsFor(function(){ return $('#results').html() != 'Searching...'; }, 500);

    runs(function(){
      expect($('#results').html()).not.toEqual('Searching...');
      $fixture.remove();
    });
  });

});

