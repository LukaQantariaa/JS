const db = new api();
const template = new Template();

// HTML elements
const usersDiv = document.getElementById('usersDiv');
const modalContent = document.getElementById('modal-content')



function getUsers(){
    db.getUsers().then((res) => {
        res.forEach((user) => {
            console.log(user)
            usersDiv.innerHTML += template.getCard(user.name, user.username, "./assets/outrun-vaporwave-hd-wallpaper-thumb.jpg", "See user", user.id)
        })
        
    })
}

async function modalSuccess(id){
    await db.deleteUser(id).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err);
    })
}

async function modalCreate(id){
    console.log('Modal create');
    const userInfo = await db.getuserById(id).then((user) => {
        return user;
    });
    console.log(userInfo)
    modalContent.innerHTML = template.modalContent("Do you want delete this user?", `This user name is: <b>${userInfo.name}</b> <br> and email is: <b>${userInfo.email}</b>`, id)
}


// Start
getUsers();