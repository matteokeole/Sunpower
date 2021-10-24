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
	})
})