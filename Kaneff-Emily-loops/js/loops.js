(function()
{
	//console.log(numSetOne[Math.floor((Math.random() * 5))] + ' ' +  '+' + ' ' + numSetTwo[Math.floor((Math.random() * 5))]);
	
	//event listers
	var multiplyBtn = document.querySelector('button#multiply');
	multiplyBtn.addEventListener('click', multiply, false);
	
	var divideBtn = document.querySelector('button#divide');
	divideBtn.addEventListener('click', divide, false);
	
	var addBtn = document.querySelector('button#add');
	addBtn.addEventListener('click', add, false);
	
	var subtractBtn = document.querySelector('button#subtract');
	subtractBtn.addEventListener('click', subtract, false);
	
	//event lister functions
	function multiply (){
		operator = 'multiply';
		calculate(operator);
	}
	
	function divide (){
		operator = 'divide';
		calculate(operator);
	}
	
	function add (){
		operator = 'add';
		calculate(operator);
	}
	
	function subtract (){
		operator = 'subtract';
		calculate(operator);
	}
	
	
	//called by event listener
	function calculate(operation){

		var numSetOne = [1,2,3,4,5];
	
		var numSetTwo = [6,7,8,9,10];
	
		if (operation === 'multiply')
		{	
			
			for(var i = 0; i < numSetOne.length; i++){
				console.log("Multi: " +i);
				console.log("Remove Before: " + document.querySelector("ul").childNodes.length);
				
				removeStuff();
				//assign operands
				var numOne = numSetOne[Math.floor((Math.random() * 5))];
				var numTwo = numSetTwo[Math.floor((Math.random() * 5))];
		
				var newItem = document.createElement('li');
		
				var newText = document.createTextNode(numOne + ' ' +  '*' + ' ' + numTwo + ' ' + '=' + ' ' + calculateNum(numOne, numTwo, '*'));
		
				newItem.appendChild(newText);
		
				var position = document.querySelector("ul");

				position.appendChild(newItem);
			}
			
		
		} else if (operation === 'divide'){
	
			for(var i = 0; i < numSetOne.length; i++){
				
				removeStuff();
				//assign operands
				var numOne = numSetOne[Math.floor((Math.random() * 5))];
				var numTwo = numSetTwo[Math.floor((Math.random() * 5))];
		
				var newItem = document.createElement('li');
		
				var newText = document.createTextNode(numOne + ' ' +  '/' + ' ' + numTwo + ' ' + '=' + ' ' + calculateNum(numOne, numTwo, '/'));
		
				newItem.appendChild(newText);
		
				var position = document.querySelector("ul");

				position.appendChild(newItem);
			}
	
		} else if (operation === 'add'){
	
			for(var i = 0; i < numSetOne.length; i++){
				
				removeStuff();
				//assign operands
				var numOne = numSetOne[Math.floor((Math.random() * 5))];
				var numTwo = numSetTwo[Math.floor((Math.random() * 5))];
		
				var newItem = document.createElement('li');
		
				var newText = document.createTextNode(numOne + ' ' +  '+' + ' ' + numTwo + ' ' + '=' + ' ' + calculateNum(numOne, numTwo, '+'));
		
				newItem.appendChild(newText);
		
				var position = document.querySelector("ul");

				position.appendChild(newItem);
			}
	
		} else {
	
			for(var i = 0; i < numSetOne.length; i++){
				
				removeStuff();
				//assign operands
				var numOne = numSetTwo[Math.floor((Math.random() * 5))];
				var numTwo = numSetOne[Math.floor((Math.random() * 5))];
		
				var newItem = document.createElement('li');
		
				var newText = document.createTextNode(numOne + ' ' +  '-' + ' ' + numTwo + ' ' + '=' + ' ' + calculateNum(numTwo, numOne, '-'));
		
				newItem.appendChild(newText);
		
				var position = document.querySelector("ul");

				position.appendChild(newItem);
			}
		}
	}
	
	
	//do the actual math
	function calculateNum(_numOne, _numTwo, _op){
		
		if (_op === '*'){
			
			var answer = _numOne * _numTwo;
			return answer;
			
		} else if (_op === '/'){
		
			var answer = (_numOne / _numTwo).toFixed(2);
			return answer;
			
		} else if (_op === '+'){
		
			var answer = _numOne + _numTwo;
			return answer;
		
		} else {
		
			var answer = _numTwo - _numOne;
			return answer;
		
		}
	
	}
	
	function removeStuff () {
		
		for (var i = 0; i < document.querySelector("ul").childNodes.length; i++){
			var list = document.querySelector("ul");
			list.removeChild(list.childNodes[i]);
		}	
		
	}

}());