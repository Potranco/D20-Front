import User from "./classes/user.js"

var user = new User(addMenu);
user.events.add('onLoad', createPage);


function loadMenuTemplate(){
  return 'soy el menu'
}

function createPage(){
  let page = document ? document : console.error('Page error')
  document.write(menuTemplate);
  console.log(document.body.append);
}
