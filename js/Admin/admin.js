let isLoginData = JSON.parse(localStorage.getItem("loginData"))
let elUserFullName = document.querySelector(".user-full-name")
elUserFullName.textContent = isLoginData.username.toUpperCase()

let product = JSON.parse(localStorage.getItem("products")) || []

// title
let elTitle1 = document.querySelector(".karkasniy-title")
let elTitle2 = document.querySelector(".naduvniy-title")

// modal
let elModalWrapper = document.querySelector(".modal-wrapper")
let elModalInner = document.querySelector(".modal-inner")

// RenderTbody
let elProductRenderTbody = document.querySelector(".render-product-here")

// search
let elSearchInput = document.querySelector(".search-input")
let elPopUpList = document.querySelector(".popup-list")



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

function handleCloseAddModal(){
    elModalWrapper.classList.add("scale-0")
}
// modal end


// add product start 
function handleAddProductBtn(){
    elModalWrapper.classList.remove("scale-0")
    elModalInner.innerHTML = `
    <form class="add-form">
        <button type="button" onclick="handleCloseAddModal()" >
            <img class="absolute top-[20px] right-[20px] cursor-pointer hover:scale-125 duration-400" src="./images/close-icon.svg" alt="empty" width="35" height="35">
        </button>
        <label class="cursor-pointer">
            <input class="choosen-input hidden" type="file" />
            <img class="choosen-img mx-auto" src="./images/empty-img.png" alt="empty" width="85%" height="316">
        </label>
        <div class="flex justify-between mt-5" >
            <div class="w-[350px] space-y-[25px]">
                <label class="flex flex-col relative pl-[45px]">
                    <img class="absolute bottom-[22px] left-0" src="./images/category-icon.svg" alt="category-icon" width="28" height="28">
                    <span class="text-[23px] text-[#898989] mb-[15px]">Категории</span>
                    <select class="py-[7px] text-[28px] color-[#545454] cursor-pointer border-b-[2px] border-neutral-400 outline-none" name="productCategory">
                        <option value="1">Каркасные</option>
                        <option value="2">Надувные</option>
                    </select>
                </label>
                <label class="flex flex-col relative pl-[45px]">
                    <img class="absolute bottom-[22px] left-0" src="./images/frame-icon.svg" alt="category-icon" width="28" height="28">
                    <span class="text-[23px] text-[#898989] mb-[15px]">Рамка</span>
                    <select class="py-[7px] text-[28px] color-[#545454] cursor-pointer border-b-[2px] border-neutral-400 outline-none" name="productFrame">
                        <option value="1">Металлический</option>
                        <option value="2">Прямоугольная</option>
                        <option value="3">Рамка призмы</option>
    
                    </select>
                </label>
                <label class="flex flex-col relative pl-[45px]">
                    <img class="absolute bottom-[22px] left-0" src="./images/number-icon.svg" alt="category-icon" width="28" height="28">
                    <span class="text-[23px] text-[#898989] mb-[15px]">	Количество</span>
                    <input class="py-[7px] text-[28px] color-[#545454] border-b-[2px] border-neutral-400 outline-none" type="text" name="productQuantity" placeholder="Количество" autocomplete="off" required>
                </label>
            </div>
            <div class="w-[350px] space-y-[25px] ">
                <label class="flex flex-col relative pl-[45px]">
                    <img class="absolute bottom-[22px] left-0" src="./images/cost-icon.svg" alt="category-icon" width="28" height="28">
                    <span class="text-[23px] text-[#898989] mb-[15px]">Стартая цена (сум) </span>
                    <input class="py-[7px] text-[28px] color-[#545454] border-b-[2px] border-neutral-400 outline-none" type="number" name="productCost" placeholder="Стартая цена" autocomplete="off" required>
                </label>
                <label class="flex flex-col relative pl-[45px]">
                    <img class="absolute bottom-[22px] left-0" src="./images/cost-icon.svg" alt="category-icon" width="28" height="28">
                    <span class="text-[23px] text-[#898989] mb-[15px]">Цена со скидкой (сум) </span>
                    <input class="py-[7px] text-[28px] color-[#545454] border-b-[2px] border-neutral-400 outline-none" type="number" name="productDiscount" placeholder="Цена со скидкой" autocomplete="off" required>
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
        elChoosenImg.className = "w-[85%] h-[316px] cursor-pointer mx-auto bg-white p-3 rounded-lg border-[1px] border-grey-500 shadow-[0_0px_11px_0px_#00000040] object-cover"
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
            img:elChoosenImg.src ? elChoosenImg.src : null
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
                <img class="mx-auto" src="${item.img ? item.img : "./images/empty-img.png"}" alt="pool" width="97" height="55">
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
                <button onclick="handleUpdateBtn(${item.id})" class="cursor-pointer hover:scale-150 duration-400">
                    <img src="./images/edit-icon.svg" alt="edit-icon" width="16" height="18">
                </button>
                <button onclick="handleDeleteBtn(${item.id})" class="cursor-pointer hover:scale-150 duration-400">
                    <img src="./images/delete-icon.svg" alt="delete-icon" width="16" height="18">
                </button>
            </td>
        `
        elProductRenderTbody.append(elProductRow)
    });
}
renderProduct(product, "1")
// render end 


