function showElementById(id) {
    let element =  document.getElementById(id);
    element.classList.remove("hide");
}

function hideElementById(id) {
    let element =  document.getElementById(id);
    element.classList.add("hide");
}
