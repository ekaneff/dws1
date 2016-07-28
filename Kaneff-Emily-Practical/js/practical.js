$(document).ready(function() {

	function loadData(name){
		
		if (name === "doy"){
			$.getJSON('http://api.wunderground.com/api/78b99a16167911a4/conditions/q/pa/doylestown.json')
			.done (function(data){
				popData(data);
			})
			.fail (function(){
			$('#content').html("We cannot process your request at this time.");
			});		
			
		} else {
			$.getJSON('http://api.wunderground.com/api/78b99a16167911a4/conditions/q/sc/myrtle_beach.json')
			.done (function(data){
				popData(data);
			})
			.fail (function(){
			$('#content').html("We cannot process your request at this time.");
			});
		}
		
	}
	
	function popData(data){
		var newContent = '';
				
		newContent += '<section id="genContent">';
		newContent += '<h2 id="currentCity">' + data.current_observation.display_location.full + '</h2>';
		newContent += '<img src="' +  data.current_observation.icon_url + '" alt = "clear icon"/>' + '</div>';
		
		newContent += '<div id="info">';
		newContent += '<h3 id="weather">Weather: ' + data.current_observation.weather + '</h3>';
		newContent += '<h3 id="currentTemp">Current Temperature: ' + data.current_observation.temp_f + '&#176;F</h3>';
		newContent += '<h3 id="feelsLike">Feels Like: ' + data.current_observation.feelslike_f + '&#176;F</h3>';
		newContent += '<h3 id="relHumid">Relative Humidity: ' + data.current_observation.relative_humidity + '</h3>';
		newContent += '<h3 id="windMph">Wind Speed: ' + data.current_observation.wind_mph + '<span id="mph">mph</span></h3>';  
		newContent += '<h3 id="windDir">Wind Direction: ' + data.current_observation.wind_dir + '</h3>';
		newContent += '</div>';
		newContent += '</section>';
		$('#content').html(newContent);
	}	
	
	
	
	$('a#doy').on('click', function(e){
		e.preventDefault();
		loadData("doy");
	});
	
	$('a#myrtle').on('click', function(e){
		e.preventDefault();
		loadData("myr");
	});
	
	
});