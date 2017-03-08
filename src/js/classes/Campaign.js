// Class Campaign
/*

objCampaign:{
            "id":"00000",
            "name":"name Campaign",
            "masterId":"0000",
            "users":["0000"]
        }

*/
function Campaign(objCampaign){
    for (var key in objCampaign){
        this[key]=objCampaign[key];
    }
}
