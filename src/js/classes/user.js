// Class User

function User(userEmail='',password='',idUser=false){
    this.email=user;
    this.password=password;
    this.idUser=idUser;
    this.tokken=0;
    this.campaigns=[];
}

User.prototype.init=function(){
    if (this.isLogin()&&this.login()){
        this.createUser();
    }
};

User.prototype.isLogin=function(){
    if (!this.idUser) return false;
    return true; 
};

User.prototype.createUser=function(){
    return true;
};

User.prototype.login=function(){
    return true;
};
