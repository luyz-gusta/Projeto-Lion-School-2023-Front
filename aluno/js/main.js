'use strict'

import {aluno} from "../../json/alunos"

const exit = () => {
    const buttonSair = document.querySelector('.button__sair')
    buttonSair.onclick = function () {
        window.close()
        console.log('teste')
    }
}

const criarCards = () => {

    const cardAluno = document.createElement('div')
    cardAluno.classList.add('card-aluno')

    const cardImageAluno = document.createElement('div')
    cardImageAluno.classList.add('image-aluno')

    const fotoAluno = document.createElement('img')
    fotoAluno.src = `./${aluno.foto}`

    const nomeAluno = document.createElement('span')
    nomeAluno.classList.add('name-aluno')

    cardImageAluno.append(fotoAluno)

    cardAluno.append(cardImageAluno, nomeAluno)

}

exit()
