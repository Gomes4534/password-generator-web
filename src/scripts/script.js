const letrasMaiusculas = document.getElementById('maiusculas');    // peguei os elementos das checkboxs pelo id
const letrasMinusculas = document.getElementById('minusculas');
const caracteresEspecias = document.getElementById('especiais');
const caracterNumeros = document.getElementById('numeros');


const geradorSenha = document.querySelector('button'); // aqui eu peguei o elemento no HTML
geradorSenha.addEventListener('click', function() {  // criei um evento ultilizando a seguinte estrutura
    console.log('O botão foi clicado!'); // elemento.addEventListener('evento', função)

    let caracteres = '';

    if (letrasMaiusculas.checked) {      // nessa parte o programa verifica se a checkbox 
        console.log('ABCDEFGHIJKLMNOPQRSTUVWXYZ');                // do "Letras Maiúsculas" foi selecionada
    } else if (letrasMinusculas.checked) {
        console.log('abcdefghijklmnopqrstuvwxyz');
    } else if (caracteresEspecias.checked) {
        console.log('!@#$&*');
    } else if (caracterNumeros.checked) {
        console.log('0123456789');
    } else {
        console.log('0');
    }
});

const botaoCopiar = document.getElementById('copiar');
botaoCopiar.addEventListener('click', function() {
    console.log('Senha copiada!');
});

