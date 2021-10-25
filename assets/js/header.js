// Active nav links
const navLinks = document.querySelectorAll(".nav-link"),
home = navLinks[0],
presentation = navLinks[1],
checkHash = function() {
	if (window.location.hash) {
		// Presentation anchor
		home.classList.remove("active");
		presentation.classList.add("active")
	} else {
		// Home anchor
		presentation.classList.remove("active");
		home.classList.add("active")
	}
};

// Events listeners
window.addEventListener("load", checkHash);
window.addEventListener("hashchange", checkHash)