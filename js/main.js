// import { arreyProjeto } from "./dados.js";
// import { create } from "./projetos.js";

//criando menu dispositivo movel
const menu = document.querySelector(".menu")
const imgMemu = document.querySelector(".img-menu")
const itensMenu = document.querySelector(".alinhamento-nave")
const divMenu = document.querySelector(".t")

menu.addEventListener("click", ()=>{
    if (imgMemu.classList.contains("aberto")){
        imgMemu.classList.remove('aberto')
        imgMemu.classList.add('fechado')
        divMenu.innerHTML = 
            `  <ul class="alinhamento-nave-menu">
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#sobre">Sobre mim</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            `
        divMenu.style.display = 'flex'
        }

    else{
        imgMemu.classList.remove('fechado')
        imgMemu.classList.add('aberto')
        
        divMenu.innerHTML = ''
    }
})
//fechando menu ao clicar em um botao(link)
divMenu.addEventListener('click', (evento)=>{
    if(evento.target.tagName === 'A'){
        divMenu.style.display = 'none'
        imgMemu.classList.add('aberto')
        imgMemu.classList.remove('fechado')
    }
})

//removendo bug de menu aberto ao esticar tela
if(itensMenu.style.display === 'flex'){
    console.log('click 1')
    divMenu.innerHTML = ''
}



// mudando cor do botão enviar
const btnProjetos = document.querySelector(".but-projetos")
const btnComigo = document.querySelector(".but-comigo")
const circulo = document.querySelector(".circulo")
const projetos = document.querySelector("#projetos") 
const contato = document.querySelector("#contato") 

btnProjetos.addEventListener('mouseenter', () =>{
    btnProjetos.style.transition = '0.2s'
    btnProjetos.style.backgroundColor = '#3b82f6'
    circulo.style.backgroundColor = '#76a4ec'
    circulo.style.transition = '0.2s'
})
btnProjetos.addEventListener('mouseleave', () => {
    btnProjetos.style.backgroundColor = ''
    circulo.style.backgroundColor = ''
});


// levando tela até a parte dos projetos
btnProjetos.addEventListener('click',function(){
    projetos.scrollIntoView({
        behavior: "smooth"
    })
})

// levando tela até a parte do contato
btnComigo.addEventListener('click',function(){
    contato.scrollIntoView({
        behavior: "smooth"
    })
    console.log('ola')
})

//dando vida ao card dos projetos
const cards = document.querySelectorAll(".card-projetos")

cards.forEach(card=>{
    card.addEventListener('mouseenter', ()=>{
        card.style.color ='#3b82f6'
        card.children[3].children[0].style.backgroundColor = '#0f172a'
        card.children[3].children[0].style.fill = 'white';
        card.children[3].children[0].style.transition = '0.15s'
        card.style.transition = '0.15s'
    })
});

cards.forEach(card=>{
    card.addEventListener('mouseleave', ()=>{
        card.style.color =''
        const img = card.lastElementChild
        card.children[3].children[0].style.backgroundColor = ''
        card.children[3].children[0].style.fill = '';

    })
});

