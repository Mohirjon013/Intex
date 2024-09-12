
let elRenderProductList = document.querySelector(".render-products")


let products = JSON.parse(localStorage.getItem("products")) || []
function handleAddProductBtnClick(){
    elModalWrapper.classList.remove("scale-0")
    elModalInner.innerHTML = `
        <form class = "add-product-form">
            <label>
                <input class="choosen-input hidden" type="file">
                <img class = "choosen-img mx-auto rounded-lg " src="./images/empty-img.png" alt="Choose img" width="70%" height="316">
            </label>
    
            <div class="flex justify-between">
                <div class="w-[45%] flex flex-col gap-[20px]">
                    <label class="flex flex-col">
                        <span class="text-[15px] text-[#898989] ">Категории</span>
                        <select class = "bg-zinc-300 p-3 rounded-lg mt-2 outline-none focus:shadow focus:shadow-zinc-900" name="productCategory">
                        <option value ="1">Каркасные</option>
                        <option value ="2">Надувные</option>
                        </select>
                    </label>
                    <label class="flex flex-col">
                        <span class="text-[15px] text-[#898989] ">Стартая цена (сум) </span>
                        <input class="bg-zinc-300 p-3 rounded-lg mt-2 outline-none focus:shadow focus:shadow-zinc-900" type="text" placeholder="Стартая цена (сум) " name="oldPrice" autocomplete="off" required>
                    </label>
                    <label class="flex flex-col">
                        <span class="text-[15px] text-[#898989] ">Рамка</span>
                        <select class = "bg-zinc-300 p-3 rounded-lg mt-2 outline-none focus:shadow focus:shadow-zinc-900" name="frame">
                        <option value ="1">Металлический</option>
                        <option value ="2">Прямоугольная</option>
                        <option value ="3">Рамка призмы</option>
                        </select>
                    </label>
                </div>
                <div class="w-[45%] flex flex-col gap-[20px]">
                    <label class="flex flex-col ">
                        <span class="text-[15px] text-[#898989] ">Количество</span>
                        <input class="bg-zinc-300 p-3 rounded-lg mt-2 outline-none focus:shadow focus:shadow-zinc-900" type="text" placeholder="Количество" name="productAmout" autocomplete="off" required>
                    </label>
                    <label class="flex flex-col ">
                        <span class="text-[15px] text-[#898989] ">Цена со скидкой (сум) </span>
                        <input class="bg-zinc-300 p-3 rounded-lg mt-2 outline-none focus:shadow focus:shadow-zinc-900" type="text" placeholder="Цена со скидкой (сум) " name="newPrice" autocomplete="off" required>
                    </label>
                </div>
            </div>
    
            <button class="add-btn w-[45%] mt-[35px] ml-[250px] py-2 rounded-[30px] bg-[#3F8C8E] font-bold text-[25px] leading-[29px] text-white ">Добавить</button>
        </form>
        
    
        
    
        
    `
    
    let choosenInput = document.querySelector(".choosen-input")
    let choosenImg = document.querySelector(".choosen-img")
    choosenInput.addEventListener("change", function(e){
        choosenImg.src = URL.createObjectURL(e.target.files[0])
        choosenImg.classList.add("h-[360px]")
        choosenImg.classList.add("bg-white")
    })
    
    let elAddProductFrom = document.querySelector(".add-product-form")
    let elAddBtn = document.querySelector(".add-btn")
    elAddProductFrom.addEventListener("submit", function(e){
        e.preventDefault()
        const date = {
            id:products.length ? products[products.length - 1].id + 1 : 1,
            categoryId:e.target.productCategory.value,
            oldPrice:e.target.oldPrice.value,
            frame:e.target.frame.value,
            productAmout:e.target.productAmout.value,
            newPrice:e.target.newPrice.value,
            img:choosenImg.src
        }
        products.push(date)
        
        elAddBtn.innerHTML = `
            <img class ="mx-auto scale-[1.4]" src="../images/loading-img.png" alt="" width="40" >
        `
        setTimeout(() => {
            elModalWrapper.classList.add("scale-0")
            if(date.categoryId == "1"){
                elTitle1.className = "frame-item font-bold text-[35px] leading-[40px] text-[#009398] pb-[8px] border-b-[3px] border-[#009398] cursor-pointer"
                elTitle2.className = "inflatable-item font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-transparent cursor-pointer"
            }
            else{
                elTitle2.className = " inflatable-item font-bold text-[35px] leading-[40px] text-[#009398] pb-[8px] border-b-[3px] border-[#009398] cursor-pointer"
                elTitle1.className = "frame-item font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-transparent cursor-pointer"
            }
            renderProducts(products, date.categoryId)
        }, 800);
        
    })
    
}


