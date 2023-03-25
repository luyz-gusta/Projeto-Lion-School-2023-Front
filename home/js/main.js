'use strict'

const exit = () => {
    const buttonSair = document.querySelector('.button__sair')
    buttonSair.onclick = function () {
        window.close()
        console.log('teste')
    }
}

exit()