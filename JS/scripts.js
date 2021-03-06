var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);
function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}
function showCountriesList(resp) {
   countriesList.empty();
   resp.forEach(function(item){
    $('<li>').addClass('title').text(item.name).appendTo(countriesList);
    $('<li>').text('Capital - ' + item.capital).appendTo(countriesList);
    $('<li>').text('Population - ' + item.population).appendTo(countriesList);
	  $('<li>').append('<img src="' + item.flag + '" alt="Flaga">')
             .appendTo(countriesList);

});
}