const buttons = document.querySelectorAll('button');
const sign = document.querySelector('#sign');
const surveyImg = document.querySelector('#surveyImg');

buttons.forEach(button => button.addEventListener('click', show));

function show(e) {
    const p = document.createElement('p');
    p.textContent = `You're going to love your ${e.target.value} adventure!`;
    if (sign.children[1]){
        sign.removeChild(sign.lastChild);
    }
    sign.appendChild(p);
    sign.classList.remove('fadeout');
    sign.classList.add('fadein');

    const img = document.createElement('img');
    img.setAttribute('src', './images/feast-steak.jpg');
    img.setAttribute('alt', 'steak');
    img.classList.add('window');
    surveyImg.appendChild(img);
    surveyImg.classList.remove('fadeout');
    surveyImg.classList.add('fadein');
}