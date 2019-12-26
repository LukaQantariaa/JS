class Template {
    constructor(){

    }

    getCard(title = "", text = "", image = "", btn = "Button", userId = "") {
        return `<div class="card" style="width: 12rem; display: inline-block">
        <!--img src="${image}" class="card-img-top" alt="..."-->
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${text}</p>
          <button type="button" class="btn btn-primary" data-id="${userId}" data-toggle="modal" data-target="#exampleModal" onclick="modalCreate(${userId})">
                update User
          </button>
        </div>
        </div>`
    }

    modalContent(title = "", body = "", userId=""){
        return `<div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        ${body}
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="modalSuccess(${userId})">Save changes</button>
        </div>`
    }
}