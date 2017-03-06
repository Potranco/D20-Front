// Class User

function User(idUser=false){
    this.name='';
    this.idUser=idUser;
    this.campaigns=[];
    this.urls={
        'token':'/test/mock_json/token.json'
    };
    this.token=false;
    this.callData();
}

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
                this.insertData(JSON.parse(resolve));
                this.saveToken(this.token);
                this.loadCampaigns();
            }.bind(this),
            function(error) {
                console.error("Failed!", error);
                return false;
            });    
    }
    else {
        //loginuser
    }
    
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