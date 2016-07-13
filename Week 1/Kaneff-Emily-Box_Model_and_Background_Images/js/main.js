console.log('this works');

var selectedElements = document.querySelectorAll('section');

console.log(selectedElements);

for (var i=0; i<selectedElements.length; i++)
{
	selectedElements[i].className = 'gradient';
}
