const ratio = 0.1,
options = {
	rootMargin: "0px",
	threshold: 0.1
},
handleIntersect = function(entries, observer) {
	entries.forEach(function(entry) {
		if (entry.intersectionRatio > ratio) {
			entry.target.classList.add("reveal-visible");
			observer.unobserve(entry.target)
		}
	})
},
observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll(".reveal").forEach(function(r) {observer.observe(r)})