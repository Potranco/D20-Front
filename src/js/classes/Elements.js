/* Campaigns class */

function Elements(token,url,callback=null){
    this.token=token;
    this.url=url;
    this.load(callback);
}

Elements.prototype.load=function(callback){
    if (!this.token) return callback(false);
    var ajax={
            url:this.url,
            method: 'GET',
            params:{
                token:this.token,
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

