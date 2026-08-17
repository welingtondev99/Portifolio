import { arreyProjeto } from "./dados.js";


export const create = document.querySelector(".add_projetos")

create.innerHTML = arreyProjeto.map(
    (create, index) =>{
        `<article class="projeto">
        <span class="projeto__numero">0${index + 1}</span>
        <h3 class="projeto__titulo">${arreyProjeto.titulo}</h3>
        <p class="projeto__ano">${arreyProjeto.ano}</p>
        <p class="projeto__resumo">${arreyProjeto.resumo}</p>
        <div class="projeto__stack">
          ${create.stack.map((tech) => `<span>${tech}</span>`).join("")}
        </div>
      </article>`
    }
)