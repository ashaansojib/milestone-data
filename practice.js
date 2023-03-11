// this is confirm area
// const showConfirm = () =>{
//     const title = document.getElementById("title");
//     const result = confirm("kiss me or not!!")
//     if(result === true){
//         title.innerText = "'Hi I'm Sojib khan"
//     }
//     else{
//         title.textContent = '';
//     }
// }
// this is prompt area method
// const showConfirm = () =>{
//     const title = document.getElementById("title");
//     title.textContent = '';
//     const result = prompt("put your name please..")
//     if(result === null){
//         title.innerText = "you do not put your name";
//     }
//     else{
//         title.innerText = result;
//     }

// }
/*
local storage er besh kichu method ache tar moddhe setItem, getItem, clear, removeItem, length etc beshi usefull. local storage er key and value duitai string hisbe theke. kono array ba objects k sorasori value hisbe set kora jay na. object k localStorage a rakha jbe tobe sei object k JSON.stringfy korte hbe tokhn ekta full string hye jbe. sei objects k pete hole sei object k JSON.parse korte hbe. thle seta objects hye jbe.
NOTE: kono ekta item k local storage a save korte hole just 5ta kaj korte hbe. prothome input theke value take nite hbe kno button a click korle sei value take get korte prbo. sei input take dhore ui te show korate hbe. local storage a add korar jnne ekta function likhte hbe. tar age check korte hbe local storage a sei item ti ache kina. tarpr local storage theke data take get korte hbe j data ta ache kina. first sei key take ekta empty object a rakhte hobe. trpr sei nam take ekta const a dhore dekhte hbe ache kina jodi thke thle seta oi empty cart a add korbe jodi na thke thle just oi empty objects take dekhbe
*/
const showConfirm = () =>{
    console.log("person")
}

document.getElementById("button").addEventListener('click', function(){
    getInputField()
});
// get input value from input field
const getInputField = () =>{
    const inputProduct = document.getElementById("product");
    const inputQuantity = document.getElementById("quantity");
    const product = inputProduct.value;
    const quantity = inputQuantity.value;
    inputProduct.value = '';
    inputQuantity.value = '';
    showItems(product, quantity);
    saveProductToLocalStorage(product, quantity)
}
// show input value on ui as li list item
const showItems = (product, quantity) =>{
    const ul = document.getElementById("cart-container");
    const li = document.createElement("li");
    li.innerText = `${product} ${quantity}`
    ul.appendChild(li);
}
// get cart item or any data if it stored in localStorage
const getItemToLocalStorage = () =>{
    let cart = {};
    const getCart = localStorage.getItem('cart');
    // console.log(getCart)
    if(getCart){
        cart = JSON.parse(getCart);
    }
    return cart;
}
// save product to local storage
const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getItemToLocalStorage();
    cart[product] = quantity;
    const convertString = JSON.stringify(cart);
    localStorage.setItem('cart', convertString)
}
const displayDataToLocalStorage = () =>{
    const savedCart = getItemToLocalStorage();
    // console.log(savedCart)
    for(const product in savedCart){
        const quantity = savedCart[product];
        showItems(product, quantity)
    }
}
displayDataToLocalStorage()