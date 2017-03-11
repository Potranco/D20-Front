// control js Login


document.addEventListener("DOMContentLoaded", function(event) {
    window.user = new User();
    user.events.add('onLoadUser',addUserHTML);
    user.events.add('onLoadCampaigns',addCampaignsHTML);
    user.events.add('onLoadChars',addCharsHTML);
});

function addCampaignsHTML() {
    console.log(user.getCampaigns());
}

function addCharsHTML() {
    console.log(user.getChars());
}

function addUserHTML() {
    document.getElementById('userName').innerHTML=user.getName();
}
