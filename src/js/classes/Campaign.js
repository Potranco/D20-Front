// Class Campaign
/*

objCampaign:{
            "id":"00000",
            "name":"name Campaign",
            "masterId":"0000",
            "users":["0000"]
        }

*/
function Campaign(idCampaign=false,token=false,callback=null){
    this.id=idCampaign;
    this.token=token;
    this.name='';
    this.masterId='';
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
                this.events.onLoadCampaign();
                if (this.chars.length) {
                    this.events.onLoadChars();
                }
                else {
                    this.chars=[];
                    this.loadChars();
                }
                
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
    var {id,name,master_id,_d20_characters}=objCampaign;
    var aux=_d20_characters.length;
    
    this.id=id;
    this.name=name;
    this.masterId=master_id.id;
    this.masterName=master_id.name;
    this.chars=[];

    for (var i=0;i<aux;i++){
        this.chars.push(new Char(_d20_characters[i]));
    }
    if (!this.chars.length) this.events.onLoadChars();
};

Campaign.prototype.onLoadCampaign=function(){
    console.log('Campaign.prototype.onLoadCampaign');
};

Campaign.prototype.loadChars=function(){
    
    if (this.token) {
        var ajax={
            url:this.url[1],
            method: 'GET',
            params:{
                token:this.token,
                campaign:this.id
            }
        };
        loadFile(ajax)
            .then(function(resolve){
                JSON.parse(resolve)._d20_characters.map(function(value){
                    this.chars.push(new Char(value));
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

Campaign.prototype.onLoadChars=function(){};


/* CampaignJSON use in userPage */
function CampaignJSON(objCampaign=false){
    this.insertData(objCampaign);
};
CampaignJSON.prototype=Object.create(Campaign.prototype);
CampaignJSON.prototype.constructor=CampaignJSON;


