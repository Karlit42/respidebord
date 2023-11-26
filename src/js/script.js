const btn = document.querySelector('.btn');
const resp = document.querySelector('.main');
const duration = document.getElementById('duration');
const form = document.getElementById('form');
const son = document.getElementById('son');
const background = document.querySelector('.background');

function stop() {
// si resp ne contient pas 'hidden' je l'ajoute
    if (!resp.classList.contains('hidden')) {
        resp.classList.add('hidden');
        form.classList.remove('hidden');
        btn.textContent = 'DÉMARRER';
        son.pause();
        son.currentTime = 0;
    }
// sinon je fais kedal
};

function changeBackground() {
    if (background.classList.contains('background')) {
        background.classList.remove('background');
        background.classList.add('background--2');
    } else if  (background.classList.contains('background--2')) {
        background.classList.remove('background--2');
        background.classList.add('background--3');   
    } else if (background.classList.contains('background--3')) {
        background.classList.remove('background--3');
        background.classList.add('background--4');
    } else if (background.classList.contains('background--4')) {
        background.classList.remove('background--4');
        background.classList.add('background--2');
    }
};

setTimeout( () => {
    changeBackground(); 
    setInterval(changeBackground, 500); 
}, 500);

// j'écoute le click au bouton qui exécute la fonction
btn.addEventListener('click', () => {
// si mon document "resp" ne contient pas la classe hidden
    if (!resp.classList.contains('hidden')) {
// je l'ajoute
        resp.classList.add('hidden');
        form.classList.remove('hidden');
// et je mets DÉMARRER kom texte dans le bouton
        btn.textContent = 'DÉMARRER';
        son.pause();
        son.currentTime = 0;

    } else {
// sinon je la retire et je change le texte du bouton en ARRETER
        resp.classList.remove('hidden');
        form.classList.add('hidden');
        btn.textContent = 'ARRÊTER';
        son.play();
        
// j'active le stop après un laps de temps choisi dans l'élément ciblé
        const selectedDuration = duration.value;
        setTimeout(stop, selectedDuration * 60000);
    };   
});