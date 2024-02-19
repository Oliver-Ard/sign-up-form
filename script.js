const form = document.querySelector(".sign-up-form");
const passwordInput = document.querySelector("#user-password");
const passwordInput2 = document.querySelector("#user-conf-password");
const errorMsg = document.querySelector(".error-input");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	validatePassword();
});

function validatePassword() {
	const passwordValue = passwordInput.value;
	const passwordValue2 = passwordInput2.value;

	if (passwordValue !== passwordValue2) {
		errorMsg.textContent = "*Passwords do not match";
		passwordInput.classList.add("error");
		passwordInput2.classList.add("error");
	} else {
		errorMsg.textContent = "";
		passwordInput.classList.remove("error");
		passwordInput2.classList.remove("error");
	}
}
