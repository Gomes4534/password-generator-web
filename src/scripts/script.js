const num_comp = document.getElementById('number')

const mai = document.getElementById('maiusculas')
const min = document.getElementById('minusculas')
const diferentes = document.getElementById('especiais')
const num = document.getElementById('numeros')

const gerar = document.querySelector('.generate button')
const resultado = document.querySelector('.result')
const senha = document.querySelector('.password')

gerar.addEventListener('click', function () {

    let caracteres = ''

    if (mai.checked) {
        caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    if (min.checked) {
        caracteres += 'abcdefghijklmnopqrstuvwxyz'
    }

    if (diferentes.checked) {
        caracteres += '!@#$%&'
    }

    if (num.checked) {
        caracteres += '0123456789'
    }

    console.log(caracteres)
    const comprimento = Number(num_comp.value)
    console.log(comprimento)

})