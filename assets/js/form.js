const Form = {
	companies: document.querySelector("form.companies"),
	communities: document.querySelector("form.communities"),
	individuals: document.querySelector("form.individuals")
},
textInputRegex = /^[a-zA-ZÀ-ú- ]+$/,
errorMessages = {
	emptyValue: "Veuillez renseigner ce champ",
	nonNumericValue: "Veuillez entrer une valeur numérique",
	nonAlphabeticValue: "Seuls les majuscules, les minuscules, le tiret (-) et les espaces sont autorisés",
	invalidPhone: "Veuillez entrer un numéro de téléphone valide",
	invalidPostal: "Veuillez entrer un code postal valide"
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
			setError(inputs[i], errorMessages.emptyValue)
		}
		// Text inputs
		else if (inputs[i].name === "lastName" && !(textInputRegex.test(inputs[i].value))) setError(inputs[i], errorMessages.nonAlphabeticValue);
		else if (inputs[i].name === "firstName" && !(textInputRegex.test(inputs[i].value))) setError(inputs[i], errorMessages.nonAlphabeticValue);
		else if (inputs[i].name === "city" && !(textInputRegex.test(inputs[i].value))) setError(inputs[i], errorMessages.nonAlphabeticValue);
		// Number inputs
		else if (inputs[i].classList.contains("nb") && isNaN(inputs[i].value)) setError(inputs[i], errorMessages.nonNumericValue);
		else if (inputs[i].name === "phoneNumber" && inputs[i].value.length !== 10) setError(inputs[i], errorMessages.invalidPhone);
		else if (inputs[i].name === "postalCode" && inputs[i].value.length !== 5) setError(inputs[i], errorMessages.invalidPostal);
		else verifiedInputs++
	}
	if (verifiedInputs === inputs.length) {
		// Form submission confirmation
		e.target.parentNode.parentNode.querySelector(".modal-header .btn-close").click(); // Hide form modal
		document.querySelector(".confirmation").style.display = "block"; // Show confirmation message
		setTimeout(function() {window.scrollTo(0, 0)}, 200) // Scroll to the top of the page
	}
};

// Form submission verification
Form.companies.addEventListener("submit", handleForm);
Form.communities.addEventListener("submit", handleForm);
Form.individuals.addEventListener("submit", handleForm);
document.querySelectorAll("form input").forEach(function(input) {
	input.addEventListener("keydown", function() {removeError(this)})
})