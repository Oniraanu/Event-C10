// function validate(){
//     let email = document.getElementById('email').value;
//     console.log(email);
//     let password = document.getElementById('Password').value;
//     console.log(password);
// }

// let userObject = users[i]
//                 if (userObject.email === email) {
//                     user = userObject
//                     if (user.password === password) {
//                         alert("Welcome to Dekanords Event")
//                         return
//                     } else {
//                         alert("Incorrect password: " + password)
//                         return

console.log(document)

let userInput = {
    email: "",
    password: ""
}

document.getElementById('email').addEventListener("input", (e) => {
    userInput[e.target.name] = e.target.value
})

document.getElementById('password').addEventListener("input", (e) => {
    userInput[e.target.name] = e.target.value
})

function clickHandler() {
    let {email, password} = userInput
    if (email === "" || password === "") {
        alert("Please enter your details")
        return
    } else {
        if (localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users"))
            let user;
            for(let i = 0; i < users.length; i++) {
                if (users[i].email === email) {
                    user = users[i]
                }
            }
            if (Object.keys(user).length > 0) {
                if (user.password === password) {
                    alert ("Welcome to Deka-norbs Event")
                    return
                } else {
                    alert ("Please enter a correct password")
                }
            } else {
                alert("Please enter a valid email address")
                return
            }         
        }
    } 
}
