function start(){
	
	$header = $('h1').hide().slideDown();
	
	function checkEmail(){
		$msg = $('#msg');
	
		if (this.value.length === 0){
			$msg.text('Please enter a valid email address');
		} else {
			$msg.text('');;
		}
	}

	function hoverChange(e){
		e.target.setAttribute("class", "hover");
	}

	function cancelHover(){
		this.removeAttribute("class");
	}

	function changeSubmit(e){
		e.target.setAttribute("data-state", "sent");
		e.target.text = "Sent";
		$('#input').text("Email sent to: " + $email.val());
	}

	function changeSend(e){
		e.target.setAttribute("data-state", "submit");
		e.target.text = "Submit";
	}

	$email = $('input');

	//email.addEventListener('blur', checkEmail, false);
	
	$email.on('blur', checkEmail);

	//email.addEventListener('mouseover', hoverChange, false);
	
	$email.on('mouseover', hoverChange);

	//email.addEventListener('mouseout', cancelHover, false);
	
	$email.on('mouseout', cancelHover);

	$button = $('#but');
	
	//button.addEventListener('click', function(event)
	
	$button.on('click', function(event){
			event.preventDefault();
			if (event.target.getAttribute("data-state") == "submit"){
				changeSubmit(event);
			} else {
				changeSend(event);
			}
		});
}
		
window.addEventListener('load', start, false);