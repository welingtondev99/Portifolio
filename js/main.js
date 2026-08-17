// import { arreyProjeto } from "./dados.js";
// import { create } from "./projetos.js";

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

