/* Campaigns class */

function Chars(idUser,callback){
    this.idUser=idUser;
    this.urls={
        'campaigns':'/test/mock_json/chars.json'
    };
    this.chars=[];
    this.loadCampaigns(callback);
}

Chars.prototype.loadCampaigns=function(callback){
    if (!this.idUser) callback(false);
    
     var ajax={
            url:this.urls.campaigns,
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

Chars.prototype.add=function(json){
    var aux=json.chars.length;
    for (var i=0;i<aux;i++){
        this.chars.push(new Char(json.chars[i]));
    }
};

