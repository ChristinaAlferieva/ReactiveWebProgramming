//Problem 1 and 3

var node_list = document.getElementsByTagName("note_details");
var list = document.querySelector('ul');
var close = document.getElementsByClassName("close");
var addBtn = document.getElementsByClassName("add_button");
var clearBtn = document.getElementById("clear_notes");
var i = 0;

//Add button on click
const clicked = Rx.Observable.fromEvent(addBtn, 'click');

//Array to map onto nodes with map
array = Array.from(node_list);
object = array.map(index => {
	var text = document.createTextNode("\u00D7");
	var span = document.createElement("SPAN");
	span.className = "close";
	span.appendChild(text);
	node_list[i].appendChild(span);
	i++;
});