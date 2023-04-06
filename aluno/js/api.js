'use strcit'

export const getMatricula = async(matricula) => {
    const url = `https://api-lion-school-2023.cyclic.app/v1/lion-school/alunos/${matricula}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}