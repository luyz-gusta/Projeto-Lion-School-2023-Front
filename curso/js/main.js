'use strict'

// import { alunos } from '../../json/alunos.js'

import { getAlunos } from "./api.js"

const curso = localStorage.getItem('curso')

const listaAlunos = await getAlunos(curso)

const exit = () => {
    const buttonSair = document.querySelector('.button__sair')
    buttonSair.onclick = function () {
        window.location.href = "./aluno.html";
    }
}

exit()


const criarCards = (aluno) => {

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

    return cardAluno
}

const carregarCards = () => {
    const containerCards = document.querySelector('.container__cards')
    const alunos = listaAlunos.informacoes.map(criarCards)
    containerCards.replaceChildren(...alunos)
}



carregarCards()
