// Class Campaign
/*

objCampaign:{
            "id":"00000",
            "name":"name Campaign",
            "masterId":"0000",
            "users":["0000"]
        }

*/
function Campaign(idCampaign=false,token,callback=null){
    this.id=idCampaign;
    this.token=token;
    this.name='';
    this.masterId='';
    this.idUsers=[];
    this.idChars=[];
    this.chars=[];
    this.url='/test/mock_json/campaign.json';
    
    this.events=new PubSub();
    this.events.add('onLoadCampaign',this.onLoadCampaign.bind(this));
    this.events.add('onLoadCampaign',callback);
    this.events.add('onLoadChars',this.onLoadChars);
    
    this.load();
}

Campaign.prototype.load=function(){
     if (this.token) {
        var ajax={
            url:this.url,
            method: 'GET',
            params:{
                token:this.token,
                idUser:this.id
            }
        };
        loadFile(ajax)
            .then(function(resolve){
                this.insertData(JSON.parse(resolve));
                this.events.onLoadCampaign();
            }.bind(this),
            function(error) {
                console.error("Failed!", error);
                return false;
            });    
    }
    else {
        console.error('Token Failed!');
    }
};

Campaign.prototype.insertData=function(objCampaign){
    var {id,name,masterId,users,chars}=objCampaign;
    this.id=id;
    this.name=name;
    this.masterId=masterId;
    this.idUsers=users;
    this.idChars=chars;
    this.chars=[];
    
};

Campaign.prototype.onLoadCampaign=function(){
};

Campaign.prototype.loadChars=function(idChars){
    this.chars=new Chars(this.token,this.urls.chars_json,this.events.onLoadChars.bind(this.events));
    return this;
};

Campaign.prototype.onLoadChars=function(){
};


/* CampaignJSON use in userPage */
function CampaignJSON(objCampaign=false){
    this.insertData(objCampaign);
};
CampaignJSON.prototype=Object.create(Campaign.prototype);
CampaignJSON.prototype.constructor=CampaignJSON;


