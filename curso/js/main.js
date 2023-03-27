'use strict'

const exit = () => {
    const buttonSair = document.querySelector('.button__sair')
    buttonSair.onclick = function () {
        window.location.href = "http://127.0.0.1:5500/home/index.html";
        console.log('teste')
    }
}

exit()