const body = document.getElementsByTagName('body')[0];
const imgBg = document.getElementById('imgBg');
const personalName = document.getElementById('personalName');
const followingText = document.getElementById('followingText');
const followersText = document.getElementById('followersText');
const btnFollow = document.getElementById('btnFollow');
const btnMessage = document.getElementById('btnMessage');

function changeTheme(color) {
    imgBg.style.backgroundColor = color;
    personalName.style.color = color;
    followingText.style.color = color;
    followersText.style.color = color;
    btnFollow.style.backgroundColor = color;
    btnMessage.style.color = color;
    btnMessage.style.borderColor = color;
}

setTimeout(() => {
    body.style.opacity = '1';
}, 1000);