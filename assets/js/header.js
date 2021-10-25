// Nav links
const navLinks = document.querySelectorAll(".nav-link"),
home = navLinks[0],
presentation = navLinks[1];
navLinks.forEach(function(btn) {
	btn.addEventListener("click", function() {
		if (this.classList.contains("presentation")) {
			// The user clicked on the Presentation link
			home.classList.remove("active");
			presentation.classList.add("active")
		}
		if (this.classList.contains("home")) {
			// The user clicked on the Home link
			presentation.classList.remove("active");
			home.classList.add("active")
		}
	})
})

if (window.location.hash) {
	// There is an anchor in the URL
	let hash = window.location.hash.length;
	
}