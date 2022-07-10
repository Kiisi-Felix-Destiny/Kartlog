export const scrollLock = () =>{
    let scrollBody = document.querySelector("body");
    let pop = document.querySelector(".popup-container");
    scrollBody.classList.add("scroll")
}
export const scrollUnLock = () =>{
    let scrollBody = document.querySelector("body");
    scrollBody.classList.remove("scroll")
    
}