

let elModalWrapper = document.querySelector(".modal-wrapper")
let elModalInner = document.querySelector(".modal-inner")
let elNumText = document.querySelector(".number-text")

JSON.parse(localStorage.getItem("edit-form")) 

function handleEditClickBtn(){
    elModalWrapper.classList.remove("scale-0")
    elModalInner.innerHTML = `
        <form class ="edit-form w-[490px] mx-auto">
            <h2 class="text-[50px] font-samibold text-[#009398]">Телефонный номер</h2>
            <label class="w-[350px] ml-[50px] flex flex-col mx-auto mt-[55px]">
                <input class="number-input bg-zinc-300 p-3 rounded-lg mt-2 outline-none focus:shadow focus:shadow-zinc-900" type="tel" placeholder="Номер " name="number" autocomplete="off" required>
            </label>
            <button type ="submit" class = "inline-block ml-[100px] mt-[50px] w-[247px] py-[8px] bg-[#009398] rounded-[30px] text-[25px] font-bold text-white leading-[29px]">Изменить</button>
        </form>
    `
    let elEditForm = document.querySelector(".edit-form")
    elEditForm.addEventListener("submit", function(e){
        e.preventDefault()
        const data = {
            number:e.target.number.value
        }
        elNumText.textContent = data.number
        elModalWrapper.classList.add("scale-0")
        localStorage.setItem("edit-form", JSON.stringify(data.number))
    })
   
}



// modal start 
elModalWrapper.addEventListener("click", function(e){
    if(e.target.id == "modal-wrapper") elModalWrapper.classList.add("scale-0")
})