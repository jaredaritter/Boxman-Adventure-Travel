const buttons = document.querySelectorAll('button');
const sign = document.querySelector('#sign');

buttons.forEach(button => button.addEventListener('click', showSign));


function showSign(e) {
    const p = document.createElement('p');
    p.textContent = `You're going to love your ${e.target.value} adventure!`;
    // while (sign.firstChild) {
    //     sign.removeChild(sign.lastChild);
    // }
    if (sign.children[1]){
        sign.removeChild(sign.lastChild);
    }
    sign.appendChild(p);
    sign.classList.remove('fadeout');
    sign.classList.add('fadein');
}