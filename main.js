const inputs = document.querySelectorAll('input');

for (let element of inputs) {
	element.addEventListener('blur', function () {
  	this.dataset.blur = true;
  });
}