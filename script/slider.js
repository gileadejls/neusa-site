
//Função de Slider
export function slider(){
    
    const images = document.querySelectorAll(".slider img")
    let cont = 4
    let form = 100


    window.addEventListener("load", ()=>{

        // Altera o eixo X de cada Imagem
        setInterval(()=>{
            images[cont].style = `transform: translateX(-100%)`
            cont--

            // Quando o contador for < 0 ele Altera o EixoX de todas as IMG para 0
            if(cont === -1){
                images[0].style = `transform: translateX(0%)`
                images[1].style = `transform: translateX(0%)`
                images[2].style = `transform: translateX(0%)`
                images[3].style = `transform: translateX(0%)`
                images[4].style = `transform: translateX(0%)`
                cont = 4
            }
        }, 7000)
    })
}