'use strict'

import { getAlunos, getAlunosStatus } from "./api.js"

// Local Storage
const curso = localStorage.getItem('curso')
const nomeDoCurso = localStorage.getItem('nomeCurso')

const listaAlunos = await getAlunos(curso)
const listaAlunosCursando = await getAlunosStatus('Cursando')
const listaAlunosFinalizado = await getAlunosStatus('Finalizado')

// Button voltar
const exit = () => {
    const buttonSair = document.querySelector('.button__sair')
    buttonSair.onclick = function () {
        window.location.href = "./index.html";
    }
}
exit()

//Função que verifica se o aluno é do curso
const verificacaoAluno = (array) => {
    let listaAlunos = array
    let arrayAlunos = []

    listaAlunos.forEach((aluno) => {
        let jsonAluno = {}
        if (aluno.curso == nomeDoCurso) {
            jsonAluno = {
                nome: aluno.nome,
                foto: aluno.foto,
                matricula: aluno.matricula,
                sexo: aluno.sexo,
                status: aluno.status,
                curso: aluno.curso
            }
            arrayAlunos.push(jsonAluno)
        }
    })
    let informacoes = {
        arrayAlunos
    }
    return informacoes
}

//Função que cria os cards dos alunos da escola
const criarCards = (aluno) => {
    const nomeCurso = document.querySelector('.nome__curso')
    nomeCurso.textContent = nomeDoCurso

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

//Função que carrega todos os cards e filtra
const carregarCards = () => {
    const containerCards = document.querySelector('.container__cards')

    const status = document.getElementById('status')
    const cursando = document.getElementById('cursando')
    const finalizado = document.getElementById('finalizado')

    let alunos = listaAlunos.informacoes.map(criarCards)
    containerCards.replaceChildren(...alunos)

    const inputYear = document.getElementById('input-year')
    inputYear.addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
            const ano = inputYear.value
            let jsonAlunos = alunosAno(listaAlunos.informacoes, ano)
            alunos = jsonAlunos.listaAlunos.map(criarCards)
            containerCards.replaceChildren(...alunos)
        }
    })

    cursando.onclick = () => {
        filtrarAnoComStatus(listaAlunosCursando.informacoes)
    }

    finalizado.onclick = () => {
        filtrarAnoComStatus(listaAlunosFinalizado.informacoes)
    }

    status.onclick = () => {
        filtrarAnoComStatus(listaAlunos.informacoes)
    }
}

const filtrarAnoComStatus = (listaArray) =>{
    let lista = listaArray

    const containerCards = document.querySelector('.container__cards')
    const inputYear = document.getElementById('input-year')
    
    let jsonAlunos = verificacaoAluno(lista)
    let alunos = jsonAlunos.arrayAlunos.map(criarCards)
    containerCards.replaceChildren(...alunos)
    inputYear.addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
            const ano = inputYear.value
            const arrayAlunos = alunosAno(lista, ano)
            jsonAlunos = verificacaoAluno(arrayAlunos.listaAlunos)
            alunos = jsonAlunos.arrayAlunos.map(criarCards)
            containerCards.replaceChildren(...alunos)
        }   
    })
}

const alunosAno = (array, anoConclusao) => {
    let ano = anoConclusao
    let lista = array
    let jsonAluno = {}
    let listaAlunos = []
    let jsonLista = {}

    lista.forEach((aluno) => {
        if (aluno.dataConclusao == ano) {
            jsonAluno = {
                nome: aluno.nome,
                foto: aluno.foto,
                matricula: aluno.matricula,
                sexo: aluno.sexo,
                status: aluno.status,
                curso: aluno.curso
            }
            listaAlunos.push(jsonAluno)
        }
    })
    jsonLista = {
        listaAlunos
    }
    return jsonLista
}

carregarCards()
