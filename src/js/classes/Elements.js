/* Campaigns class */

function Elements(idUser,token,url,callback=null){
    this.idUser=idUser;
    this.url=url;
    this.token=token;
    this.load(callback);
    console.log(this.url)
}

Elements.prototype.load=function(callback){
    if (!this.idUser) callback(false);
    var ajax={
            url:this.url,
            method: 'GET',
            params:{
                token:this.token,
                idUser:this.idUser
            }
        };
        
    loadFile(ajax)
        .then(function(resolve){
            this.add(JSON.parse(resolve));
            callback();
        }.bind(this),
        function(error) {
            console.error("Failed!", error);
            return false;
        });    
};

Elements.prototype.add=function(json){
    for(key in json){
        this[key]=json[key];
    }
};

