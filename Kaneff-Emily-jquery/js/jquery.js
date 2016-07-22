$(document).ready(function() {
	
	
	//adding a class
	var items = document.querySelectorAll('li');

	if (items.length > 0) {
		for (var i = 0; i < items.length; i++){
			items[i].className = 'items';
		}
	}
	
	
	CheckItems();
	//("Total Items: " + $('li').hasClass('.items').length);
	
	
	function CheckItems()
	{
		var count = 0;
		var $list = $('li');
		for(var i =0; i < $list.length;i++)
		{
			if($list[i].className == 'items')
			{
				count++;
			}
		}
		$('#count').html('Total Items:' + count);
	}
	
	
	//variables for elements in html
	$listItems = $('li');
	
	$form = $('#itemForm');
	
	$message = $('#message');
	
	$newItem = $('#newItemButton');
	
	
	
	//$listItems.hide().slideDown(700);
	
	$listItems.hide().each(function(index) {
		$(this).delay(200 * index).slideDown();
		});
	
	$form.hide(); //hide form on load
	
	
	
	//show form functionality 
	$newItem.on('click', function(event){
		event.preventDefault();
		if (event.target.getAttribute('data-state') == "add"){
		
			event.target.setAttribute("data-state", "min");
			event.target.text = "-";
			$form.slideDown(300).show();
			
		} else {
		
			event.target.setAttribute("data-state", "add");
			event.target.text = "+";
			$form.slideUp(300);
		}
	});
	
	
	//add item functionality
	$('#submit').on('click', function(){
		$inputValue = $('#item').val();
		if ($inputValue == ""){
			$message.html("Please enter a valid item");
			
		} else {
			$('li:last').append('<li class="items">' + $inputValue + '</li>');
			CheckItems();
			$('#item').val('');
		}
	});	
	
	//click list items
	$('section').on('click', "li", function(){
		
		if ($(this).attr('class') == "items"){
		
			$(this).removeClass('items');
			$(this).addClass('purchased');
			$('li:last').after($(this));
			CheckItems();
			
		} else if ($(this).attr('class') == "purchased"){
		
			/*$(this).animate({
			opacity: 0.0
			}, 500, function(){
			$(this).remove();
			});*/
			
			$(this).toggle("blind");
			
		} else {
			$(this).removeClass('purchased');
			$(this).addClass('items');
		}
		
	});
	
	//item counter
	
//	$counter.text($('li').hasClass('items').length);

});