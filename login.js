// function validate(){
//     let email = document.getElementById('email').value;
//     console.log(email);
//     let password = document.getElementById('Password').value;
//     console.log(password);
// }

console.log(document)

let userInput = {
    email: "",
    password: ""
}

document.getElementById('email').addEventListener("keyup", (e) => {
    userInput[e.target.name] = e.target.value
})

document.getElementById('password').addEventListener("keyup", (e) => {
    userInput[e.target.name] = e.target.value
})

function clickHandler() {
    console.log(userInput)
}
