const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");
var sectionIndex = 0;

function setIndex() {
	slider.style.transform = "translate( " + sectionIndex * -16.67 + "%)";
	document.querySelector(".controls .selected").classList.remove("selected");
}

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
	indicator.addEventListener("click", function () {
		sectionIndex = ind;
		setIndex();
		indicator.classList.add("selected");
	});
});

rightArrow.addEventListener("click", function () {
	sectionIndex = sectionIndex < 5 ? sectionIndex + 1 : 5;
	setIndex();
	indicatorParents.children[sectionIndex].classList.add("selected");
});

leftArrow.addEventListener("click", function () {
	sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
	setIndex();
	indicatorParents.children[sectionIndex].classList.add("selected");
});
