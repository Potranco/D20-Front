/* Campaigns class */
/*

objCampaign:{
            "id":"00000",
            "name":"name Campaign",
            "masterId":"0000",
            "users":["0000"]
        }

*/
function Campaign(objCampaign){
    for (key in objCampaign){
        this[key]=objCampaign[key];
    }
}
