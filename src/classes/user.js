// Class User

import PubSub from '../libs/PubSub.js'
import LoadFile from '../libs/LoadFile.js'
import configUrl from '../config/mock_json.js' // json mockeados para trabajar
/*
import Campaigns from './Campaigns.js'
import Chars from './Chars.js'
*/

function User(callback){
    this.callback=callback ? callback : false;
    this.idUser=0;
    this.name='anonymous';
    this.campaigns=null;
    this.chars=null;
    this.urls=configUrl.url;
    this.avatar=this.urls.defaultAvatar;
    this.token=this.loadToken();
    this.events=new PubSub();
    this.createEvents();
    this.events.loadUser();
}

User.prototype.createEvents=function(){
    this.events.add('loadUser',this.loadUser.bind(this));
    this.events.add('onLoadUser',this.onLoadUser.bind(this));
    this.events.add('onNewUser',this.createNewUser.bind(this));
    this.events.add('onLoadCampaigns',this.onLoadCampaigns.bind(this));
    this.events.add('onLoadChars',this.onLoadChars.bind(this));
    this.events.add('onLoad',this.callback.bind(this));
};

User.prototype.loadToken=function(){
    if(typeof Stores!==undefined){
        return (localStorage.getItem('token')?localStorage.getItem('token'):false);
    }
    return false;
};

User.prototype.loadUser=function(){
    let url = this.token ? this.urls.token : this.urls.userAnonimus;

    var ajax={
        url:url,
        method: 'GET',
        params:{
            token:this.token,
            idUser:this.idUser
        }
    };

    return LoadFile(ajax)
        .then(function(resolve){
            this.insertData(JSON.parse(resolve));
            this.saveToken(this.token);
            this.events.onLoadUser();
            return this.callback(this);
        }.bind(this),
        function(error) {
            console.error("Failed!", error);
            return false;
        });

};

User.prototype.onLoadUser=function(){
    this.saveToken(this.token);
    this.loadCampaigns();
    this.loadChars();
};

User.prototype.insertData=function(json){
    var {name,token,idUser}=json;
    this.name=name;
    this.token=token;
    this.idUser=idUser;
};
User.prototype.saveToken=function(token){
     if(typeof Stores!==undefined){
        localStorage.setItem('token',token);
     }
};

User.prototype.loadCampaigns=function(callback){
   // this.campaigns=new Campaigns(this.idUser,this.token,this.urls.campaigns_json,this.events.onLoadCampaigns.bind(this.events));
    return this;
};
User.prototype.onLoadCampaigns=function(){};

User.prototype.loadChars=function(){
    //this.chars=new Chars(this.idUser,this.token,this.urls.chars_json,this.events.onLoadChars.bind(this.events));
    return this;
};
User.prototype.onLoadChars=function(result){};

User.prototype.createNewUser=function(){

};

User.prototype.getName=function(){ return this.name; };
User.prototype.getAvatar=function(){ return this.avatar; };
User.prototype.getId=function(){ return this.idUser; };



User.prototype.getCampaigns=function(){
    return Object.keys(this.campaigns).map(function(x) {
                return this.campaigns[x];
            }.bind(this));
};

User.prototype.getChars=function(){

    return Object.keys(this.chars).map(function(x) {
        return this.chars[x];
    }.bind(this));
};

User.prototype.onLoad=function(value){};

export default User;
