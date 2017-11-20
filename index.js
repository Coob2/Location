//when the jQuery Mobile page is initialised
$(document).on('pageinit', initMap() {

	//set up listener for button click
	$(document).on('click', getPosition);

	//change time box to show message
	$('#time').val("Press the button to get location data");
});

//Call this function when you want to get the current position
function getPosition() {

	//change time box to show updated message
	$('#time').val("Getting data...");

	//instruct location service to get position with appropriate callbacks
	navigator.geolocation.getCurrentPosition(successPosition, failPosition);
	//navigator.geolocation.watchPosition(successPosition, failPosition, locationOptions);
}

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	});
}

//set location options
var locationOptions = {
maximumAge: 3000,
timeout: 5000,
enableHighAccuracy: true};

//called when the position is successfully determined
function successPosition(position) {

	//You can find out more details about what the position obejct contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp
	//lets get some stuff out of the position object

	var time = position.timestamp;
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var accuracy = position.coords.accuracy;

	//OK. Now we want to update the display with the correct values
	$('#time').val("Recieved data at " + time);
	$('#lattext').val("Latitude is " + latitude);
	$('#longtext').val("Longitude is " + longitude);
	$('#acctext').val("Accuracy is " + accuracy)
}

//called if the position is not obtained correctly
function failPosition(error) {
	//change time box to show updated message
	$('#time').val("Error getting data: " + error);
}
