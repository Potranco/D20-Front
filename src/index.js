import User from "./classes/user.js"

var user = new User(addEventOnloadPage);

function addEventOnloadPage(user){
  return (document.readyState == 'complete')
    ? onLoadPage.bind(user)()
    : document.addEventListener('DOMContentLoaded',onLoadPage.bind(user));
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
  avatar.style.backgroundImage='url('+userProfile.getAvatar()+')';
}