// render function start
function renderProducts(arr, categoryId){
    elRenderProductList.innerHTML = null
    const productDataFiltered = arr.filter(item => item.categoryId == categoryId)
    productDataFiltered.forEach(item => {
        // let elProductRowTop = document.createElement("tr")
        // elProductRowTop.className = "w-full h-[2px] mt-[10px] block bg-red-500"
        
        let elProductRow = document.createElement("tr")
        elProductRow.className = "bg-white"
        elProductRow.innerHTML = `
            <td class="rounded-l-[30px]">
                <img class="mx-auto" src=${item.img} alt="" width="97" height= "55">
            </td>
            <td class="">
                <span class="font-[400] text-[12px] leading-[13px] text-[#A6A6A6]  relative before:absolute before:w-[100%] before:h-[1px] before:bg-red-500 before:inset-0 before:my-auto before:rotate-[5deg]">${item.oldPrice} сум</span>
                <br>
                <span class="font-[700] text-[20px] leading-[17px] text-[#000000]">${item.newPrice} сум</span>
            </td>
            <td class="font-[400] text-[20px] leading-[35px] text-[#000000]">${item.productAmout}</td>
            <td class="font-[400] text-[20px] leading-[35px] text-[#000000]">
                ${item.frame == "1" ? "Металлический" : ""}
                ${item.frame == "2" ? "Прямоугольная" : ""}
                ${item.frame == "3" ? "Рамка призмы" : ""}
            </td>
            <td class=" rounded-r-[30px]">
                <div class="flex gap-[18px] py-[15px]">
                    <buttom onclick = "handleUpdateProduct(${item.id})" class ="hover:scale-[1.3] duration-300 cursor-pointer">
                        <img src="./images/edit-icon.svg" alt="edit icon" width="22" height="22">
                    </buttom>
                    <buttom onclick = "handleDeleteProduct(${item.id})" class =" hover:scale-[1.3] duration-300 cursor-pointer">
                        <img src="./images/delete-icon.svg" alt="delete-icon" width="22" height="22">
                    </buttom>
                </div>
            </td>
        `
        elRenderProductList.appendChild(elProductRow)
    });
    localStorage.setItem("products", JSON.stringify(products))
}
renderProducts(products, "1")
// render function end


// delete start
function handleDeleteProduct(id){
    elModalWrapper.classList.remove("scale-0")
    
    elModalInner.innerHTML = `
        <div class = " ">
            <h2 class = "text-[30px] font-bold text-zinc-600 text-center my-[10px]">Вы хотите удалить?</h2>
            <div class = "flex justify-between">
                <button onclick ="handleCancelDeleteModal()" class="add-btn w-[49%] py-2 rounded-[30px] bg-[#3F8C8E] font-bold text-[25px] leading-[29px] text-white hover:bg-transparent hover:border-[#3F8C8E] hover:text-[#3F8C8E] border-[2px] border-transparent duration-300">Отмена</button>
                <button onclick ="handleSureDeleteModal(${id})" class="add-btn w-[49%] py-2 rounded-[30px] bg-red-500 font-bold text-[25px] leading-[29px] text-white hover:bg-transparent hover:border-red-500 hover:text-red-500 border-[2px] border-transparent duration-300">Да</button>
            </div>
        </div>
    `
}
function handleSureDeleteModal(id){
    const findedIndexDelete = products.findIndex(item => item.id == id)
    const findObjDelete = products.find(item => item.id == id)
    products.splice(findedIndexDelete, 1)
    elModalWrapper.classList.add("scale-0")
    renderProducts([...products], findObjDelete.categoryId )
    console.log(findObjDelete);
    
    localStorage.setItem("products", JSON.stringify(products))
}
function handleCancelDeleteModal(){
    elModalWrapper.classList.add("scale-0")
}
// delete end


