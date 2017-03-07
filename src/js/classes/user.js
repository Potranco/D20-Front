// Class User

function User(idUser=false){
    this.name='';
    this.idUser=idUser;
    this.campaigns=[];
    this.chars=[];
    this.urls={
        'token':'/test/mock_json/token.json'
    };
    this.token=false;
    this.events=new ArrayFunctions();
    
    this.createEvents();
    this.events.isLogin();
}

User.prototype.createEvents=function(){
    this.events.add('isLogin',this.callData.bind(this));
    this.events.add('onLoadUser',this.loadUser.bind(this));
    this.events.add('onNewUser',this.createNewUser.bind(this));
    this.events.add('onLoadCampaigns',this.onLoadCampaigns.bind(this));
    this.events.add('onLoadChars',this.onLoadChars.bind(this));
};

User.prototype.loadToken=function(){
    if(typeof Stores!==undefined){
        this.token=localStorage.getItem('token');
        return true;
    }
    return false;
};

User.prototype.callData=function(){
    if ((this.idUser)&&(this.loadToken())) {
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

User.prototype.loadUser=function(json){
    this.insertData(json);
    this.saveToken(this.token);
    this.loadCampaigns();
    this.loadChars();
};

User.prototype.insertData=function(json){
    for (var key in json){
        this[key]=json[key];
    }
};
User.prototype.saveToken=function(token){
     if(typeof Stores!==undefined){
        localStorage.setItem('token',token);
     }
};

User.prototype.loadCampaigns=function(){
    this.campaigns=new Campaigns(this.idUser,this.events.onLoadCampaigns);
};
User.prototype.onLoadCampaigns=function(){
    console.log('onloadCampaigns');
};

User.prototype.loadChars=function(result){
    this.chars=new Chars(this.idUser,this.events.onLoadChars)
};
User.prototype.onLoadChars=function(result){
    console.log('onloadChars');
};

User.prototype.createNewUser=function(){
    console.log('Create new user!');
};