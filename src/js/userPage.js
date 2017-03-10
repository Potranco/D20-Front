// control js Login


window.onload=function(){
    user = new User();
    user.events.add('onLoadCampaigns',addCampaignsHTML);
    user.events.add('onLoadChars',addCharsHTML);
};

function addCampaignsHTML() {
    console.log('Añadimos campañas');
}

function addCharsHTML() {
    console.log('Añadimos chars');
}
