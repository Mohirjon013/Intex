let elTitle1 = document.querySelector(".karkasniy-title")
let elTitle2 = document.querySelector(".naduvniy-title")

let elModalWrapper = document.querySelector(".modal-wrapper")
let elModalInner = document.querySelector(".modal-inner")

let elProductRenderTbody = document.querySelector(".render-product-here")

let isLoginData = JSON.parse(localStorage.getItem("loginData"))

let elUserFullName = document.querySelector(".user-full-name")
elUserFullName.textContent = isLoginData.username.toUpperCase()

let elPopUpList = document.querySelector(".popup-list")
let elSearchInput = document.querySelector(".search-input")


let product = JSON.parse(localStorage.getItem("products")) || []

// active hover start 
elTitle1.addEventListener("click", (e) =>{
    elTitle1.className = "karkasniy-title text-[35px] font-bold text-[#009398] border-b-[3px] border-b-[#009398] cursor-pointer"
    elTitle2.className = "naduvniy-title text-[35px] font-bold text-[#A6A6A6] border-b-[3px] border-b-transparent cursor-pointer"
    renderProduct(product, "1")
})
elTitle2.addEventListener("click", (e) =>{
    elTitle2.className = "naduvniy-title text-[35px] font-bold text-[#009398] border-b-[3px] border-b-[#009398] cursor-pointer"
    elTitle1.className = "karkasniy-title text-[35px] font-bold text-[#A6A6A6] border-b-[3px] border-b-transparent cursor-pointer"
    renderProduct(product, "2")

})
// active hover start 


// modal start
elModalWrapper.addEventListener("click", (e) => {
    if(e.target.id == "modal-wrapper"){
        elModalWrapper.classList.add("scale-0")
    }
})
// modal end


// add product start 
function handleAddProductBtn(){
    elModalWrapper.classList.remove("scale-0")
    elModalInner.innerHTML = `
    <form class="add-form">
        <img class="absolute top-[40px] right-[20px] cursor-pointer hover:scale-125 duration-400" src="./images/close-icon.svg" alt="empty" width="35" height="35">
        <label class="">
            <input class="choosen-input hidden" type="file" />
            <img class="choosen-img mx-auto" src="./images/empty-img.png" alt="empty" width="80%" height="316">
        </label>
        <div class="flex justify-between mt-5" >
            <div class="w-[49%] space-y-[20px]">
                <label class="flex flex-col">
                    <span class="text-[23px] text-[#898989] mb-[10px]">Категории</span>
                    <select class="p-3 text-[28px] color-[#545454] rounded-lg bg-white border-[2px] border-neutral-400 focus:shadow focus:duration-400 focus:shadow-[0px_0px_7px_0px_#00000040] outline-none" name="productCategory">
                        <option value="1">Каркасные</option>
                        <option value="2">Надувные</option>
                    </select>
                    
                </label>
                <label class="flex flex-col">
                    <span class="text-[23px] text-[#898989] mb-[10px]">Рамка</span>
                    <select class="p-3 text-[28px] color-[#545454] rounded-lg bg-white border-[2px] border-neutral-400 focus:shadow focus:duration-400 focus:shadow-[0px_0px_7px_0px_#00000040] outline-none" name="productFrame">
                        <option value="1">Металлический</option>
                        <option value="2">Прямоугольная</option>
                        <option value="3">Рамка призмы</option>
    
                    </select>
                </label>
                <label class="flex flex-col">
                    <span class="text-[23px] text-[#898989] mb-[10px]">	Количество</span>
                    <input class="p-3 text-[28px] color-[#545454] rounded-lg bg-white border-[2px] border-neutral-400 focus:shadow focus:duration-400 focus:shadow-[0px_0px_7px_0px_#00000040] outline-none" type="text" name="productQuantity" placeholder="Количество" autocomplete="off" required>
                </label>
            </div>
            <div class="w-[49%] space-y-[20px]">
                <label class="flex flex-col">
                    <span class="text-[23px] text-[#898989] mb-[10px]">Стартая цена (сум) </span>
                    <input class="p-3 text-[28px] color-[#545454] rounded-lg bg-white border-[2px] border-neutral-400 focus:shadow focus:duration-400 focus:shadow-[0px_0px_7px_0px_#00000040] outline-none" type="number" name="productCost" placeholder="Стартая цена" autocomplete="off" required>
                </label>
                <label class="flex flex-col">
                    <span class="text-[23px] text-[#898989] mb-[10px]">Цена со скидкой (сум) </span>
                    <input class="p-3 text-[28px] color-[#545454] rounded-lg bg-white border-[2px] border-neutral-400 focus:shadow focus:duration-400 focus:shadow-[0px_0px_7px_0px_#00000040] outline-none" type="number" name="productDiscount" placeholder="Цена со скидкой" autocomplete="off" required>
                </label>
            </div>
        </div>
        <button type="submit" class="add-btn w-full inline-block p-3 mt-8 rounded-[17px] font-bold text-[25px] text-white bg-[#009398] border-[2px] border-transparent hover:text-[#009398] hover:bg-transparent hover:border-[#009398] duration-500 cursor-pointer">Добавить</button>
    </form>
    `
    
    let elAddForm = document.querySelector(".add-form")
    let elAddBtn = document.querySelector(".add-btn")
    
    let elChoosenInput = document.querySelector(".choosen-input")
    let elChoosenImg = document.querySelector(".choosen-img")
    
    elChoosenInput.addEventListener("change", function(e){
        elChoosenImg.src = URL.createObjectURL(e.target.files[0])
        elChoosenImg.className = "mx-auto bg-white p-3 rounded-lg border-[1px] border-grey-500 shadow-[0_0px_11px_0px_#00000040] object-cover"
    })
    
    
    elAddForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const data = {
            id:product.length ? product[product.length - 1].id + 1 : 1,
            categoryId: e.target.productCategory.value,
            frame:e.target.productFrame.value,
            quantity:e.target.productQuantity.value,
            discount:e.target.productDiscount.value,
            cost:e.target.productCost.value,
            img:elChoosenImg.src
        }
        product.push(data)
        elAddBtn.innerHTML = `
            <img class="mx-auto scale-[1.2]" src="./images/loading.png" alt="loading" width="30">
        `
        setTimeout(() => {
            elModalWrapper.classList.add("scale-0")
            if(data.categoryId == "1"){
                elTitle1.className = "karkasniy-title text-[35px] font-bold text-[#009398] border-b-[3px] border-b-[#009398] cursor-pointer"
                elTitle2.className = "naduvniy-title text-[35px] font-bold text-[#A6A6A6] border-b-[3px] border-b-transparent cursor-pointer"
            }
            else{
                elTitle2.className = "naduvniy-title text-[35px] font-bold text-[#009398] border-b-[3px] border-b-[#009398] cursor-pointer"
                elTitle1.className = "karkasniy-title text-[35px] font-bold text-[#A6A6A6] border-b-[3px] border-b-transparent cursor-pointer"
            }
            renderProduct(product, data.categoryId)
        }, 1000);
        localStorage.setItem("products", JSON.stringify(product))
    })
}
// add product end 


