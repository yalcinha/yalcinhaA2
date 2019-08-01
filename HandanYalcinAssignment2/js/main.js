// Constants
const username = "yalcinha";


// State Class & Instance
class State {
    constructor() {
	this.getState()
	    .then(data => {
		console.log("data", data);
		this.planets = data.solarSystem.planets;
		updateUI(this.planets);
	    })
	    .catch(err => {
		console.log("err", err);
		return [];
	    });
    }
    getState() {
	return $.get("data/A2_planets.json", function(data) {
	}, "json");
    }
}

var state = new State();


// UI Functions

const updateUI = (data) => {
    console.log("data: ", data);
    var ul = document.querySelector("main ul");
    data.forEach((elt, i) => {
	// console.log("elt: ", elt);
	let li = document.createElement("li");
	li.setAttribute("id", i);
	li.addEventListener('click', handler);
	let a = document.createElement("a");
	a.textContent = elt.planetName;
	let img = document.createElement("img");
	img.src = `images/planets/${elt.image}`;
	a.appendChild(img);
	li.appendChild(a);
	ul.appendChild(li);
    });
}

function handler(event) {
    saveData(state.planets, this.id);
    window.location = "planet.html";
}

function saveData(data, user_selection_id) {
    window.localStorage.setItem(`${username}-planets`, JSON.stringify(data));
    window.localStorage.setItem(`${username}-user_selection_id`, user_selection_id);
}
