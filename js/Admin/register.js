let elRegisterForm = document.querySelector(".register-form")
let elRegisterFromBtn = elRegisterForm.lastElementChild

elRegisterForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newData = {
        newUsername:e.target.username.value,
        newPassword:e.target.password.value
    }
    localStorage.setItem("isRegister", JSON.stringify(newData))
    elRegisterFromBtn.innerHTML = `<img class="mx-auto scale-[1.2]" src="./images/loading.png" alt="loading" width="30">`
    setTimeout(() => {
        location.pathname = "/"
    }, 1000);
    e.target.reset()
})
