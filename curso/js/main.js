'use strict'

import { getAlunos } from "./api.js"

import { getAlunosStatus } from "./api.js"

const curso = localStorage.getItem('curso')

// const status = document.getElementById('status')
// const cursando = document.getElementById('cursando')
// const finalizado = document.getElementById('finalizado')
// var statusVariado

// status.onclick = () => {
//     statusVariado = 'status'
//     return statusVariado
// }

// cursando.onclick = () => {
//     statusVariado = 'cursando'
//     return statusVariado
// }

// finalizado.onclick = () =>  {
//     statusVariado = 'finalizado'
//     return statusVariado
// }

const listaAlunos = await getAlunos(curso)
// const listaAlunosFiltrado = await getAlunosStatus(statusVariado)

const exit = () => {
    const buttonSair = document.querySelector('.button__sair')
    buttonSair.onclick = function () {
        window.location.href = "./index.html";
    }
}

exit()


const criarCards = (aluno) => {
    const containerCursos = document.querySelector('.container__cursos')

    const nomeCurso = document.createElement('h1')
    nomeCurso.classList.add('nome__curso')
    nomeCurso.textContent = aluno.curso

    containerCursos.replaceChildren(nomeCurso)

    const cardAluno = document.createElement('div')

    const imgAluno = document.createElement('img')
    const nomeAluno = document.createElement('div')
    if (aluno.status == 'Cursando') {
        cardAluno.classList.add('card__aluno__cursando')
    } else {
        cardAluno.classList.add('card__aluno__finalizado')
    }

    imgAluno.src = `${aluno.foto}`
    imgAluno.classList.add('img__aluno')

    nomeAluno.classList.add('nome__aluno')
    nomeAluno.textContent = aluno.nome

    cardAluno.append(imgAluno, nomeAluno)

    cardAluno.addEventListener('click', () => {
        localStorage.setItem('matricula', aluno.matricula)
        window.location.href = './aluno.html'
    })

    return cardAluno
}

const carregarCards = () => {
    const containerCards = document.querySelector('.container__cards')
    const alunos = listaAlunos.informacoes.map(criarCards)
    containerCards.replaceChildren(...alunos)
}


carregarCards()
