let elRegisterForm = document.querySelector(".register-form")

elRegisterForm.addEventListener("submit", function(e){
    e.preventDefault()
    const newDate = {
        newUsername: e.target.username.value,
        newPassword: e.target.password.value
    }
    elRegisterForm.lastElementChild.innerHTML = `
        <img class ="mx-auto scale-[1.4]" src="../images/loading-img.png" alt="" width="40" >
    `  
    localStorage.setItem("isRegistered", JSON.stringify(newDate))
    setTimeout(() => {
        location.pathname = "/"
    }, 800);
})