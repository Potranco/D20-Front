import User from "./classes/user.js"

var user = new User(addEventOnloadPage);

function addEventOnloadPage(){
  document.addEventListener('DOMContentLoaded',onLoadPage.bind(this));
}

function onLoadPage(){
    showUser(document.querySelector('.SideBar .ShowUser'), this);
}

function showUser(divShowUser, userProfile){
  divShowUser.addEventListener('click',function(event){
    event.preventDefault();
  });

  let linkName = divShowUser.querySelector('a');
  let avatar = divShowUser.querySelector('.Avatar');

  linkName.href='/user/'+userProfile.getId();
  linkName.innerHTML=userProfile.getName();
  avatar.src=userProfile.getAvatar();
  avatar.style.backgroundImage='url(http://nodejs.org/images/logo.png)';
  avatar.alt=userProfile.getName();
}
