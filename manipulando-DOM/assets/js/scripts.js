function anotherMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    botao.classList.toggle(darkModeClass);
    titulo.classList.toggle(darkModeClass);
    rodape.classList.toggle(darkModeClass);
    corpo.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if (corpo.classList.contains(darkModeClass)) {
        botao.innerHTML = lightMode;
        titulo.innerHTML = darkMode + " ON";
        return;
    }

    botao.innerHTML = 'Dark Mode';
    titulo.innerHTML = 'Light Mode On'

}

const darkModeClass = 'dark-mode'
const titulo = document.getElementById('page-title');
const botao = document.getElementById('mode-selector');
const rodape = document.getElementsByTagName('footer')[0];
const corpo = document.getElementsByTagName('body')[0];

botao.addEventListener('click', anotherMode);



 