let formContainer = document.getElementsByClassName("signup-input-container")[0]

function createFormElements() {
    let div = document.createElement("div")
    div.classList.add("signup-input")

    let label = document.createElement("label")
    label.textContent = "Password"

    let input = document.createElement("input")
    input.setAttribute("type", "password")
    input.setAttribute("name", "password")
    input.setAttribute("id", "password")

    div.appendChild(label)
    div.appendChild(input)

    formContainer.appendChild(div)
}