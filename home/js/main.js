'use strict'

// import {cursos} from "../../json/cursos.js"

import { getCursos } from "./api.js"

const dadosCursos = await getCursos()

const cursos = (curso, indice) => {
    const cardCurso = document.createElement('div')
    cardCurso.classList.add('card__curso')
    
    const nomeCurso = document.createElement('div')
    nomeCurso.classList.add('nome__curso')
    nomeCurso.textContent = curso.sigla

    const imgCurso = document.createElement('img')
    imgCurso.src = `${curso.icone}`
    imgCurso.classList.add('img__curso')
    imgCurso.alt = `Imagem do curso de ${curso.sigla}`

    cardCurso.append(imgCurso, nomeCurso)

    cardCurso.addEventListener('click', () => {
        localStorage.setItem('curso', nomeCurso.textContent)
        localStorage.setItem('nomeCurso', curso.nome)
        window.location.href = './curso.html'
    })

    return cardCurso
}

const carregarCursos = () =>{
    const containerCursos = document.querySelector('.container__cursos')
    const listaCursos = dadosCursos.cursos.map(cursos)
    containerCursos.replaceChildren(...listaCursos)
}

const exit = () => {
    const buttonSair = document.querySelector('.button__sair')
    buttonSair.onclick = function () {
        const exit = window.confirm("Deseja fechar do site?")
        if(exit){
            window.close()
        }
    }
}
carregarCursos()

exit()