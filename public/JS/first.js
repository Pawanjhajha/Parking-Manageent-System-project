
let eye = document.getElementById('eye')
eye.addEventListener("click", () => {
    let a = document.getElementById("pass")
    if (a.type === "password") {
        a.type = "text";
        eye.classList.add("bi-eye")
        eye.classList.remove("bi-eye-slash")
    } else {
        a.type = "password"
        eye.classList.add("bi-eye-slash")
        eye.classList.remove("bi-eye")
    }
})