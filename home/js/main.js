'use strict'

import {cursos} from "../../json/cursos.js"

const dadosCursos = cursos

export const getCursos = (cursos, indice) => {
    const cardCurso = document.createElement('div')
    cardCurso.classList.add('card__curso')

    const imgCurso = document.createElement('img')
    imgCurso.src = `./${dadosCursos[indice].icone}`
    imgCurso.classList.add('img__curso')
    
    const nomeCurso = document.createElement('div')
    nomeCurso.classList.add('nome__curso')
    nomeCurso.textContent = dadosCursos[indice].sigla

    cardCurso.append(imgCurso, nomeCurso)

    const clickCuros = cardCurso.addEventListener('click',  (event) => {
        window.location.href = ('http://127.0.0.1:5500/curso/index.html')
    })

    return cardCurso
}

const carregarCursos = () =>{
    const containerCursos = document.querySelector('.container__cursos')
    const listaCursos = dadosCursos.map(getCursos)
    containerCursos.replaceChildren(...listaCursos)
}

const exit = () => {
    const buttonSair = document.querySelector('.button__sair')
    buttonSair.onclick = function () {
        window.close()
        console.log('teste')
    }
}
carregarCursos()

exit()