const html = document.querySelector('html');
const listaBotones = document.querySelectorAll('.app__card-button');
const banner = document.querySelector('.app__image');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');

botonEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque')
})

botonCorto.addEventListener('click', () => {
    cambiarContexto('descanso-corto')
})

botonLargo.addEventListener('click', () => {
    cambiarContexto('descanso-largo')
})


function cambiarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagenes/${contexto}.png`);
}
