let elLoginForm = document.querySelector(".login-form")
const isRegistered = JSON.parse(localStorage.getItem("isRegistered")) 
elLoginForm.addEventListener("submit", function(e){
    e.preventDefault() // refreshni odini oladi
    const date = {
        username:e.target.username.value,
        password:e.target.password.value
    }
    if(isRegistered){
        if(date.username == isRegistered.nenewUsername && date.password == isRegistered.newPassword){
            elLoginForm.lastElementChild.innerHTML = `
                <img class ="mx-auto scale-[1.4]" src="../images/loading-img.png" alt="" width="40" >
            `  
            localStorage.setItem("loginDate", JSON.stringify(date))
            setTimeout(() => {
                location.pathname = "../../admin.html"
            }, 800);
           
        }
        else{
            alert("u got a problem !!!")
        }
    }
    else{
        if(date.username == "mohirjon" && date.password == "123"){
            elLoginForm.lastElementChild.innerHTML = `
                <img class ="mx-auto scale-[1.4]" src="../images/loading-img.png" alt="" width="40" >
            `  
            localStorage.setItem("loginDate", JSON.stringify(date))
            setTimeout(() => {
                location.pathname = "../../admin.html"
            }, 800);
           
        }
        else{
            alert("u got a problem !!!")
        }
    }
})
