//= require geocoder
var Widget = function(input, results){
  var $input = $(input);
  var $results = $(results);
  var geocoder = new Geocoder();
  var timeout;

  function onChange(e){
    $results.html('Searching...');

    clearTimeout(timeout);
    timeout = setTimeout(function(){
      geocoder.geocode($input.val(), updateResults);
    }, 300);
  }

  function updateResults(address) {
    if(address){
      $results.html(address);
    } else {
      $results.html('No matches found');
    }
  }

  function init() {
    var changeHandler = onChange.bind(this);
    $input.on('keyup', changeHandler);
  }

  init();
  return {};
};
