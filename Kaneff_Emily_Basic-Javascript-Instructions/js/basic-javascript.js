(function()
{
	//character name
	
	var charFirstName = 'Mary';
	var charLastName = 'Atkins';
	var charFullName = charFirstName + ' ' + charLastName;
	
	var name = document.getElementById('charName');
	name.innerHTML = charFullName;
	
	//effects and stats
	var minorEffectOne = 2;
	var minorEffectTwo = 1;
	var minorEffectThree = 3;
	
	
	//arrays for effects
	var minorEffects = ['The magazine\'s body', 'I\'m okay', 'I\'ll make you ugly'];
	
	var sigEffects = ['Making the better me', 'I\'ll unmake you', 'Making me beautiful', 'You can\'t touch me']

	// changing the list items for both effects using the arrays
	document.getElementById('1').innerHTML = minorEffects[0] + " (" + minorEffectOne + ")";
	document.getElementById('2').innerHTML = minorEffects[1] + " (" + minorEffectTwo + ")";
	document.getElementById('3').innerHTML = minorEffects[2] + " (" + minorEffectThree + ")";
	document.getElementById('minorTotal').innerHTML = minorEffectOne + minorEffectTwo + minorEffectThree;
	
	document.getElementById('4').innerHTML = sigEffects[0] + " (1)";
	document.getElementById('5').innerHTML = sigEffects[1] + " (1)";
	document.getElementById('6').innerHTML = sigEffects[2] + " (1)";
	document.getElementById('7').innerHTML = sigEffects[3] + " (2)";
	document.getElementById('signTotal').innerHTML = 1 + 1 + 1 + 2;
	
	//button
	
	var newEl = document.createElement('a');
	var newText = document.createTextNode('Next');
	newEl.appendChild(newText);
	
	newEl.setAttribute('href', '#');
	newEl.className = 'action';
	var position = document.getElementById('button');
	position.appendChild(newEl);
	

}());