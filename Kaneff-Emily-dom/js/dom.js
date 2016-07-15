(function() {

	//new element at end of list

	var newLastItem = document.createElement('li');

	var itemText = document.createTextNode('Oranges');

	newLastItem.appendChild(itemText);

	var position = document.querySelector('ul');

	position.appendChild(newLastItem);

	//new item at beginning of list

	var firstItem = document.createElement('li');

	var firstItemText = document.createTextNode('Fruit Juice');

	firstItem.appendChild(firstItemText);

	var list = document.querySelector('ul');

	list.insertBefore(firstItem, list.childNodes[0]);

	//adding a class
	var items = document.querySelectorAll('li');

	if (items.length > 0) {
		for (var i = 0; i < items.length; i++){
			items[i].className = 'items';
		}
	}

	var itemCount = document.querySelector('h2');
	itemCount.innerHTML = 'Total Items: ' + items.length;
	
	//changing items to purchased
	var thirdItem = items[2];
	thirdItem.removeAttribute('class');
	thirdItem.className= 'purchased';

}());