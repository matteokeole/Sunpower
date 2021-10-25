// Banner color (--primary) and blur amount on scroll
const header = document.querySelector("header");
let windowHeight = window.innerHeight,
scrollAmount = window.scrollY / windowHeight;
header.style.backgroundColor = `rgba(164, 189, 1, ${scrollAmount})`; // Set the color and blur on load

// Event listeners
window.addEventListener("resize", function() {windowHeight = this.innerHeight});
window.addEventListener("scroll", function() {
	scrollAmount = this.scrollY / windowHeight;
	header.style.backgroundColor = `rgba(164, 189, 1, ${scrollAmount})`;
	header.style.backdropFilter = `blur(${scrollAmount * 10}px)`;
	header.style["-webkit-backdrop-filter"] = `blur(${scrollAmount * 10}px)`
})