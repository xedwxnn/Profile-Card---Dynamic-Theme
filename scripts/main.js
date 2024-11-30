const body = document.body;
const btn1 = document.getElementById('btnBlue');
const btn2 = document.getElementById('btnRed');
const btn3 = document.getElementById('btnGreen');
const btn4 = document.getElementById('btnPurple');
const btn5 = document.getElementById('btnYellow');

setTimeout(() => {
    body.style.opacity = '1';
}, 1000);

function changeTheme(color, activeButton) {
    const elements = document.querySelectorAll('.elementToChangeColor');
    const bg = document.getElementById('imgBg');
    const btnFollow = document.getElementById('btnFollow');
    const btnMessage = document.getElementById('btnMessage');

    elements.forEach(function(element) {
        element.style.color = color;
    });

    bg.style.backgroundColor = color;
    btnFollow.style.backgroundColor = color;
    btnMessage.style.borderColor = color;

    const elementsBtn = document.querySelectorAll('.colorsBtn');
    elementsBtn.forEach(function(btn) {
        btn.classList.remove('active');
        btn.style.boxShadow = 'none';
    });

    activeButton.classList.add('active');
    activeButton.style.boxShadow = `0px 0px 10px 4px ${color}`;
}

btn1.addEventListener('click', () => changeTheme('#3498db', btn1));
btn2.addEventListener('click', () => changeTheme('#ff1756', btn2));
btn3.addEventListener('click', () => changeTheme('#1cb65d', btn3));
btn4.addEventListener('click', () => changeTheme('#8e44ad', btn4));
btn5.addEventListener('click', () => changeTheme('#f4b932', btn5));