// update start 
function handleUpdateBtn(id){
    elModalWrapper.classList.remove("scale-0")
    const findedUpdatedObj = product.find(item => item.id == id)    
    
    elModalInner.innerHTML = `
    <form class="update-form">
        <button type="button" onclick="handleCloseAddModal()" >
            <img class="absolute top-[20px] right-[20px] cursor-pointer hover:scale-125 duration-400" src="./images/close-icon.svg" alt="empty" width="35" height="35">
        </button>
        <label class="cursor-pointer">
            <input class="choosen-input-update hidden" type="file" />
            <img onerror ="imgUpdated()" class="choosen-img-update mx-auto " src="${findedUpdatedObj.img ? findedUpdatedObj.img : "./images/empty-img.png"}" alt="empty" width="85%" height="316">
        </label>
        <div class="flex justify-between mt-5">
            <div class="w-[350px] space-y-[25px]">
                <label class="flex flex-col relative pl-[45px]">
                    <img class="absolute bottom-[22px] left-0" src="./images/category-icon.svg" alt="category-icon" width="28" height="28">
                    <span class="text-[23px] text-[#898989] mb-[15px]">Категории</span>
                    <select class="py-[7px] text-[28px] color-[#545454] cursor-pointer border-b-[2px] border-neutral-400 outline-none" name="productCategory">
                        <option ${findedUpdatedObj.categoryId == "1" ? `selected` : ""} value="1">Каркасные</option>
                        <option ${findedUpdatedObj.categoryId == "2" ? `selected` : ""} value="2">Надувные</option>
                    </select>
                </label>
                <label class="flex flex-col relative pl-[45px]">
                    <img class="absolute bottom-[22px] left-0" src="./images/frame-icon.svg" alt="category-icon" width="28" height="28">
                    <span class="text-[23px] text-[#898989] mb-[15px]">Рамка</span>
                    <select class="py-[7px] text-[28px] color-[#545454] cursor-pointer border-b-[2px] border-neutral-400 outline-none" name="productFrame">
                        
                        <option ${findedUpdatedObj.frame == "1" ? `selected` : ""} value="1">Металлический</option>
                        <option ${findedUpdatedObj.frame == "2" ? `selected` : ""} value="2">Прямоугольная</option>
                        <option ${findedUpdatedObj.frame == "3" ? `selected` : ""} value="3">Рамка призмы</option>
                        
                        
    
                    </select>
                </label>
                <label class="flex flex-col relative pl-[45px]">
                    <img class="absolute bottom-[22px] left-0" src="./images/number-icon.svg" alt="category-icon" width="28" height="28">
                    <span class="text-[23px] text-[#898989] mb-[15px]">	Количество</span>
                    <input class="py-[7px] text-[28px] color-[#545454] border-b-[2px] border-neutral-400 outline-none" type="text" name="productQuantity" placeholder="Количество" value="${findedUpdatedObj.quantity}" autocomplete="off" required>
                </label>
            </div>
            <div class="w-[350px] space-y-[25px] ">
                <label class="flex flex-col relative pl-[45px]">
                    <img class="absolute bottom-[22px] left-0" src="./images/cost-icon.svg" alt="category-icon" width="28" height="28">
                    <span class="text-[23px] text-[#898989] mb-[15px]">Стартая цена (сум) </span>
                    <input class="py-[7px] text-[28px] color-[#545454] border-b-[2px] border-neutral-400 outline-none" type="number" name="productCost" placeholder="Стартая цена" value="${findedUpdatedObj.cost}" autocomplete="off" required>
                </label>
                <label class="flex flex-col relative pl-[45px]">
                    <img class="absolute bottom-[22px] left-0" src="./images/cost-icon.svg" alt="category-icon" width="28" height="28">
                    <span class="text-[23px] text-[#898989] mb-[15px]">Цена со скидкой (сум) </span>
                    <input class="py-[7px] text-[28px] color-[#545454] border-b-[2px] border-neutral-400 outline-none" type="number" name="productDiscount" placeholder="Цена со скидкой" value="${findedUpdatedObj.discount}" autocomplete="off" required>
                </label>
            </div>
        </div>
        <button type="submit" class="add-btn w-full inline-block p-3 mt-8 rounded-[17px] font-bold text-[25px] text-white bg-[#009398] border-[2px] border-transparent hover:text-[#009398] hover:bg-transparent hover:border-[#009398] duration-500 cursor-pointer">Добавить</button>
    </form>
    `
    let elchoosenUpdateInput = document.querySelector(".choosen-input-update")
    let elchoosenUpdateImg = document.querySelector(".choosen-img-update")
    let elUpdateForm = document.querySelector(".update-form")
    let elAddUpdateBtn = document.querySelector(".add-btn")
    
    elchoosenUpdateInput.addEventListener("change", function(e) {
        elchoosenUpdateImg.src = URL.createObjectURL(e.target.files[0])
        elchoosenUpdateImg.className = "w-[85%] h-[316px] cursor-pointer mx-auto bg-white border-[1px] border-grey-500 shadow-[0_0px_11px_0px_#00000040] object-cover rounded-lg"
    })
    
    elUpdateForm.addEventListener("submit", function(e){
        e.preventDefault()
        findedUpdatedObj.img = elchoosenUpdateImg.src
        findedUpdatedObj.categoryId = e.target.productCategory.value
        findedUpdatedObj.frame = e.target.productFrame.value
        findedUpdatedObj.quantity = e.target.productQuantity.value
        findedUpdatedObj.cost = e.target.productCost.value
        findedUpdatedObj.discount = e.target.productDiscount.value
        
        
        elAddUpdateBtn.innerHTML = `
            <img class="mx-auto scale-[1.2]" src="./images/loading.png" alt="loading" width="30">
        `
        setTimeout(() => {
            elModalWrapper.classList.add("scale-0")
            if(findedUpdatedObj.categoryId == "1"){
                elTitle1.className = "karkasniy-title text-[35px] font-bold text-[#009398] border-b-[3px] border-b-[#009398] cursor-pointer"
                elTitle2.className = "naduvniy-title text-[35px] font-bold text-[#A6A6A6] border-b-[3px] border-b-transparent cursor-pointer"
            }
            else{
                elTitle2.className = "naduvniy-title text-[35px] font-bold text-[#009398] border-b-[3px] border-b-[#009398] cursor-pointer"
                elTitle1.className = "karkasniy-title text-[35px] font-bold text-[#A6A6A6] border-b-[3px] border-b-transparent cursor-pointer"
            }
            renderProduct(product, findedUpdatedObj.categoryId)
        }, 1000);
        localStorage.setItem("products", JSON.stringify(product))
    })
    
}
function imgUpdated(){
    let elchoosenUpdateImg = document.querySelector(".choosen-img-update")
    elchoosenUpdateImg.src ="./images/empty-img.png"
}
// update end 


