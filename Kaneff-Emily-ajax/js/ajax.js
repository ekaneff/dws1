$(document).ready(function(){

	function loadStuff (key)
	{
		$.getJSON('data/data.json')
		.done(function(data) {
			
			var newContent = '';
			
			if (key === "dates"){
				for (var i = 0; i < data.dates.length; i++) {
					newContent += '<section class="dates">';
					newContent += '<h1 id="date">' + data.dates[i].date + '</h1>';
					newContent += '<h2 id="location"><span>Location: </span>' + data.dates[i].location + '</h2>';
					newContent += '</section>';
				}
			} else if (key === "artists"){
				for (var i = 0; i < data.artists.length; i++) {
					newContent += '<section class="artists">';
					newContent += '<h1 id="name">' + data.artists[i].name + '</h1>';
					newContent += '<h2 id="stage"><span>Stage: </span>' + data.artists[i].stage + '</h2>';
					newContent += '</section>';
				}
			} else {
				for (var i = 0; i < data.sponsors.length; i++) {
					newContent += '<section class="sponsors">';
					newContent += '<h1 id="name">' + data.sponsors[i].name + '</h1>';
					newContent += '<h2 id="desc">' + data.sponsors[i].desc + '</h2>';
					newContent += '</section>';
				}
			}
			
			$('div#content').html(newContent).hide().fadeIn('slow');
		
		})
		.fail ( function () {
			$('div#content').html("Cannot load content at this time").hide().fadeIn('slow');
		
		});
	
	}

	$('a#dates').on('click', function(e){
		e.preventDefault();
		loadStuff("dates");
	});
	
	$('a#artists').on('click', function(e){
		e.preventDefault();
		loadStuff("artists");
	});
	
	$('a#sponsors').on('click', function(e){
		e.preventDefault();
		loadStuff("sponsors");
	});
	

});