let mododark = document.getElementById('dark');
let header = document.querySelector('header');
let mainconteudo = document.querySelector('main');
let body = document.querySelector('body');

mododark.addEventListener('click', () => {
    mododark.classList.toggle('dark');
    header.classList.toggle('dark');
    mainconteudo.classList.toggle('dark');
    body.classList.toggle('dark');
});


let menumobile = document.getElementById("menumobile");
let menulatereal = document.getElementById("menulatereal");
let tirarmobile = document.getElementsByClassName("tirarmobile");
let mensagemlogin = document.getElementsByClassName("mensagemlogin");
let main = document.querySelector('main');

let menuAberto = false;

menumobile.addEventListener('click', () => {
    if (!menuAberto) { 
        menulatereal.style.width = '74px';
        for (let i = 0; i < tirarmobile.length; i++){
            tirarmobile[i].style.display = 'none';
        }
        for (let i = 0; i < mensagemlogin.length; i++){
            mensagemlogin[i].style.display = 'none';
        }
        
        if (window.innerWidth >= 955) {
            main.style.width = 'calc(100vw - 74px)';
        }
        // Mudar o HTML do botão para "Fechar"
        menumobile.innerHTML = 'close';
        menuAberto = true;
    } else { 
        menulatereal.style.width = '';
        for (let i = 0; i < tirarmobile.length; i++){
            tirarmobile[i].style.display = ''; 
        }
        for (let i = 0; i < mensagemlogin.length; i++){
            mensagemlogin[i].style.display = ''; 
        }
        if (window.innerWidth >= 955) {
            main.style.width = 'calc(100vw - 200px)';
        }
        // Mudar o HTML do botão para "Abrir"
        menumobile.innerHTML = 'menu';
        menuAberto = false;
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 955) {
        main.style.width = 'calc(100vw - 74px)';
    } else {
        if (!menuAberto) {
            main.style.width = 'calc(100vw - 200px)';
        }
    }
});
