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
    var {id,name,masterId,users}=objCampaign;
    this.id=id;
    this.name=name;
    this.masterId=masterId;
    this.users=users;
}
