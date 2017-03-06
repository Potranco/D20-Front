// Class User

function User(idUser=false){
    this.name='';
    this.idUser=idUser;
    this.campaigns=[];
    this.urls={
        'token':'/test/mock_json/token.json'
    };
    this.token=false;

    this.callToken();
    console.log(this);
}

User.prototype.loadToken=function(){
    if(typeof Stores!==undefined){
        return this.token=localStorage.getItem('token');
    }
    return false;
};

User.prototype.callToken=function(){
    if (!this.loadToken()) {
        var ajax={
            url:this.urls.token,
            method: 'GET'
        };
        loadFile(ajax)
            .then(function(resolve){
                var aux=JSON.parse(resolve);
                this.saveToken(aux.token);
                this.token=aux.token;
                this.loadCampaigns();
            }.bind(this),
            function(error) {
                console.error("Failed!", error);
                return false;
            });    
    }
    else {
        this.loadCampaigns();
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