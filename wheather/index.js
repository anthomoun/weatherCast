var callBackGetSuccess = function(data) {
  console.log("api data", data)
  var city = document.getElementById("city").value;
  element.innerHTML = "temperature " + currrent.temperature;
}


function buttonClickGet() {
  var url = "http://api.weatherstack.com/current?_key=590ba9bed400d2ae8033fa2d4be210a3&query="+city

  $.get(url,callBackGetSuccess).done(function() {

  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
  });
}
