const loadData = () =>{
    fetch('/all-milestone/milestone-seven/milestone.json')
    .then(res => res.json())
    .then(data => displayData(data.data))
}

const displayData = data =>{
    // console.log(data.tools)
    const container = document.getElementById("sidebar-id");
    data.tools.forEach( singleTool =>{
        // console.log(singleTool)
        const createDiv = document.createElement("div");
        createDiv.innerHTML = `
        <a href="#" onclick="loadDetails('${singleTool.id}')" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="list-group-item fw-bold text-secondary list-group-item-action mb-2">${singleTool.name}</a>
        `;
        container.appendChild(createDiv);
    });
}

const loadDetails = id =>{
    const url = `/all-milestone/milestone-seven/module${id}.json`
    fetch(url)
    .then(res => res.json())
    .then(data=> displayDetails(data))
}

const displayDetails = details =>{
    // console.log(details)
    const container = document.getElementById("modal-area");
    container.textContent = '';
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
    <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">${details.data.description}</h1>
        </div>
        <div class="modal-body">
        <p>${details.data.description}</p>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
    `;
    container.appendChild(createDiv)
}
loadData()