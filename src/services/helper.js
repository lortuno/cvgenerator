/*
 * Funciones para los layouts.
 */
export const showElementById = function showElementById(id) {
    let element =  document.getElementById(id);
    element.classList.remove("hide");
};

export const hideElementById = function hideElementById(id) {
    let element =  document.getElementById(id);
    element.classList.add("hide");
};
