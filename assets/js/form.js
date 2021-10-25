const Form = {
	companies: document.querySelector("form.companies")/*,
	communities: document.querySelector("form.communities"),
	individuals: document.querySelector("form.individuals")*/
},
handleForm = function(e) {
	e.preventDefault();
	console.log("lol")
};

// Form submission verification
Form.companies.addEventListener("submit", handleForm);
// Form.communities.addEventListener("submit", handleForm);
// Form.individuals.addEventListener("submit", handleForm)