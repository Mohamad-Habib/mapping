const addBtnEl = document.getElementById("addBtn")
const userListEl = document.getElementById("userList")
// const liEl = document.createElement("li")
const addToListEl = document.getElementById("addToList")
document.title = "list"
let username = []

// let username = ["admin01","admin02","admin03"]
// console.log(username)
// username.push("admin04")  //mnzid 3l a5ir
// console.log(username)
// username.push("admin05")
// console.log(username)
// username.pop()  // bym7e e5er we7de
// console.log(username)
// username.unshift("admin00")  //bzid 3l awal
// console.log(username)
// username.shift()  //bym7e mnl awel
// console.log(username)


addBtnEl.addEventListener("click",function(){
    username = []
    let newInput = addToListEl.value
    username.push(newInput)
    for (let i in username){
        userListEl.innerHTML +=
         `<li style="margin-left:20px;">${username[i]}</li>`
    }
    addToListEl.value = ""
// console.log(username)
})