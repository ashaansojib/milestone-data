// all important topic as an objects
const url = `important-topic.json`
fetch(url)
    .then(res => res.json())
    .then(data => displayCard(data.data))
// main container functionlity
const displayCard = dataList => {
    // console.log(dataList.tools)
    const container = document.getElementById("card-container");
    dataList.tools.forEach(data => {
        // console.log(data)
        const {checkList, id} = data;
        const createDiv = document.createElement("div");
        createDiv.classList.add("col-lg-4", "mb-2");
        createDiv.innerHTML = `
            <div class="card ">
                <div class="card-body ">
                    <h5 class="card-title fs-2 text-primary">${checkList}</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" onclick="loadDetail('${id}')" class="btn btn-primary">Show Details</a>
                </div>
            </div>
        `;
        container.appendChild(createDiv);
    });
}
// load details by id
// load data by id for showing modal
const loadDetail = id =>{
    const url = `/all-milestone/milestone-seven/topic-${id}.json`
    fetch(url)
    .then(res => res.json())
    .then(data=> fullArticle(data))
}
// display total content in body
const fullArticle = details =>{
    console.log(details.data)
    const container = document.getElementById("card-container");
    document.getElementById("post-title").style.display = 'none';
    container.textContent = '';
    const information = details.data.info.map(info => (`<li>${info}</li>`)).join(' ');
    const {name, title, creator, date} = details.data;

    const createDiv = document.createElement("div");
    createDiv.style.backgroundColor = '#03203C';
    createDiv.style.color = '#fff';
    createDiv.classList.add("col", "p-2");
    container.classList.remove("row")
    createDiv.innerHTML = `
    <p class="d-flex justify-content-between"><span>Author: ${creator}</span> <span> Date: ${date}</span></p>
    <h2 class="blog-heading">${title}</h2>
    <ol>${information}</ol>
    `;
    container.appendChild(createDiv)
}
// counter spinner with setInterval
let count = 0;
let interValId;
// start inter val
const startInterVal = data => {
    const countText = document.getElementById("counter");
    countText.innerText = count++;
}
document.getElementById("start").addEventListener('click', function () {
    interValId = setInterval(startInterVal, 1000)
});
// clear inter val
document.getElementById("clear").addEventListener('click', function () {
    const countText = document.getElementById("counter");
    countText.innerText = 'Clear Counter';
    count = 0;
});
// stop inter val
document.getElementById("stop").addEventListener('click', function () {
    clearInterval(interValId)
});