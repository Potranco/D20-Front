/* Campaigns class */

function Campaigns(idUser,token,url,callback=null){
   Elements.apply(this,arguments);
}
Campaigns.prototype=Object.create(Elements.prototype);
Campaigns.prototype.constructor=Campaigns;

Campaigns.prototype.add=function(json){
    var aux=json.campaigns.length;
    this.campaigns=[];
    for (var i=0;i<aux;i++){
        this.campaigns.push(new Campaign(json.campaigns[i]));
    }
};

