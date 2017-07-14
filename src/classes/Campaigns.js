// Class Campaigns extend Elements

function Campaigns(idUser,token,url,callback=null){
   Elements.apply(this,arguments);
}
Campaigns.prototype=Object.create(Elements.prototype);
Campaigns.prototype.constructor=Campaigns;

Campaigns.prototype.add=function(json){
    var aux=json.campaigns.length;
    for (var i=0;i<aux;i++){
        this[i]=new CampaignJSON(json.campaigns[i]);
    }
};

