let pname = document.getElementById('productName')
let price = document.getElementById('productPrice')
let quantity = document.getElementById('productQuantity')
let category = document.getElementById('productCategory')

let create = document.getElementById('create')

let productsArray
if (localStorage.products != null) 
    productsArray = JSON.parse(localStorage.products);
else 
    productsArray = [];


console.log(productsArray);


let updateProduct = function(index){
    pname.value = productsArray[index].productName,
    price.value = productsArray[index].productPrice,
    quantity.value = productsArray[index].PoductQuantity,
    category.value = productsArray[index].ProductCategory

    create.value = 'update'; 
    scroll({
        top:0,
        behaviour:'smooth'
    })
}

let showData = function(){
    let table = ''
    for (let i = 0; i < productsArray.length; i++) {
        table += `<tr>
            <td>${productsArray[i].productName}</td>
            <td> ${productsArray[i].productPrice}</td>
            <td>${productsArray[i].PoductQuantity}</td>
            <td>${productsArray[i].ProductCategory}</td>
         
          <td> <button onclick="updateProduct(${i})"  class="btn update">update</button></td> 
         <td> <button onclick="deleteData(${i})" class="btn delete"> delete</button></td>
          </tr>`;
      }
    document.getElementById("tbody").innerHTML = table;
}
showData()

let clearInputFields = function(){
    pname.value = ''
    price.value= ''
    quantity.value = ''
    category.value = ''
}

create.addEventListener('click', function(event){
    event.preventDefault();
    let product = {
        productName: pname.value,
        productPrice: price.value,
        PoductQuantity: quantity.value,
        ProductCategory: category.value
    }
    console.log(product);
    productsArray.push(product)

    localStorage.setItem('products', JSON.stringify(productsArray))
    showData()
    clearInputFields()    
})

