export function modal(){


    const modalElement = document.querySelector(".modal-container")
    const button = document.querySelector(".close")
    const container = document.querySelector(".container")
    let active = true

    if(window.localStorage.getItem("modal") === "true"){
        return
    }else{
        modalElement.style = "display: flex"
        if(modalElement){
            window.addEventListener("load", ()=>{
                container.style = "opacity: .4;"
            })
        
            button.addEventListener("click", ()=>{
                container.style = "opacity: 1;"
                localStorage.setItem("modal", active)
                modalElement.style = "display: none"
            })
        }
    }
}