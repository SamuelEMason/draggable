function dragstart_handler(e) {
	
	// Add the target element's id to the data transfer object
	e.dataTransfer.setData('application/my-app', e.target.id);
	e.dataTransfer.effectAllowed = 'move';
	e.target.style.opacity = 1;
}

function drag_handler(e) {
	e.preventDefault();
	e.target.style.opacity = 1;
	e.target.style.border = 'none';
}

function dragend_handler(e) {
	e.preventDefault();
	this.style.opacity = 1;
}

function dragover_handler(e) {
	e.preventDefault();
	e.dataTransfer.dropEffect = 'move';
}

function drop_handler(e) {
	e.preventDefault();
	// Get the id of the target and add the moved element to the target's DOM
	const data = e.dataTransfer.getData("application/my-app");
	e.target.appendChild(document.getElementById(data));
}

let item = document.querySelector('#red');
let container1 = document.querySelector('#container1');
let container2 = document.querySelector('#container2');

item.addEventListener('dragstart', dragstart_handler);
item.addEventListener('drag', drag_handler);
item.addEventListener('dragend', dragend_handler);

container1.addEventListener('drop', drop_handler);
container2.addEventListener('drop', drop_handler);