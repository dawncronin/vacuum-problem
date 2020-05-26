document.addEventListener("DOMContentLoaded", (event) => {
    let inputField = getElementByID("info")
    inputField.addEventListener("change", processFile(event))
  })

function processFile(event) {
    console.log(event)
}