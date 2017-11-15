var inputElem = document.getElementById('addElem'),
	list = document.getElementById('list');

inputElem.addEventListener('click', function() {
	var element = document.createElement('li'),
		liItems = document.getElementsByTagName('li');
	element.innerHTML = 'item ' + liItems.length;
	list.appendChild(element);
});
