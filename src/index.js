import User from "./classes/user.js"

var user = new User(addEventOnloadPage);

function addEventOnloadPage(){
  document.addEventListener('DOMContentLoaded',onLoadPage.bind(this));
}

function onLoadPage(){
  console.log(this)
    showUser(document.querySelector('.SideBar .ShowUser'), this);
}

function showUser(divShowUser, userProfile){
  let linkName = divShowUser.querySelector('a');
  let avatar = divShowUser.querySelector('img');

  linkName.href='/user/'+userProfile.getId();
  linkName.innerHTML=userProfile.getName();
  avatar.src=userProfile.getAvatar();
  avatar.alt=userProfile.getName();
}
