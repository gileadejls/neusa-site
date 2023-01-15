
// Função que identifica o Item o armazena no LocalStorage
export function redirect(){

    const button = document.querySelectorAll(".card button")
    let selected = ""
    
    button.forEach((item)=>{
        item.addEventListener(("click"), ()=>{
            window.localStorage.setItem("imagem",`${item.className}`)

        })
    })
}