let elForm = document.querySelector(".login-form")
let elFormBtn = elForm.lastElementChild

const isRegister  = JSON.parse(localStorage.getItem("isRegister"))

elForm.addEventListener("submit", function(e){
    e.preventDefault()
    const data = {
        username:e.target.username.value,
        password:e.target.password.value
    }
    
    if(isRegister){
        if(data.username == isRegister.newUsername && data.password == isRegister.newPassword){
            localStorage.setItem("loginData", JSON.stringify(data))
            elFormBtn.innerHTML = `<img class="mx-auto scale-[1.2]" src="./images/loading.png" alt="loading" width="30">`
            setTimeout(() => {
                location.pathname = "../../admin.html"
            }, 1000);            
            e.target.reset()
        }
        else{
            alert("wrong username or password !!!")
        }
    }

    else{
        if(data.username == "mohir" && data.password == "123"){
            localStorage.setItem("loginData", JSON.stringify(data))
            elFormBtn.innerHTML = `<img class="mx-auto scale-[1.2]" src="./images/loading.png" alt="loading" width="30">`
            setTimeout(() => {
                location.pathname = "../../admin.html"
            }, 1000);
            e.target.reset()
        }
        else{
            alert("wrong username or password !!!")
        }
    }
    
})

