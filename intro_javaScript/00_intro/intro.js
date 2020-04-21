const inputColor = document.querySelector('#color');
const btnCambiarColor = document.querySelector('#cambiar_color')

let numero = 10;

let numero2 = 20;

let resultado = numero * numero2;

console.log(resultado);

btnCambiarColor.addEventListener('click', () => {
    let color = inputColor.value;
    let nombre = "pagina con JS";


    if (color === '') {
        alert("Debes escribir un valor para el color")
    } else {
        cambiarColorFondo(color);
    }



})

function cambiarColorFondo(color) {
    document.body.style.backgroundColor = color;
}