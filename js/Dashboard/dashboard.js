let isProduct = JSON.parse(localStorage.getItem("products")) || []

let newData1 = isProduct.filter(item => item.categoryId == "1")
let newData2 = isProduct.filter(item => item.categoryId == "2")

console.log("Каркасные:", newData1);
console.log("Надувные:", newData2);