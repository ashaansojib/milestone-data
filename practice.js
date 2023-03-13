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


/*
what is accessiblity and how it works?
exproring full browser kana kuna?
1. map of javascript => kono ekta array of objects er sob gular property er man pete chaile map use kora jay. map muloto return kore.
2. forEach of javaScript => kono ekta array of objects er mal loop kore ber korte chaile ba return dorkar na hole forEach use kora hoy.
3. filter of javaScript => filter jekono ekta condition use kore fullfill hole . jara jara ai condition full korbe seglake return korbe. filter er condition jar shate milbe sei pura object take full return korbe. filter a includes use kore serach query calano jay.
4. find of javaScript => find method khuje jar shate mathc khabe tader mddhe prothomei jake pabe take return korbe.
5. array destructuring => destructuring hosce kono ekta arry ba objects theke sorasori man nia asi use kora. bame array thkle dane array dia access korte hbe r jdi object hy thle dane objects dite hbe.
6. mixed collabrate => kno ekta objects k JSON a convert korte gele sei objects take JSON.stringify korte hbe. abar jodi sei objects k user korar dorkr hy thle JSON.parse kore sei object k ager rupe ana jbe. 
7. fetch of javascript => 
8. truthy and falsy => falsy example - 
summery:
1. declare variable
4. for loop, while
7. template string
8. spread operator,
18. JSON (stringify, parse)
5, function return , perameter,
17, fetch and optional chaning
12. objects declation shorthand
11. destructuring object, and array
13. function peramiter default value
15. array of map, forEach, filter, find => ok
16. ternary operator with logical operator.
6. object property, includes array, objects
9. use filter to remove one item of an array
2. all condition => <, >, ===, !==, <=, >=, &&, ||, else if, if
10. arrow function with no peramiter, single peramiter, multiple peramiter, 
14. browser api: localStorage ans sessionStorage, location API, history API
3. array => array delaray, length, index, pop, push, shift, unshift, indexOf, includes etc.
*/
       const brands = [
        {name: "laptop", brand: "dell", price: "52000", color: "golden"},
        {name: "mobile", brand: "samsung", price: "5200", color: "red"},
        {name: "watch", brand: "sky", price: "5000", color: "blue"},
        {name: "pencill", brand: "power", price: "4000", color: "white"}
       ]
    //    const products = brands.map(product => product.name)
    //    brands.forEach( product => (product.price))
    //    const prices = brands.filter( brand => brand.price >= 5200);
    //    const brand = brands.filter(product => product.name.includes("l"))
// const products = brands.find(product => product.name.includes("n"))
