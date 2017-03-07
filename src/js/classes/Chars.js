function Chars(idUser,token,url,callback=null){
   Elements.apply(this,arguments);
}
Chars.prototype=Object.create(Elements.prototype);
Chars.prototype.constructor=Chars;

Chars.prototype.add=function(json){
    var aux=json.chars.length;
    
    for (var i=0;i<aux;i++){
        this[i]=new Char(json.chars[i]);
    }
};