// render start 
function renderProduct(arr, categoryId){
    elProductRenderTbody.innerHTML = null
    const filteredProduct = arr.filter(item => item.categoryId == categoryId)
    filteredProduct.forEach(item => {
        let elProductRow = document.createElement("tr")
        elProductRow.className = "bg-white"
        elProductRow.innerHTML = `
            <td class="rounded-l-[30px] py-[7px]">
                <img class="mx-auto" src="${item.img}" alt="pool" width="97" height="55">
            </td>
            <td class="">
                <span class="text-[12px] text-[#848484] relative before:absolute before:w-full before:h-[1px] before:bg-[#FF0000] before:inset-0 before:my-auto before:rotate-[5deg] ">${item.cost}</span>
                <br>
                <span class="text-[20px] font-semibold text-black">${item.discount}</span>
            </td>
            <td class="text-[20px] font-semibold text-black">
                ${item.quantity}
            </td>
            <td class="text-[20px] font-semibold text-black">
                ${item.frame == "1" ? "Металлический" : ""}
                ${item.frame == "2" ? "Прямоугольная" : ""}
                ${item.frame == "3" ? "Рамка призмы" : ""}

            </td>
            <td class="space-x-[21px] rounded-r-[30px]">
                <button class="cursor-pointer hover:scale-150 duration-400">
                    <img src="./images/edit-icon.svg" alt="edit-icon" width="16" height="18">
                </button>
                <button onclick="handleDeleteBtn(${item.id})" class="cursor-pointer hover:scale-150 duration-400">
                    <img src="./images/delete-icon.svg" alt="delete-icon" width="16" height="18">
                </button>
            </td>
        `
        elProductRenderTbody.appendChild(elProductRow)
    });
}
renderProduct(product, "1")
// render end 


// delete start 

function handleDeleteBtn(id){
    elModalWrapper.classList.remove("scale-0")
    elModalInner.innerHTML = `
        <h2 class="font-bold text-[35px] text-slate-500 text-center">Вы хотите удалить это?</h2>
        <div>
            <button onclick="handleCancelBtn()" type="button" class=" w-[48%] inline-block p-3 mt-8 rounded-[17px] font-bold text-[25px] text-white bg-[#009398] border-[2px] border-transparent hover:text-[#009398] hover:bg-transparent hover:border-[#009398] duration-500 cursor-pointer">Отмена</button>
            <button onclick="handleSureDeleteBtn(${id})" type="button" class=" w-[48%] inline-block p-3 mt-8 rounded-[17px] font-bold text-[25px] text-white bg-red-600 border-[2px] border-transparent hover:text-red-600 hover:bg-transparent hover:border-red-600 duration-500 cursor-pointer">Да</button>
        </div>
    `
    
}
function handleCancelBtn(){
    elModalWrapper.classList.add("scale-0")
}
function handleSureDeleteBtn(id){
    const findedIndexProduct = product.findIndex(item => item.id == id)
    product.splice(findedIndexProduct, 1)
    elModalWrapper.classList.add("scale-0")
    renderProduct(product)
    localStorage.setItem("products", JSON.stringify(product))
}
// delete start 


elSearchInput.addEventListener("input", function(e){
    elPopUpList.innerHTML = null

    const filteredList = product.filter(item => item.discount.includes(e.target.value))

    if(e.target.value){
        elPopUpList.classList.remove("h-0")
        elPopUpList.classList.add("p-2")

        filteredList.forEach((item, index) => {
            let elPopupItem = document.createElement("li")
            elPopupItem.className = "flex items-center gap-2 p-2 text-white text-[20px] font-bold hover:text-[#009398] hover:bg-white duration-400 rounded-lg cursor-pointer"
            elPopupItem.innerHTML = `
                <span>${index + 1}.</span>
                <p class="">${item.categoryId == "1" ? "Каркасные" : "Надувные"}</p>
                <span class="text-[20px] font-bold">- ${item.discount}</span>
            `
            elPopUpList.appendChild(elPopupItem)
        })
    }
    else{
        elPopUpList.classList.add("h-0")
        elPopUpList.classList.remove("p-2")
    }
})