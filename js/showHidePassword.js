export function showHidePassword() {
    const passField = document.querySelector(".form .form-block input[type='password']")
    let toggleBtn = document.querySelector(".form .form-block i")

    toggleBtn.onclick = () => {
        if(passField.type === "password") {
            passField.type = "text";
            passField.classList.add("active");
            toggleBtn.classList.add("active");
        } else {
            passField.type = "password";
            passField.classList.remove("active");
            toggleBtn.classList.remove("active");
        }
    }
}