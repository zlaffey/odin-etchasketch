console.log("connected");

const container = document.querySelector(".container");

function createGrid(size) {
	for (let i = 0; i < size * size; i++) {
		const square = document.createElement("div");
		square.classList.add("square");

		container.appendChild(square);

		square.addEventListener("mouseenter", function (event) {
			event.target.style.background = "purple";
		});
	}
}

createGrid(12);

function clearGrid() {
	container.innerHTML = "";
}
// for (let i = 0; i < 256; i++) {
//     const square = document.createElement("div");
//     square.classList.add("square");

//     container.appendChild(square);

//     square.addEventListener("mouseenter", function (event) {
//         event.target.style.background = "purple";
//     });
// }

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
	let input = prompt("how big?");
	if (input > 100) {
		alert("try a smaller number!");
	} else {
		clearGrid();
		createGrid(input);
	}
});
