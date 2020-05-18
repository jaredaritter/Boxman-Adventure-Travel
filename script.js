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
    while (surveyImg.hasChildNodes()) {
        surveyImg.removeChild(surveyImg.lastChild);
    }
    if (e.target.value === 'Maine') {
        img.setAttribute('src', './images/maine-flag.webp');
        img.setAttribute('alt', 'maine flag');
    } else if (e.target.value === 'fly fishing') {
        img.setAttribute('src', './images/flyfishing-rod.jpg');
        img.setAttribute('alt', 'flyfishing rod');
    } else if (e.target.value === 'Israel') {
        img.setAttribute('src', './images/israel-flag.webp');
        img.setAttribute('alt', 'israel flag');
    } else if (e.target.value === 'nautical') {
        img.setAttribute('src', './images/nautical-onboard.jpg');
        img.setAttribute('alt', '');
    } else if (e.target.value === 'feast') {
        img.setAttribute('src', './images/feast-hall.png');
        img.setAttribute('alt', 'feast hall');
    } else if (e.target.value === 'other') {
        img.setAttribute('src', './images/question-mark.png');
        img.setAttribute('alt', 'question mark');
    } else {
        console.error("error");
    }
    img.classList.add('window');
    surveyImg.appendChild(img);
    surveyImg.classList.remove('fadeout');
    surveyImg.classList.add('fadein');
}