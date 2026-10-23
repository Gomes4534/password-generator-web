const letrasMaiusculas = document.getElementById('maiusculas');    // peguei os elementos das checkboxs pelo id
const letrasMinusculas = document.getElementById('minusculas');
const caracteresEspeciais = document.getElementById('especiais');
const caracterNumeros = document.getElementById('numeros');
const senhaGerada = document.getElementById('senha');
const botaoGerador = document.getElementById('gerador');

botaoGerador.addEventListener('click', function() {  // criei um evento ultilizando a seguinte estrutura
    console.log('O botão foi clicado!'); // elemento.addEventListener('evento', função)

    let caracteres = '';

    if (letrasMaiusculas.checked) {
        caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (letrasMinusculas.checked) {
        caracteres += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (caracteresEspeciais.checked) {
        caracteres += '!@#$&';
    }

    if (caracterNumeros.checked) {
        caracteres += '0123456789'
    }


    console.log(caracteres.length); // código exibe 0 no console caso nenhuma checkbox tenha sido marcada
    let senha = '';
    for (let i = 0; i < 12; i++) {
    let posicao = Math.floor(Math.random() * caracteres.length);    
    senha += caracteres[posicao];         
    senhaGerada.value = senha;
  
}});



const botaoCopiar = document.getElementById('copiar');
botaoCopiar.addEventListener('click', function() {
    console.log('Senha copiada!');
});

