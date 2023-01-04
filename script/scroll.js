export function scroll(){
    const doces = document.querySelector(".doces")
    const ovos = document.querySelector(".ovos")
    const cia = document.querySelector(".cia")
    const btRight = document.querySelectorAll(".right")
    const btLeft= document.querySelectorAll(".left")

    console.log("ativado")
    btRight.forEach((btn, index)=>{
        btn.addEventListener("click", ()=>{
            if(index === 0){
                doces.scrollBy(100, 0)
            }
            if(index === 1){
                ovos.scrollBy(100, 0)
            }
            if(index === 2){
                cia.scrollBy(100, 0)
            }
        })
    })

    btLeft.forEach((btn, index)=>{
        btn.addEventListener("click", ()=>{
            if(index === 0){
                doces.scrollBy(-100, 0)
            }
            if(index === 1){
                ovos.scrollBy(-100, 0)
            }
            if(index === 2){
                cia.scrollBy(-100, 0)
            }
        })
    })
}