const form = document.querySelector("form");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const inputPassword = document.querySelector("#password");
const inputConfirmPassword = document.querySelector("#confirm-password")
const submitBtn = document.querySelector("button");



//##### function click one label or inputfield ######

labels.forEach ((label) => {
    const input = label.querySelector("input");

    label.addEventListener("click", () =>{
        input.focus();
    });

}); 


//######### checks value and validate password #######

 submitBtn.disabled = true;

const checkIfInputHasValue = () => {
    const allFilled = Array.from(inputs).every(input => input.value !== "");

    if (allFilled) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
};

const validatePasswords = () => {

    const password = inputPassword.value;
    const confirmPassword = inputConfirmPassword.value;

     inputPassword.classList.remove("error", "valid");
     inputConfirmPassword.classList.remove ("error", "valid");

    if (password.length < 8 ){

        inputPassword.classList.add("error");
        submitBtn.disabled = true;
    
    } else {

        inputPassword.classList.add ("valid");
    }

    if (password !== confirmPassword){
        inputConfirmPassword.classList.add("error");
        submitBtn.disabled=true;
        
        
    } else {
        inputConfirmPassword.classList.add("valid");
    }
    checkIfInputHasValue();
};


inputPassword.addEventListener("input", validatePasswords);
inputConfirmPassword.addEventListener("input", validatePasswords);

inputs.forEach(input => {
    input.addEventListener("input", checkIfInputHasValue);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.querySelector("#name");
    const usernameInput = document.querySelector ("#username");
    const emailInput = document.querySelector ("#email");



const registrationData = {
    name: nameInput.value.trim(),
    username: usernameInput.value.trim(),
    email: emailInput.value.trim(),
    password: inputPassword.value,
};


console.log(JSON.stringify(registrationData, null, 2));

form.reset();

inputPassword.classList.remove("valid");
inputConfirmPassword.classList.remove("valid");
});

