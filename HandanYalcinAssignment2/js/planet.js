const username = "yalcinha";

// get state from the localStorage back
var state = {
    planets: JSON.parse(window.localStorage.getItem(`${username}-planets`)),
    user_selection_id: JSON.parse(window.localStorage.getItem(`${username}-user_selection_id`)),
}

function updateUI(data) {
    var main = document.querySelector("main");
    setBackground(main, data.planets[data.user_selection_id].image);
    setContent(main, data.planets[data.user_selection_id]);
}

function setBackground(elt, data) {
    elt.style.background = `url(images/planets/${data}) no-repeat center`;
    elt.style.backgroundSize = "cover";
}

function setContent(elt, data) {
    delete data.image;
    Object.keys(data).forEach((key) => {
	if (typeof data[key] === "object") {
	    Object.keys(data[key]).forEach(key1 => {
		let p = document.createElement("p");
		p.innerHTML = `<span class="label">${key1}: </span><span class="info">${data[key][key1]}</span>`;
		console.log(key1, data[key][key1]);
		// p.textContent = data[key][key1];
		elt.appendChild(p);
	    })
	} else {
	    let p = document.createElement("p");
	    p.innerHTML = `<span class="label">${key}: </span><span class="info">${data[key]}</span>`;
	    // p.textContent = data[key];
	    elt.appendChild(p);
	}
    })
}


updateUI(state);
