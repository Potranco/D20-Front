// Class User

function User(idUser=false){
    this.name='';
    this.idUser=idUser;
    this.campaigns=[];
    this.urls={
        'token':'/test/mock_json/token.json'
    };
    this.token=false;
    this.events=new PubSub();
    this.createEvents();
    this.events.isLogin();
}

User.prototype.createEvents=function(){
    this.events.add('isLogin',this.callData.bind(this));
    this.events.add('loadUser',this.loadUser.bind(this));
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
                this.events.loadUser(JSON.parse(resolve));
            }.bind(this),
            function(error) {
                console.error("Failed!", error);
                return false;
            });    
    }
    else {
        this.createNewUser();
    }
    
};

User.prototype.loadUser=function(json){
    this.insertData(json);
    this.saveToken(this.token);
    this.loadCampaigns();
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
    console.log('LoadCampaigns()');  
};

User.prototype.createNewUser=function(){
    
};