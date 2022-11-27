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

//Array for close element
closeArray = Array.from(close);
closeObject = closeArray.map(index => {
	const clsSource = Rx.Observable.fromEvent(close[i], 'click');
	clsSource.subscribe(event => {
		var section = clsSource.sourceObj.parentElement;
		section.style.display = "none"; 
	});
	i++;
});

//Subscribing the observable when add note button clicked
clicked.subscribe(event => {
	if(document.title !== 'Note-taking App'){
		subscribe.error("It's the wrong page!");
	};

	var li = document.createElement("li");
	console.log("Button 'Add Note' clicked");

	var noteDesc = document.getElementById("description").value;
	var desc = document.createTextNode(noteDesc);
	li.appendChild(desc);

	//If nothing entered into the description box
	if(noteDesc === '') {
		alert("The description is blank!");
	}
	else {
		document.getElementById("notes_list").appendChild(li);
	};

	document.getElementById("description").value = "";

	//Sorting x beside each note
	var x = document.querySelectorAll("li");
	var span = document.createElement("SPAN");
	var text = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(text);
	li.appendChild(span);

	var i = 0;
	arrayClose = Array.from(close);
	objectClose = arrayClose.map(index => {
		const closeSrc = Rx.Observable.fromEvent(close[i], 'click');
		closeSrc.subscribe(event => {
			var section = closeSrc.sourceObj.parentElement;
			section.style.display = "none";
		});
		i++;
	});
});

//Clears list when clear notes button is clicked
const clearSrc = Rx.Observable.fromEvent(clearBtn, 'click');

clearSrc.subscribe(event => {
	var note = document.getElementsByTagName("ul");
	note[0].innerHTML = "";
});