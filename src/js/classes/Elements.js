/* Campaigns class */

function Elements(idUser,token,url,callback=null){
    this.load(idUser,token,url,callback);
}

Elements.prototype.load=function(idUser,token,url,callback){
    if (!token) return callback(false);
    var ajax={
            url:url,
            method: 'GET',
            params:{
                token:token,
                idUser:idUser
            }
        };
        
    loadFile(ajax)
        .then(function(resolve){
            this.add(JSON.parse(resolve));
            callback(true);
        }.bind(this),
        function(error) {
            console.error("Failed!", error);
            return false;
        });    
};

Elements.prototype.add=function(json){
    for(var key in json){
        this[key]=json[key];
    }
};

