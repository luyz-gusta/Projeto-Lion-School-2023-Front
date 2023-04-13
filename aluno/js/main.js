'use strict'

import {
    getMatricula
} from "../js/api.js"

const matricula = localStorage.getItem('matricula')

const alunoMatricula = await getMatricula(matricula)

const exit = () => {
    const buttonSair = document.querySelector('.button__sair')
    buttonSair.onclick = function () {
        window.location.href = "./curso.html";
    }
}

console.log(alunoMatricula)

const criarCardsAluno = () => {
    if (alunoMatricula.matricula == matricula) {
        const cardAluno = document.createElement('div')
        cardAluno.classList.add('card-aluno')

        const nomeAluno = document.createElement('p')
        nomeAluno.classList.add('name-aluno')
        nomeAluno.textContent = alunoMatricula.nome

        const fotoAluno = document.createElement('img')
        fotoAluno.src = alunoMatricula.foto
        fotoAluno.classList.add('image-aluno')
        fotoAluno.alt = `Imagem do aluno ${alunoMatricula.nome}`

        const cardNotas = document.createElement('div')
        cardNotas.classList.add('card-notas')

        const boxNotas = document.createElement('div')
        boxNotas.classList.add('box-notas')

        cardAluno.append(fotoAluno, nomeAluno)

        return cardAluno
    } else {
        return ''
    }
}

const carregarCard = () => {
    const container = document.getElementById('card-container')
    const cards = criarCardsAluno()
    container.append(cards)

}

const criarGrafico = () => {
    if (alunoMatricula.matricula == matricula) {
        const cardNotas = document.createElement('div')
        cardNotas.classList.add('card-notas')

        const boxNotas = document.createElement('div')
        boxNotas.classList.add('box-notas')

        alunoMatricula.disciplinas.forEach(function(listaDisciplina) {
            const notaAluno = document.createElement('div')
            notaAluno.classList.add('nota-aluno')

            const textNota = document.createElement('p')
            textNota.textContent = listaDisciplina.media

            const tamanhoNota = document.createElement('div')
            tamanhoNota.classList.add("tamanho-nota")

            const barraNota = document.createElement('div')
            const valor = parseInt(textNota.textContent)

            if(parseInt(textNota.textContent) >= 70 && parseInt(textNota.textContent) <= 100){
                textNota.classList.add('porcentagem-nota-aprovado')
                barraNota.classList.add('nota-aprovado')
            }else if(parseInt(textNota.textContent) >= 0 && parseInt(textNota.textContent) <= 60){
                textNota.classList.add('porcentagem-nota-reprovado')
                barraNota.classList.add('nota-reprovado')
            }else if(parseInt(textNota.textContent) >= 61 && parseInt(textNota.textContent) <= 69){
                textNota.classList.add('porcentagem-nota-exame')
                barraNota.classList.add('nota-exame')
            }

            const altura = `${(valor / 50) * 50}%`
            barraNota.style.height = altura

            const materia = document.createElement('h1')
            materia.classList.add('subject')
            materia.textContent = listaDisciplina.sigla

            tamanhoNota.append(barraNota)
            notaAluno.append(textNota, tamanhoNota, materia)
            boxNotas.append(notaAluno)
        });

        cardNotas.append(boxNotas)
        return cardNotas
    } else {
        return ''
    }
}

const carregarGrafico = () => {
    const container = document.getElementById('card-container')
    const grafico = criarGrafico()
    container.append(grafico)
}

carregarCard()
carregarGrafico()


exit()