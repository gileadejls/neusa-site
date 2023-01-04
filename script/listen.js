
// Função que Muda o HTML conforme o Item Selecionado
export function listen(){

    // Verificado se á Informação no LocalStorage
    if(localStorage.getItem("imagem")){
        let selected = localStorage.getItem("imagem")

        const imagem = document.querySelector(".imagem-principal")
        const name = document.querySelector(".nome-produto")
        const produtoName = document.querySelector(".produto-price h2")
        const produtoPrice = document.querySelector(".produto-price p")
        const desc = document.querySelector(".d1")
        const desc2 = document.querySelector(".d2")
        const boximg = document.querySelectorAll(".imagens-container .img-box")

        imagem.style = `
        background: url("../imagens/produtos/${selected}.png");
        height: 100%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        `

        boximg.forEach((item)=>{
            item.style = 
            `
            width: 100%;
            height: 100%;
            background: url("../../imagens/produtos/${selected}.jpg");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            `
        })


        if(selected === "brownie"){
            produtoName.textContent = "Brownie (Varios sabores)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = "Brownie Tradicional"
            desc2.textContent ="Receita de brownie tradicional da Neusa Barbosa, Não perca!"
        }
        if(selected === "brigadeiro"){
            produtoName.textContent = "Brigadeiro (chocolate/beijinho)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = "O brigadeiro doce e delicioso que combina com qualquer hora, clima ou ocasião."
            desc2.textContent = "Sabor: chocolate / Coco"
        }
        if(selected === "bolo"){
            produtoName.textContent = "Bolo 500g/1kg (varios sabores)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = "Bolo recheado a sua preferência ao seu gosto!"
            desc2.textContent = "Recheio: A sua prerência"
        }
        if(selected === "pote"){
            produtoName.textContent = "Bolo de pote (varios sabores)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = "O Bolo de pote doce e delicioso que combina com qualquer hora, clima ou ocasião."
            desc2.textContent = "Recheio: A sua prerência"
        }
        if(selected === "salgado"){
            produtoName.textContent = "Salgados (Varias opções)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = "Coxinhas / Kibes / Bolinho de frango / Enroladinhos e etc"
            desc2.textContent = "Recheio: A sua prerência"
        }
        if(selected === "pasteis"){
            produtoName.textContent = "Pasteis (varios sabores)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = "Pasteis quentinhos e feito na hora!"
            desc2.textContent = "Recheio: A sua prerência"
        }
        if(selected === "ovo-pascoa"){
            produtoName.textContent = "Ovo de colher 500g/1kg (Varias Opções)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = " Sim, ovo de colher é bom demais. E quanto mais variedades de sabores, melhor!"
            desc2.textContent = "Recheio: A sua prerência"
        }
        if(selected === "ovo-pascoa2"){
            produtoName.textContent = "Ovo de colher 500g/1kg (Varias Opções)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = " Sim, ovo de colher é bom demais. E quanto mais variedades de sabores, melhor!"
            desc2.textContent = "Recheio: A sua prerência"
        }
        if(selected === "ovo-pascoa3"){
            produtoName.textContent = "Ovo de colher 500g/1kg (Varias Opções)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = " Sim, ovo de colher é bom demais. E quanto mais variedades de sabores, melhor!"
            desc2.textContent = "Recheio: A sua prerência"
        }
        if(selected === "ovo-pascoa4"){
            produtoName.textContent = "Ovo de colher 500g/1kg (Varias Opções)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = " Sim, ovo de colher é bom demais. E quanto mais variedades de sabores, melhor!"
            desc2.textContent = "Recheio: A sua prerência"
        }
        if(selected === "pudim"){
            produtoName.textContent = "pudim 500g/1kg (Varias coberturas)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = "Pudim deliciosos que combina com qualquer hora, clima ou ocasião."
            desc2.textContent = "Recheio: A sua prerência"
        }
        if(selected === "enroladinho"){
            produtoName.textContent = "Enroladinho de salsicha"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = "Enroladinho de salsicha deliciosos que combina com qualquer hora, clima ou ocasião."
            desc2.textContent = "Recheio: A sua prerência"
        }
        if(selected === "pao"){
            produtoName.textContent = "Pães Caseiros (recheio a combinar)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = "Pães caseiros deliciosos com ou sem recheio!"
            desc2.textContent = "Recheio: A sua prerência"
        }
        if(selected === "torta"){
            produtoName.textContent = "Torta doce (recheio a combinar)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = "Tortas deliciosas que combina com qualquer hora, clima ou ocasião."
            desc2.textContent = "Recheio: A sua prerência"
        }
        if(selected === "cupcake"){
            produtoName.textContent = "Cupcakes (Varios sabores)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = "Cupcakes que combina com qualquer hora, clima ou ocasião."
            desc2.textContent = "Recheio: A sua prerência"
        }
        if(selected === "biscoito"){
            produtoName.textContent = "Biscoitos Cookies (Varios sabores)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = "Biscoitos com pingos de chocolates ou ao seu gosto"
            desc2.textContent = "Recheio: A sua prerência"
        }
        if(selected === "donuts"){
            produtoName.textContent = "Donuts (Diversos recheios)"
            produtoPrice.textContent = "Preço a combinar"
            desc.textContent = "Donuts com variaveis sabores e recheios pra você aproveitar!"
            desc2.textContent = "Recheio: A sua prerência"
        }
        }
    
}

// Função que Altera a Mensagem conforme o Item Selecionado
export function sendMessage(){

    //Verifica se a Pagina é a pagina de compra
    if(document.URL.includes("compra")){
    
        const button = document.querySelector(".produto-price button a")
        let item = ""
        let selected = localStorage.getItem("imagem")
        if(selected === "ovo-pascoa"){
            item = "Ovo%20de%20colher"
        }
        if(selected === "ovo-pascoa2"){
            item = "Ovo%20de%20colher"
        }
        if(selected === "ovo-pascoa3"){
            item = "Ovo%20de%20colhera"
        }
        if(selected === "ovo-pascoa4"){
            item = "Ovo%20de%20colher"
        }
        if(selected === "torta"){
            item = "A%20Torta"
        }
        if(selected === "pudim"){
            item = "O%20Pudim"
        }
        if(selected === "biscoito"){
            item = "Os%20Biscoitos"
        }
        if(selected === "cupcake"){
            item = "Os%20Cupcakes"
        }
        if(selected === "brownie"){
            item = "O%20Brownie"
        }
        if(selected === "brigadeiro"){
            item = "O%20Brigadeiro"
        }
        if(selected === "bolo"){
            item = "O%20bolo"
        }
        if(selected === "ovo-pascoa"){
            item = "Ovo%20de%20páscoa"
        }
        if(selected === "pote"){
            item = "O%20Bolo%20de%20Pote"
        }
        if(selected === "ovo-pascoa"){
            item = "Ovo%20de%20páscoa"
        }
        if(selected === "pasteis"){
            item = "Os%20Pasteis"
        }
        if(selected === "enroladinho"){
            item = "Os%20Enroladinhos%20De%20Salsicha"
        }
        if(selected === "pao"){
            item = "Os%20pães%20Caseiros"
        }

        window.addEventListener("load", ()=>{
            button.href = `https://wa.me/15996870204?text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%3A%20` + item
        })
        }
}