const imgBg = document.getElementById('imgBg');
const personalName = document.getElementById('personalName');
const following = document.getElementById('followingText');
const followers = document.getElementById('followersText');
const btnFollow = document.getElementById('btnFollow');
const btnMessage = document.getElementById('btnMessage');

function changeTheme(color) {
    imgBg.style.backgroundColor = color;
    personalName.style.color = color;
    following.style.color = color;
    followers.style.color = color;
    btnFollow.style.backgroundColor = color;
    btnMessage.style.color = color;
    btnMessage.style.borderColor = color;
}