// update start
function handleUpdateProduct(id){
    elModalWrapper.classList.remove("scale-0")
    const updateDate = products.find(item => item.id == id)
    elModalInner.innerHTML = `
        <form class = "updated-product-form">
            <label>
                <input class="updated-input hidden" type="file">
                <img onerror ="imgUpdated()" class = "updated-img mx-auto rounded-lg " src="${updateDate.img ? updateDate.img : "./images/empty-img.png"}" alt="Choose img" width="70%" height="316">
            </label>
    
            <div class="flex justify-between">
                <div class="w-[45%] flex flex-col gap-[20px]">
                    <label class="flex flex-col">
                        <span class="text-[15px] text-[#898989] ">Категории</span>
                        <select value = "" class = "bg-zinc-300 p-3 rounded-lg mt-2 outline-none focus:shadow focus:shadow-zinc-900" name="productCategory">
                        <option ${updateDate.categoryId == "1" ? "selected" : ""} value ="1">Каркасные</option>
                        <option ${updateDate.categoryId == "2" ? "selected" : ""} value ="2">Надувные</option>
                        </select>
                    </label>
                    <label class="flex flex-col">
                        <span class="text-[15px] text-[#898989] ">Стартая цена (сум) </span>
                        <input value="${updateDate.oldPrice}" class="bg-zinc-300 p-3 rounded-lg mt-2 outline-none focus:shadow focus:shadow-zinc-900" type="text" placeholder="Стартая цена (сум) " name="oldPrice" autocomplete="off" required>
                    </label>
                    <label class="flex flex-col">
                        <span class="text-[15px] text-[#898989] ">Рамка</span>
                        <select class = "bg-zinc-300 p-3 rounded-lg mt-2 outline-none focus:shadow focus:shadow-zinc-900" name="frame">
                        <option ${updateDate.frame == "1" ? "selected" : ""} value ="1">Металлический</option>
                        <option ${updateDate.frame == "2" ? "selected" : ""} value ="2">Прямоугольная</option>
                        <option ${updateDate.frame == "3" ? "selected" : ""} value ="3">Рамка призмы</option>
                        </select>
                    </label>
                </div>
                <div class="w-[45%] flex flex-col gap-[20px]">
                    <label class="flex flex-col ">
                        <span class="text-[15px] text-[#898989] ">Количество</span>
                        <input value="${updateDate.productAmout}" class="bg-zinc-300 p-3 rounded-lg mt-2 outline-none focus:shadow focus:shadow-zinc-900" type="text" placeholder="Количество" name="productAmout" autocomplete="off" required>
                    </label>
                    <label class="flex flex-col ">
                        <span class="text-[15px] text-[#898989] ">Цена со скидкой (сум) </span>
                        <input value="${updateDate.newPrice}" class="bg-zinc-300 p-3 rounded-lg mt-2 outline-none focus:shadow focus:shadow-zinc-900" type="text" placeholder="Цена со скидкой (сум) " name="newPrice" autocomplete="off" required>
                    </label>
                </div>
            </div>
    
            <button class="add-btn w-[45%] mt-[35px] ml-[250px] py-2 rounded-[30px] bg-[#3F8C8E] font-bold text-[25px] leading-[29px] text-white ">Добавить</button>
        </form>
        
    
        
    
        
    `
    let elAddBtn = document.querySelector(".add-btn")
    let elUpdatedForm = document.querySelector(".updated-product-form")
    let elUpdatedImg = document.querySelector(".updated-img")
    let elUpdatedInput = document.querySelector(".updated-input")
    elUpdatedInput.addEventListener("change", function(e){
        elUpdatedImg.src = URL.createObjectURL(e.target.files[0])
        elUpdatedImg.classList.add("bg-white")
    })

    elUpdatedForm.addEventListener("submit", function(e){
        e.preventDefault()
        updateDate.img = elUpdatedImg.src
        updateDate.categoryId = e.target.productCategory.value
        updateDate.oldPrice = e.target.oldPrice.value
        updateDate.frame = e.target.frame.value
        updateDate.productAmout = e.target.productAmout.value
        updateDate.newPrice = e.target.newPrice.value
        
        elAddBtn.innerHTML = `
            <img class ="mx-auto scale-[1.4]" src="../images/loading-img.png" alt="" width="40" >
        `

        setTimeout(() => {
            renderProducts(products, updateDate.categoryId)
            localStorage.setItem("products", JSON.stringify(products))
            elModalWrapper.classList.add("scale-0")
            if(updateDate.categoryId == "1"){
                elTitle1.className = "frame-item font-bold text-[35px] leading-[40px] text-[#009398] pb-[8px] border-b-[3px] border-[#009398] cursor-pointer"
                elTitle2.className = "inflatable-item font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-transparent cursor-pointer"
            }
            else{
                elTitle2.className = " inflatable-item font-bold text-[35px] leading-[40px] text-[#009398] pb-[8px] border-b-[3px] border-[#009398] cursor-pointer"
                elTitle1.className = "frame-item font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-transparent cursor-pointer"
            }
            
        }, 800);


       
        
    })
    
}
function imgUpdated(){
    let elUpdatedImg = document.querySelector(".updated-img")
    elUpdatedImg.src ="./images/empty-img.png"
}
// update end


// modal start
let elModalWrapper = document.querySelector(".modal-wrapper")
let elModalInner = document.querySelector(".modal-inner")

elModalWrapper.addEventListener("click", function(e){
    if(e.target.id == "modal-wrapper") elModalWrapper.classList.add("scale-0")
    })

// modal end



// active start
let elTitle1 = document.querySelector(".frame-item")
let elTitle2 = document.querySelector(".inflatable-item")

