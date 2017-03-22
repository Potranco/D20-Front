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
    this.players=[];
    this.idChars=[];
    this.chars=[];
    this.url=['/test/mock_json/campaign.json',
              '/test/mock_json/chars.json'
    ];
    
    this.events=new PubSub();
    this.events.add('onLoadCampaign',this.onLoadCampaign.bind(this));
    this.events.add('onLoadCampaign',callback);
    this.events.add('onLoadChars',this.onLoadChars.bind(this));
    
    this.load();
}

Campaign.prototype.load=function(){
     if (this.token) {
        var ajax={
            url:this.url[0],
            method: 'GET',
            params:{
                token:this.token,
                campaign:this.id
            }
        };
        loadFile(ajax)
            .then(function(resolve){
                this.insertData(JSON.parse(resolve));
                this.loadChars();
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
    var {id,name,masterId,players,chars}=objCampaign;
    this.id=id;
    this.name=name;
    this.masterId=masterId;
    this.players=players;
    this.idChars=chars;
    this.chars=[];
};

Campaign.prototype.onLoadCampaign=function(){};

Campaign.prototype.loadChars=function(idChars){
    if (this.token) {
        var ajax={
            url:this.url[1],
            method: 'GET',
            params:{
                token:this.token,
                idUser:this.id,
                chars:this.idChars.join(',')
            }
        };
        loadFile(ajax)
            .then(function(resolve){
                JSON.parse(resolve).chars.map(function(value){
                    this.chars.push(new Char(value))
                }.bind(this));
                this.events.onLoadChars();
            }.bind(this),
            function(error) {
                console.error("Failed!", error);
                return false;
            });    
    }
    else {
        console.error('Token Failed!');
    }
    
    
    return this;
};

Campaign.prototype.onLoadChars=function(){console.log(this)};


/* CampaignJSON use in userPage */
function CampaignJSON(objCampaign=false){
    this.insertData(objCampaign);
};
CampaignJSON.prototype=Object.create(Campaign.prototype);
CampaignJSON.prototype.constructor=CampaignJSON;


