// mudando cor do botão enviar
let btnProjetos = document.querySelector(".but-projetos")
let circulo = document.querySelector(".circulo")

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
