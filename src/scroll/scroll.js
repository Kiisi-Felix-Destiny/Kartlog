export const scrollLock = () =>{
    let scrollBody = document.querySelector("body");
    scrollBody.style.overflow = "hidden"
}
export const scrollUnLock = () =>{
    let scrollBody = document.querySelector("body");
    scrollBody.style.overflow = "visible"
}