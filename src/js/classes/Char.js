// Class Char
/*
objChar:{
            "id":"00000",
            "idUser":"0000",
            "name":"namechar",
        }

*/
function Char(objChar){
    this.d20_char=objChar;
    this.id=this.d20_char.id;
    this.name=this.d20_char.name;
    this.race=this.d20_char.race_id.name;
    this.player=this.d20_char.player_id.name;
    this.classChar=this.d20_char.class_id.name;
    this.level=0;
}



