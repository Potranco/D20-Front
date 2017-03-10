/* Campaigns class */

function Elements(token,url,callback=null){
    this.load(token,url,callback);
}

Elements.prototype.load=function(token,url,callback){
    if (!token) return callback(false);
    var ajax={
            url:url,
            method: 'GET',
            params:{
                token:token,
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

