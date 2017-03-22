// JS user page


document.addEventListener("DOMContentLoaded", function() {
    window.user = new User();
    user.events.add('onLoadUser',addUserHTML);
    window.campaign=new Campaign('123',user.token,addCampaignHTML);
    campaign.events.add('onLoadChars',addCharsHTML);
});

function addCharsHTML() {
    var chars=campaign.chars;
    var aux=chars.length;
    var objHTML=document.querySelector('.Chars ul');
    for (var i=0;i<aux;i++) {
        var li=document.createElement('li');
        var link=document.createElement('a');
        link.setAttribute('href','./char/'+chars[i].id);
        link.innerHTML=chars[i].name+' ('+chars[i].classe+') - '+chars[i].lvl;
        li.appendChild(link);
        objHTML.appendChild(li);
    }
}

function addUserHTML() {
    document.getElementById('userName').innerHTML=user.getName();
}

function addCampaignHTML() {
    document.querySelector('.Campaign h2').innerHTML=campaign.name;
}