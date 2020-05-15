const buttons = document.querySelectorAll('button');
const sign = document.querySelector('#sign');

buttons.forEach(button => button.addEventListener('click', showSign));


function showSign(e) {
    const p = document.createElement('p');
    p.textContent = `Congratulations! ${e.target.textContent} is an amazing choice! You're going to love it!`;
    while (sign.firstChild) {
        sign.removeChild(sign.lastChild);
    }
    sign.appendChild(p);
    sign.classList.remove('fadeout');
    sign.classList.add('fadein');
}