// delete start 
function handleDeleteBtn(id){
    elModalWrapper.classList.remove("scale-0")
    elModalInner.classList.add("mt-[155px]")
    
    elModalInner.innerHTML = `
        <h2 class="font-bold text-[35px] text-slate-500 text-center">Вы хотите удалить это?</h2>
        <div class="flex justify-between">
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
    const findedObjToDelete = product.find(item => item.id == id)
    
    product.splice(findedIndexProduct, 1)
    elModalWrapper.classList.add("scale-0")
    renderProduct(product, findedObjToDelete.categoryId)
    localStorage.setItem("products", JSON.stringify(product))
}
// delete start 


// search start 
elSearchInput.addEventListener("input", function(e){
    elPopUpList.innerHTML = null
    
    const filteredList = product.filter(item => item.discount.includes(e.target.value))
    
    if(e.target.value){
        elPopUpList.classList.remove("h-0")
        elPopUpList.classList.add("p-2")
        
        filteredList.forEach((item, index) => {
            let elPopupItem = document.createElement("li")
            elPopupItem.id = item.id
            
            elPopupItem.className = "flex items-center gap-2 p-2 text-white text-[20px] font-bold hover:text-[#009398] hover:bg-white duration-400 rounded-lg cursor-pointer"
            elPopupItem.innerHTML = `
                <span id="${item.id}">${index + 1}.</span>
                <p id="${item.id}" class="">${item.categoryId == "1" ? "Каркасные" : "Надувные"}</p>
                <span id="${item.id}" class="text-[20px] font-bold">- ${item.discount}</span>
            `
            elPopUpList.appendChild(elPopupItem)
            
            elPopupItem.addEventListener("click", function(e){
                const filteredPopupList = filteredList.filter(item => item.id == e.target.id)
                renderProduct(filteredPopupList, filteredPopupList[0].categoryId)
                
                if(filteredPopupList[0].categoryId == "1"){
                    elTitle1.className = "karkasniy-title text-[35px] font-bold text-[#009398] border-b-[3px] border-b-[#009398] cursor-pointer"
                    elTitle2.className = "naduvniy-title text-[35px] font-bold text-[#A6A6A6] border-b-[3px] border-b-transparent cursor-pointer"
                }
                else{
                    elTitle2.className = "naduvniy-title text-[35px] font-bold text-[#009398] border-b-[3px] border-b-[#009398] cursor-pointer"
                    elTitle1.className = "karkasniy-title text-[35px] font-bold text-[#A6A6A6] border-b-[3px] border-b-transparent cursor-pointer"
                }
            })
        })
    }
    else{
        elPopUpList.classList.add("h-0")
        elPopUpList.classList.remove("p-2")
        renderProduct(product, "1")
        elTitle1.className = "karkasniy-title text-[35px] font-bold text-[#009398] border-b-[3px] border-b-[#009398] cursor-pointer"
        elTitle2.className = "naduvniy-title text-[35px] font-bold text-[#A6A6A6] border-b-[3px] border-b-transparent cursor-pointer"
    }
})
elSearchInput.addEventListener("blur", (e)=>{
    setTimeout(function(e){
        elPopUpList.classList.add("h-0")
        elPopUpList.classList.remove("p-2")
        elSearchInput.value = null
    },300)
})
// search end


let elUserBox = document.querySelector(".user-box")
elUserBox.addEventListener("click", function(){
    elModalWrapper.classList.remove("scale-0")
    
    elModalInner.innerHTML = `
        <h2 class="font-bold text-[35px] text-slate-500 text-center">Вы хотите выйти из системы ?</h2>
        <div class="flex justify-between">
            <button onclick="handleUserCancel()" type="button" class=" w-[48%] inline-block p-3 mt-8 rounded-[17px] font-bold text-[25px] text-white bg-[#009398] border-[2px] border-transparent hover:text-[#009398] hover:bg-transparent hover:border-[#009398] duration-500 cursor-pointer">Отмена</button>
            <button onclick="handleUserYes()" type="button" class=" w-[48%] inline-block p-3 mt-8 rounded-[17px] font-bold text-[25px] text-white bg-red-600 border-[2px] border-transparent hover:text-red-600 hover:bg-transparent hover:border-red-600 duration-500 cursor-pointer">Да</button>
        </div>
    `
})
function handleUserCancel(){
    elModalWrapper.classList.add("scale-0")
}
function handleUserYes(){
    localStorage.clear()
    location.pathname = "/"
}