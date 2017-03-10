// Class User

function User(){
    this.name='';
    this.campaigns=[];
    this.chars=[];
    this.urls={
        'token':'/test/mock_json/token.json',
        'campaigns_json':'/test/mock_json/campaigns.json',
        'chars_json':'/test/mock_json/chars.json',
        'newUser':'index.html'
    };
    this.token=this.loadToken();
    this.events=new ArrayFunctions();
    this.createEvents();
    this.events.isLogin();
}

User.prototype.createEvents=function(){
    this.events.add('isLogin',this.callData.bind(this));
    this.events.add('onLoadUser',this.onLoadUser.bind(this));
    this.events.add('onNewUser',this.createNewUser.bind(this));
    this.events.add('onLoadCampaigns',this.onLoadCampaigns.bind(this));
    this.events.add('onLoadChars',this.onLoadChars.bind(this));
};

User.prototype.loadToken=function(){
    if(typeof Stores!==undefined){
        return localStorage.getItem('token');
    }
    return false;
};

User.prototype.callData=function(){
    if (this.token) {
        var ajax={
            url:this.urls.token,
            method: 'GET',
            params:{
                token:this.token,
                idUser:this.idUser
            }
        };
        loadFile(ajax)
            .then(function(resolve){
                this.events.onLoadUser(JSON.parse(resolve));
            }.bind(this),
            function(error) {
                console.error("Failed!", error);
                return false;
            });    
    }
    else {
        this.events.onNewUser();
    }
    
};

User.prototype.onLoadUser=function(json){
    this.insertData(json);
    this.saveToken(this.token);
    this.loadCampaigns();
    this.loadChars();
};

User.prototype.insertData=function(json){
    var {name,token}=json;
    
    this.name=name;
    this.token=token;
};
User.prototype.saveToken=function(token){
     if(typeof Stores!==undefined){
        localStorage.setItem('token',token);
     }
};

User.prototype.loadCampaigns=function(){
    this.campaigns=new Campaigns(this.token,this.urls.campaigns_json,this.events.onLoadCampaigns);
};
User.prototype.onLoadCampaigns=function(result){
    if (!result) {
        console.log('0 campaigns');
    }
    console.log('onloadCampaigns');
};

User.prototype.loadChars=function(){
    this.chars=new Chars(this.token,this.urls.chars_json,this.events.onLoadChars);
};
User.prototype.onLoadChars=function(result){
    if (!result) {
        console.log('0 chars');
    }
    console.log('onloadChars');
};

User.prototype.createNewUser=function(){
    location.href=this.urls['newUser'];
};