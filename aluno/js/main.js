'use strict'

import {
    alunos
} from "../../json/alunos.js"

const matricula = '20151001002'

const exit = () => {
    const buttonSair = document.querySelector('.button__sair')
    buttonSair.onclick = function () {
        window.close()
        console.log('teste')
    }
}


const criarCardsAluno = (aluno) => {
    if (aluno.matricula == matricula) {
        const cardAluno = document.createElement('div')
        cardAluno.classList.add('card-aluno')

        const fotoAluno = document.createElement('img')
        fotoAluno.src = alunos[0].foto
        fotoAluno.classList.add('image-aluno')

        const nomeAluno = document.createElement('p')
        nomeAluno.classList.add('name-aluno')
        nomeAluno.textContent = aluno.nome

        cardAluno.append(fotoAluno, nomeAluno)

        return cardAluno
    }else{
        return ''
    }
}

const criarCardNota = (notas) => {

    const cardNotas = document.createElement('div')
    cardNotas.classList.add('card-notas')

    const boxNotas = document.createElement('div')
    boxNotas.classList.add('box-notas')

    const NotaAlunoBox = document.createElement('div')
    NotaAlunoBox.classList.add('nota-aluno')

    const textNota = document.createElement('p')
    textNota.classList.add('porcentagem-nota')
    textNota.textContent = alunos.cursos[0].disciplina.media

    const tamanhoNota = document.createElement('div')
    tamanhoNota.classList.add('tamanho-nota')

    const nota = document.createElement('div')

    if(alunos.curso[0].disciplina.media >= 60 && alunos.curso[0].disciplina[0].media <= 100 ){
        nota.classList.add('nota-aprovado')
    }else if(alunos.curso[0].disciplina.media < 60 && alunos.curso[0].disciplina[0].media >= 0 ){
        nota.classList.add('nota-reprovado')
        
    }

    const subject = document.createElement('h1')
    subject.classList.add('subject')
    subject.textContent = alunos.cursos[0].disciplina.nome

    tamanhoNota.append(nota)
    NotaAlunoBox.append(textNota, tamanhoNota, subject)
    boxNotas.append(NotaAlunoBox)
    cardNotas.append(boxNotas)



    return cardNotas
    

}

const carregarCard = () => {
    const container = document.getElementById('card-container')
    const cards = alunos.map(criarCardsAluno, criarCardNota)
    container.replaceChildren(...cards)
}

carregarCard()

exit()