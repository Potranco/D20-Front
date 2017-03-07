function Chars(idUser,token,url,callback=null){
   Elements.apply(this,arguments);
   this.chars=[];
}
Chars.prototype=Object.create(Elements.prototype);
Chars.prototype.constructor=Chars;

Chars.prototype.add=function(json){
    var aux=json.chars.length;
    
    for (var i=0;i<aux;i++){
        this.chars.push(new Char(json.chars[i]));
    }
};

