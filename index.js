let pname = document.getElementById('productName')
let price = document.getElementById('productPrice')
let quantity = document.getElementById('productQuantity')
let category = document.getElementById('productCategory')

let create = document.getElementById('create')
let mode = 'create'
let loc;

let productsArray
if (localStorage.products != null) 
    productsArray = JSON.parse(localStorage.products);
else 
    productsArray = [];

let updateProduct = function(index){    
    pname.value = productsArray[index].productName,
    price.value = productsArray[index].productPrice,
    quantity.value = productsArray[index].PoductQuantity,
    category.value = productsArray[index].ProductCategory

    create.value = 'update'; 
    mode = 'update'
    loc = index

    scroll({
        top:0,
        behaviour:'smooth'
    })
}


let deleteProduct = function(index){
    productsArray.splice(index, 1)
    localStorage.products = JSON.stringify(productsArray)
    showData()
}

let deleteAll = function(){
    productsArray.splice(0)
    localStorage.clear()
    showData()
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
         <td> <button onclick="deleteProduct(${i})" class="btn delete"> delete</button></td>
          </tr>`;
      }
    document.getElementById("tbody").innerHTML = table;
    if(productsArray.length > 0){
        document.getElementById('deleteAll').innerHTML =  '<button onclick = "deleteAll()" class="btn delete">Delete All</button>'
    }
    else document.getElementById('deleteAll').innerHTML = ''
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

    if(mode === 'create'){
        productsArray.push(product)
    }
    else{
        productsArray[loc] = product
        create.value = 'create'
        mode = 'create'
    }

    localStorage.setItem('products', JSON.stringify(productsArray))
    showData()
    clearInputFields()    
})

