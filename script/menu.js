export function ShowMenu(){
    const menu = document.querySelector(".menu-icon")
    const navbar = document.querySelector(".mobile-menu")

    menu.addEventListener("click", ()=>{
        localStorage.removeItem("imagem")
        if(navbar.classList.contains("open")){
            navbar.classList.remove("open")
        }else{
            navbar.classList.add("open")
        }
    })
}
