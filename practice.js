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
*/
const showConfirm = () =>{
    const person = {
        name : sojib,
        age : 25,
        profession: programmer,
        stage : medium,
        package : pro
    }
    localStorage.setItem(person)
}