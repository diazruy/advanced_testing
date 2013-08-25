var Geocoder = function(){
  var geocode = function(address, callback){
    url = "http://maps.googleapis.com/maps/api/geocode/json";
    params = {
      sensor: false,
      address: address
    };

    $.getJSON(url, params, function(data, status, xhr){
      firstResult = data.results[0];
      if(typeof firstResult !== 'undefined') {
        callback(firstResult.formatted_address);
      } else {
        callback(null);
      }
    });
  };

  return {
    geocode: geocode
  };
};
