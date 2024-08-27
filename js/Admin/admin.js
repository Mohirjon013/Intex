
let elTitle1 = document.querySelector(".frame-item")
let elTitle2 = document.querySelector(".inflatable-item")

elTitle1.addEventListener("click", function(){
    elTitle1.className = "frame-item font-bold text-[35px] leading-[40px] text-[#009398] pb-[8px] border-b-[3px] border-[#009398] cursor-pointer"
    elTitle2.className = "inflatable-item font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-transparent cursor-pointer"
})

elTitle2.addEventListener("click", function(){
    elTitle2.className = " inflatable-item font-bold text-[35px] leading-[40px] text-[#009398] pb-[8px] border-b-[3px] border-[#009398] cursor-pointer"
    elTitle1.className = "frame-item font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-transparent cursor-pointer"
})


let elPersonDate = document.querySelector(".person-date")
const loginDate = JSON.parse(localStorage.getItem("loginDate"))
elPersonDate.textContent = loginDate.username.toUpperCase()
