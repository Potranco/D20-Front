// Class Char
/*
objChar:{
            "id":"00000",
            "idUser":"0000",
            "name":"namechar",
        }

*/
function Char(objChar){
    var {id,idUser,
        name,
        race,
        lvl,
        classe
        }=objChar;

    this.id=id;
    this.idUser=idUser;
    this.name=name;
    this.race=race;
    this.lvl=lvl;
    this.classe=classe;
   
}
