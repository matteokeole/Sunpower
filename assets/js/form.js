const Form = {
	companies: document.querySelector("form.companies"),
	communities: document.querySelector("form.communities"),
	individuals: document.querySelector("form.individuals")
},
setError = function(input, message) {
	input.parentNode.classList.add("error");
	input.nextElementSibling.innerText = message;
	input.nextElementSibling.style.opacity = 1
},
removeError = function(input) {
	input.parentNode.classList.remove("error")
	input.nextElementSibling.style.opacity = 0
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
		}
		// Number inputs
		else if (inputs[i].classList.contains("nb") && isNaN(inputs[i].value)) setError(inputs[i], "Veuillez entrer une valeur numérique");
		else if (inputs[i].name === "phoneNumber" && inputs[i].value.length !== 10) setError(inputs[i], "Veuillez entrer un numéro de téléphone valide");
		else if (inputs[i].name === "postalCode" && inputs[i].value.length !== 5) setError(inputs[i], "Veuillez entrer un code postal valide");
		else verifiedInputs++
	}
	console.log(verifiedInputs)
	if (verifiedInputs === inputs.length) {
		// Form submission confirmation
		// Hide form modal
		e.target.parentNode.parentNode.querySelector(".modal-header .btn-close").click();
		document.querySelector(".confirmation").style.display = "block"
	}
};

// Form submission verification
Form.companies.addEventListener("submit", handleForm);
Form.communities.addEventListener("submit", handleForm);
Form.individuals.addEventListener("submit", handleForm);
document.querySelectorAll("form input").forEach(function(input) {
	input.addEventListener("keydown", function() {removeError(this)})
})