elTitle1.addEventListener("click", function(){
    elTitle1.className = "frame-item font-bold text-[35px] leading-[40px] text-[#009398] pb-[8px] border-b-[3px] border-[#009398] cursor-pointer"
    elTitle2.className = "inflatable-item font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-transparent cursor-pointer"
    renderProducts(products, "1")
    
})

elTitle2.addEventListener("click", function(){
    elTitle2.className = " inflatable-item font-bold text-[35px] leading-[40px] text-[#009398] pb-[8px] border-b-[3px] border-[#009398] cursor-pointer"
    elTitle1.className = "frame-item font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-transparent cursor-pointer"
    renderProducts(products, "2")
})
// active end

let elPersonDate = document.querySelector(".person-date")
const loginDate = JSON.parse(localStorage.getItem("loginDate"))
elPersonDate.textContent = loginDate.username.toUpperCase()



// log out start
let elLogoutModal = document.querySelector(".logout-modal")
elLogoutModal.addEventListener("click", function(e){
    elModalWrapper.classList.remove("scale-0")
    
    elModalInner.innerHTML = `
        <div >
            <h2 class = "text-[30px] font-bold text-zinc-600 text-center my-[10px]">Вы хотите покинуть сайт?</h2>
            <div class = "flex justify-between">
                <button onclick ="handleNoModal()" class=" w-[49%] py-2 rounded-[30px] bg-[#3F8C8E] font-bold text-[25px] leading-[29px] text-white hover:bg-transparent hover:border-[#3F8C8E] hover:text-[#3F8C8E] border-[2px] border-transparent duration-300">Нет</button>
                <button onclick ="handleYesModal()" class="add-btn w-[49%] py-2 rounded-[30px] bg-red-500 font-bold text-[25px] leading-[29px] text-white hover:bg-transparent hover:border-red-500 hover:text-red-500 border-[2px] border-transparent duration-300">Да</button>
            </div>
        </div>
    `
})
function handleNoModal(){
    elModalWrapper.classList.add("scale-0")
}
function handleYesModal(){
    localStorage.clear()
    location.pathname = "/"
}
// log out end



// search start

let elPopapList = document.querySelector(".popap-list")
let elSearchInput = document.querySelector(".search-input")

elSearchInput.addEventListener("input", function(e){
    elPopapList.innerHTML = null
    const filterList = products.filter(item => item.newPrice.includes(e.target.value))
    if(e.target.value && filterList.length){
        elPopapList.classList.remove("h-0")
        elPopapList.classList.remove("p-0")
        elPopapList.classList.add("p-2")
        elPopapList.classList.add("mt-[5px]")
        filterList.forEach((item, index) => {
            let elPopapItem = document.createElement("li")
            elPopapItem.id = item.id
            elPopapItem.classList = "py-2 px-3 text-white font-bold rounded-md hover:bg-white hover:text-[#009398] duration-300"
            elPopapItem.innerHTML = `
                <div class = "flex ">
                    <span id=${item.id}>${index + 1})</span>
                    <strong id=${item.id} class ="ml-[5px]">${item.categoryId == "1" ? "Каркасные" : "Надувные"}</strong>
                    <p id=${item.id} class ="ml-[7px]"> - ${item.newPrice} сум</p>
                </div>
            `
            elPopapList.appendChild(elPopapItem)
            
            elPopapItem.addEventListener("click", function(e){
                const filteredProduct = products.filter(item => item.id == e.target.id)
                renderProducts(filteredProduct, filteredProduct[0].categoryId)
                if(filteredProduct[0].categoryId == "1"){
                    elTitle1.className = "frame-item font-bold text-[35px] leading-[40px] text-[#009398] pb-[8px] border-b-[3px] border-[#009398] cursor-pointer"
                    elTitle2.className = "inflatable-item font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-transparent cursor-pointer"
                }
                else{
                    elTitle2.className = " inflatable-item font-bold text-[35px] leading-[40px] text-[#009398] pb-[8px] border-b-[3px] border-[#009398] cursor-pointer"
                    elTitle1.className = "frame-item font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-transparent cursor-pointer"
                }
                
            })
        })
    }
    else{
        elPopapList.classList.add("h-0")
        elPopapList.classList.add("p-0")
        elPopapList.classList.remove("p-2")
        elPopapList.classList.remove("mt-[5px]")
        renderProducts(products, "1")
        elTitle1.className = "frame-item font-bold text-[35px] leading-[40px] text-[#009398] pb-[8px] border-b-[3px] border-[#009398] cursor-pointer"
        elTitle2.className = "inflatable-item font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-transparent cursor-pointer"
        
    }
    
})
elSearchInput.addEventListener("blur", function(){
    setTimeout(() => {
        elPopapList.classList.add("h-0")
        elPopapList.classList.add("p-0")
        elPopapList.classList.remove("p-2")
        elPopapList.classList.remove("mt-[5px]")
    }, 300);
})
// search end