(()=>{"use strict";!function(){const e=document.querySelectorAll(".slider img");let o=4;window.addEventListener("load",(()=>{setInterval((()=>{e[o].style="transform: translateX(-100%)",o--,-1===o&&(e[0].style="transform: translateX(0%)",e[1].style="transform: translateX(0%)",e[2].style="transform: translateX(0%)",e[3].style="transform: translateX(0%)",e[4].style="transform: translateX(0%)",o=4)}),7e3)}))}(),function(){const e=document.querySelector(".menu-icon"),o=document.querySelector(".mobile-menu");e.addEventListener("click",(()=>{localStorage.removeItem("imagem"),o.classList.contains("open")?o.classList.remove("open"):o.classList.add("open")}))}(),document.querySelectorAll(".card button").forEach((e=>{e.addEventListener("click",(()=>{window.localStorage.setItem("imagem",`${e.className}`)}))})),function(){if(localStorage.getItem("imagem")){let e=localStorage.getItem("imagem");const o=document.querySelector(".imagem-principal"),t=(document.querySelector(".nome-produto"),document.querySelector(".produto-price h2")),a=document.querySelector(".produto-price p"),n=document.querySelector(".d1"),r=document.querySelector(".d2"),c=document.querySelectorAll(".imagens-container .img-box");o.style=`\n        background: url("../imagens/produtos/${e}.png");\n        height: 100%;\n        background-position: center;\n        background-size: contain;\n        background-repeat: no-repeat;\n        `,c.forEach((o=>{o.style=`\n            width: 100%;\n            height: 100%;\n            background: url("../../imagens/produtos/${e}.jpg");\n            background-size: contain;\n            background-position: center;\n            background-repeat: no-repeat;\n            `})),"brownie"===e&&(t.textContent="Brownie (Varios sabores)",a.textContent="Preço a combinar",n.textContent="Brownie Tradicional",r.textContent="Receita de brownie tradicional da Neusa Barbosa, Não perca!"),"brigadeiro"===e&&(t.textContent="Brigadeiro (chocolate/beijinho)",a.textContent="Preço a combinar",n.textContent="O brigadeiro doce e delicioso que combina com qualquer hora, clima ou ocasião.",r.textContent="Sabor: chocolate / Coco"),"bolo"===e&&(t.textContent="Bolo 500g/1kg (varios sabores)",a.textContent="Preço a combinar",n.textContent="Bolo recheado a sua preferência ao seu gosto!",r.textContent="Recheio: A sua prerência"),"pote"===e&&(t.textContent="Bolo de pote (varios sabores)",a.textContent="Preço a combinar",n.textContent="O Bolo de pote doce e delicioso que combina com qualquer hora, clima ou ocasião.",r.textContent="Recheio: A sua prerência"),"salgado"===e&&(t.textContent="Salgados (Varias opções)",a.textContent="Preço a combinar",n.textContent="Coxinhas / Kibes / Bolinho de frango / Enroladinhos e etc",r.textContent="Recheio: A sua prerência"),"pasteis"===e&&(t.textContent="Pasteis (varios sabores)",a.textContent="Preço a combinar",n.textContent="Pasteis quentinhos e feito na hora!",r.textContent="Recheio: A sua prerência"),"ovo-pascoa"===e&&(t.textContent="Ovo de colher 500g/1kg (Varias Opções)",a.textContent="Preço a combinar",n.textContent=" Sim, ovo de colher é bom demais. E quanto mais variedades de sabores, melhor!",r.textContent="Recheio: A sua prerência"),"ovo-pascoa2"===e&&(t.textContent="Ovo de colher 500g/1kg (Varias Opções)",a.textContent="Preço a combinar",n.textContent=" Sim, ovo de colher é bom demais. E quanto mais variedades de sabores, melhor!",r.textContent="Recheio: A sua prerência"),"ovo-pascoa3"===e&&(t.textContent="Ovo de colher 500g/1kg (Varias Opções)",a.textContent="Preço a combinar",n.textContent=" Sim, ovo de colher é bom demais. E quanto mais variedades de sabores, melhor!",r.textContent="Recheio: A sua prerência"),"ovo-pascoa4"===e&&(t.textContent="Ovo de colher 500g/1kg (Varias Opções)",a.textContent="Preço a combinar",n.textContent=" Sim, ovo de colher é bom demais. E quanto mais variedades de sabores, melhor!",r.textContent="Recheio: A sua prerência"),"pudim"===e&&(t.textContent="pudim 500g/1kg (Varias coberturas)",a.textContent="Preço a combinar",n.textContent="Pudim deliciosos que combina com qualquer hora, clima ou ocasião.",r.textContent="Recheio: A sua prerência"),"enroladinho"===e&&(t.textContent="Enroladinho de salsicha",a.textContent="Preço a combinar",n.textContent="Enroladinho de salsicha deliciosos que combina com qualquer hora, clima ou ocasião.",r.textContent="Recheio: A sua prerência"),"pao"===e&&(t.textContent="Pães Caseiros (recheio a combinar)",a.textContent="Preço a combinar",n.textContent="Pães caseiros deliciosos com ou sem recheio!",r.textContent="Recheio: A sua prerência"),"torta"===e&&(t.textContent="Torta doce (recheio a combinar)",a.textContent="Preço a combinar",n.textContent="Tortas deliciosas que combina com qualquer hora, clima ou ocasião.",r.textContent="Recheio: A sua prerência"),"cupcake"===e&&(t.textContent="Cupcakes (Varios sabores)",a.textContent="Preço a combinar",n.textContent="Cupcakes que combina com qualquer hora, clima ou ocasião.",r.textContent="Recheio: A sua prerência"),"biscoito"===e&&(t.textContent="Biscoitos Cookies (Varios sabores)",a.textContent="Preço a combinar",n.textContent="Biscoitos com pingos de chocolates ou ao seu gosto",r.textContent="Recheio: A sua prerência"),"donuts"===e&&(t.textContent="Donuts (Diversos recheios)",a.textContent="Preço a combinar",n.textContent="Donuts com variaveis sabores e recheios pra você aproveitar!",r.textContent="Recheio: A sua prerência")}}(),function(){if(document.URL.includes("compra")){const e=document.querySelector(".produto-price button a");let o="",t=localStorage.getItem("imagem");"ovo-pascoa"===t&&(o="Ovo%20de%20colher"),"ovo-pascoa2"===t&&(o="Ovo%20de%20colher"),"ovo-pascoa3"===t&&(o="Ovo%20de%20colhera"),"ovo-pascoa4"===t&&(o="Ovo%20de%20colher"),"torta"===t&&(o="A%20Torta"),"pudim"===t&&(o="O%20Pudim"),"biscoito"===t&&(o="Os%20Biscoitos"),"cupcake"===t&&(o="Os%20Cupcakes"),"brownie"===t&&(o="O%20Brownie"),"brigadeiro"===t&&(o="O%20Brigadeiro"),"bolo"===t&&(o="O%20bolo"),"ovo-pascoa"===t&&(o="Ovo%20de%20páscoa"),"pote"===t&&(o="O%20Bolo%20de%20Pote"),"ovo-pascoa"===t&&(o="Ovo%20de%20páscoa"),"pasteis"===t&&(o="Os%20Pasteis"),"enroladinho"===t&&(o="Os%20Enroladinhos%20De%20Salsicha"),"pao"===t&&(o="Os%20pães%20Caseiros"),window.addEventListener("load",(()=>{e.href="https://wa.me/15996870204?text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%3A%20"+o}))}}(),function(){const e=document.querySelector(".doces"),o=document.querySelector(".ovos"),t=document.querySelector(".cia"),a=document.querySelectorAll(".right"),n=document.querySelectorAll(".left");console.log("ativado"),a.forEach(((a,n)=>{a.addEventListener("click",(()=>{0===n&&e.scrollBy(100,0),1===n&&o.scrollBy(100,0),2===n&&t.scrollBy(100,0)}))})),n.forEach(((a,n)=>{a.addEventListener("click",(()=>{0===n&&e.scrollBy(-100,0),1===n&&o.scrollBy(-100,0),2===n&&t.scrollBy(-100,0)}))}))}(),function(){const e=document.querySelector(".modal-container"),o=document.querySelector(".close"),t=document.querySelector(".container");"true"===window.localStorage.getItem("modal")||(e.style="display: flex",e&&(document.addEventListener("load",(()=>{t.style="opacity: .4;"})),o.addEventListener("click",(()=>{t.style="opacity: 1;",localStorage.setItem("modal",!0),e.style="display: none"}))))}()})();