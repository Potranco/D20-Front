// JS user page


document.addEventListener("DOMContentLoaded", function(event) {
    window.user = new User();
    user.events.add('onLoadUser',addUserHTML);
    user.events.add('onLoadCampaigns',addCampaignsHTML);
    user.events.add('onLoadChars',addCharsHTML);
});

function addCampaignsHTML() {
    var campaign=user.getCampaigns();
    var aux=campaign.length;
    var objHTML=document.querySelector('.MeCampaigns ul');
    for (var i=0;i<aux;i++) {
        var li=document.createElement('li');
        li.innerHTML=campaign[i].name;
        objHTML.appendChild(li);
    }
}

function addCharsHTML() {
    var chars=user.getChars();
    var aux=chars.length;
    var objHTML=document.querySelector('.MeChars ul');
    for (var i=0;i<aux;i++) {
        var li=document.createElement('li');
        li.innerHTML=chars[i].name;
        objHTML.appendChild(li);
    }
}

function addUserHTML() {
    document.getElementById('userName').innerHTML=user.getName();
}
