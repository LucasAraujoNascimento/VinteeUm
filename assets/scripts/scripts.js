let add = document.getElementById('add');
let para = document.getElementById('para');
let reinicia = document.getElementById('reinicia');
let iniciar = document.getElementById('iniciar');

let resultadoFinal = document.getElementById('resultadoFinal');


reinicia.addEventListener('click', () => {
    window.location.reload();
})

iniciar.addEventListener('click', iniciaJogo);

add.addEventListener('click', addCarta);

    let primeiraCarta;
    let segundaCarta;
    let soma;

function iniciaJogo(){

    let primeira = document.getElementById('primeira');
    let segunda = document.getElementById('segunda');

    primeiraCarta = parseInt(Math.random() * 10);
    segundaCarta = parseInt(Math.random() * 10);

    primeira.innerHTML = `<p>${primeiraCarta}</p>`
    segunda.innerHTML = `<p>${segundaCarta}</p>`

    soma = primeiraCarta + segundaCarta;

    resultadoFinal.innerHTML = `<p>${soma}</p>`

}

function addCarta(){
    let terceira = parseInt(Math.random() * 10);
    console.log(terceira);
    resultadoFinal.innerHTML = `<p>${soma + terceira}</p>`
    
}
