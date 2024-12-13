const body = document.body;
const btn1 = document.getElementById('btnBlue');
const btn2 = document.getElementById('btnRed');
const btn3 = document.getElementById('btnGreen');
const btn4 = document.getElementById('btnPurple');
const btn5 = document.getElementById('btnYellow');
const darkBtn = document.getElementById('darkIcon');
const lightBtn = document.getElementById('lightIcon');
const btnFollow = document.getElementById('btnFollow');
const followingN = document.getElementById('followingNumber');
const followersN = document.getElementById('followersNumber');
const colors = document.getElementById('colors');
const target = document.getElementById('target');
const imgProfile = document.getElementById('imgProfile');

let followCurrentC;

setTimeout(() => {
    body.style.opacity = '1';
}, 800);

function changeTheme(color, activeButton) {
    const elements = document.querySelectorAll('.elementToChangeColor');
    const bg = document.getElementById('imgBg');
    const btnMessage = document.getElementById('btnMessage');

    elements.forEach(function(element) {
        element.style.color = color;
    });

    bg.style.backgroundColor = color;
    btnFollow.style.borderColor = color;
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

function changeThemeBlackWhite() {
    if(getComputedStyle(darkBtn).display === 'flex') {
        body.style.backgroundColor = 'rgb(15, 15, 15)';
        target.style.backgroundColor = 'rgb(25, 25, 25)';
        imgProfile.style.borderColor = 'rgb(25, 25, 25)';
        btnFollow.style.color = 'rgb(25, 25, 25)';
        followingN.style.color = 'white';
        followersN.style.color = 'white';
        colors.style.backgroundColor = 'rgb(25, 25, 25)';

        darkBtn.style.display = 'none';
        lightBtn.style.display = 'flex';
    }
    
    else {
        body.style.backgroundColor = 'white';
        target.style.backgroundColor = 'white';
        imgProfile.style.borderColor = 'white';
        btnFollow.style.color = 'white';
        followingN.style.color = 'black';
        followersN.style.color = 'black';
        colors.style.backgroundColor = 'white';

        darkBtn.style.display = 'flex';
        lightBtn.style.display = 'none';
    }
}

btn1.addEventListener('click', () => changeTheme('#3498db', btn1));
btn2.addEventListener('click', () => changeTheme('#ff1756', btn2));
btn3.addEventListener('click', () => changeTheme('#1cb65d', btn3));
btn4.addEventListener('click', () => changeTheme('#8e44ad', btn4));
btn5.addEventListener('click', () => changeTheme('#f4b932', btn5));

darkBtn.addEventListener('click', changeThemeBlackWhite);
lightBtn.addEventListener('click', changeThemeBlackWhite);