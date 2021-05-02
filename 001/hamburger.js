const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("effect");
	hamburger.classList.remove("default");
});