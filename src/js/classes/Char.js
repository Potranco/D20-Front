// Class Char
/*
objChar:{
            "id":"00000",
            "name":"name Char",
            "masterId":"0000",
            "users":["0000"]
        }

*/
function Char(objChar){
    for (var key in objChar){
        this[key]=objChar[key];
    }
}
