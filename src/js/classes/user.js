// Class User

function User(idUser=false){
    this.email=user;
    this.idUser=idUser;
    this.token=false;
    this.campaigns=[];

    this.tokken=this.isLogin()||this.createUser();
    
}

User.prototype.isLogin=function(){
    if (!this.idUser) return false;
    return this.loadToken(); 
};

User.prototype.createUser=function(){
    return new Promise(function(resolve,reject){});
};

User.prototype.loadToken=function(){
    if(typeof Stores!==undefined){
        return localStores.getItem('token');
    }
    else {
        // loadAjax token in server Promise
    }
    return false;
};