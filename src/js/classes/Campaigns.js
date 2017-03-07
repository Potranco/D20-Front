/* Campaigns class */

function Campaigns(idUser=false,callback){
    this.idUser=idUser;
    this.urls={
        'campaigns':'/test/mock_json/campaigns.json'
    };
    this.campaigns=[];
    this.loadCampaigns();
}

Campaigns.prototype.loadCampaigns=function(){
    if (!this.idUser) callback(false);
    
     var ajax={
            url:this.urls.campaigns,
            method: 'GET',
            params:{
                token:this.token,
                idUser:this.idUser
            }
        };
        
    loadFile(ajax)
        .then(function(resolve){
            this.add(JSON.parse(resolve));
        }.bind(this),
        function(error) {
            console.error("Failed!", error);
            return false;
        });    
};

Campaigns.prototype.add=function(json){
    var aux=json.campaigns.length;
    
    console.log(json);
    for (var i=0;i<aux;i++){
        this.campaigns.push(new Campaign(json.campaigns[i]));
    }
    console.log(this);
};

