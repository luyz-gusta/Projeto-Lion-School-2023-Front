'use strict'

export const getAlunos = async(cursoPesquisa) => {
    const url = `https://api-lion-school-2023.cyclic.app/v1/lion-school/alunos?curso=${cursoPesquisa}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getAlunosStatus = async(status) => {
    const url = `https://api-lion-school-2023.cyclic.app/v1/lion-school/alunos?status=${status}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}