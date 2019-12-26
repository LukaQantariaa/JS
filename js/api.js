class api {
    constructor(key) {
        this.url = `https://jsonplaceholder.typicode.com`
    }

    getUsers() {
        return fetch(`${this.url}/users`)
            .then( res=> res.json())
    }

    getuserById(id) {
        return fetch(`${this.url}/users/${id}`)
            .then( res=> res.json())
    }

    deleteUser(id){
        const other_params = {
            headers : { "content-type" : "application/json; charset=UTF-8" },
            body : "",
            method : "DELETE",
            mode : "cors"
        };

        return fetch(`${this.url}/posts/${id}`, other_params)
            .then(res => res.json())
    }

}