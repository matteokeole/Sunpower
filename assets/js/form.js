const Form = {
	companies: document.querySelector("form.companies")/*,
	communities: document.querySelector("form.communities"),
	individuals: document.querySelector("form.individuals")*/
},
setError = function(input, message) {
	input.classList.add("error");
	console.log(message)
},
removeError = function(input) {
	input.classList.remove("error")
},
handleForm = function(e) {
	e.preventDefault();
	let inputs = e.target.querySelectorAll("input:not(.optional)"),
	verifiedInputs = 0;
	for (let i = 0; i < inputs.length; i++) {
		// Remove error on all inputs before the verification
		removeError(inputs[i]);
		// Input verification
		if (inputs[i].value.length === 0) {
			// Value length
			setError(inputs[i], "Veuillez renseigner ce champ")
		} else {
			verifiedInputs++
		}
	}
	if (verifiedInputs === inputs.length) e.target.submit()
};

// Form submission verification
Form.companies.addEventListener("submit", handleForm);
// Form.communities.addEventListener("submit", handleForm);
// Form.individuals.addEventListener("submit", handleForm)
document.querySelectorAll("form input").forEach(function(input) {
	input.addEventListener("keydown", function() {removeError(this)})
})