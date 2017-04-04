// Class Char
/*
objChar:{
            "id":"00000",
            "idUser":"0000",
            "name":"namechar",
        }

*/
function Char(objChar){
    this.d20_base=objChar;
    
    this.player=this.d20_base.player_id.name;
    this.id=this.d20_base.id;
    this.name=this.d20_base.name;
    this.race=this.d20_base.race_id.name;
    this.classChar=this.d20_base.class_id.name;
    this.alignment='';
    this.deity=this.d20_base.deity_name;
    this.age=this.d20_base.age;
    this.size=this.d20_base.size;

    this.characteristics={
        str:{
            base:this.d20_base.ability_s_t_r,
            mod:0,
            temporalrarily:0,
            temporalrarilyMod:0
        },
        dex:{
            base:this.d20_base.ability_d_e_x,
            mod:0,
            temporalrarily:0,
            temporalrarilyMod:0
        },
        'int':{
            base:this.d20_base.ability_i_n_t,
            mod:0,
            temporalrarily:0,
            temporalrarilyMod:0
        },
        con:{
            base:this.d20_base.ability_c_o_n,
            mod:0,
            temporalrarily:0,
            temporalrarilyMod:0
        },
        wis:{
            base:this.d20_base.ability_w_i_s,
            mod:0,
            temporalrarily:0,
            temporalrarilyMod:0
        },
        cha:{
            base:this.d20_base.ability_c_h_a,
            mod:0,
            temporalrarily:0,
            temporalrarilyMod:0
        }
    };

    this.saving={
        fortitude:this.d20_base.saving_fortitude+this.characteristics.con.mod,
        reflex:this.d20_base.saving_reflex+this.characteristics.dex.mod,
        will:this.d20_base.saving_will+this.characteristics.wis.mod
        };
    
    this.attack={
        baseAttack:this.d20_base.base_attack,
        mele:0,
        range:0
    };
    this.attack.mele=this.attack.baseAttack+this.characteristics.str.mod;
    this.attack.range=this.attack.baseAttack+this.characteristics.dex.mod;
    
    this.HP={
        'initial':this.d20_base.hit_points,
        'total':this.d20_base.hit_points,
        'current':this.d20_base.hit_points
    };
    
    this.initiative=this.d20_base.initiative;
    this.speedBase=this.d20_base.speed;
    this.damageReduction=this.d20_base.damage_reduction;
    
    this.abilities={};
    this.weapons=[{
            name:'',
            bonus:0,
            attack:this.attack.baseAttack,
            damage:[{data:6,extra:0,type:'phisical'}],
            critic:{min:0,max:0},
            distance:0,
            weight:0,
            speed:0,
            size:0,
            properties:[]
        },
        {
            name:'Muertehelada',
            bonus:3,
            attack:this.attack.mele,
            damage:[
                    {data:6,extra:8,type:'phisical'},
                    {data:6,extra:0,type:'ice'},
                    {data:0,extra:3,type:'magic'}
            ],
            critic:{
                min:18,
                max:20
            },
            distance:0,
            weight:0,
            speed:0,
            size:0,
            properties:[{}]
        }
    ];
    
    this.armor={
        base:this.d20_base.armor_class,
        object:[{
            name:'',
            type:'',
            bonus:0,
            bonuxDexMax:0,
            penalty:0,
            spellCrash:'',
            speed:0,
            weight:0,
            properties:[]
        }],
        shield:{
            name:'',
            bonus:0,
            weight:0,
            penalty:0,
            spellCrash:'',
            properties:[]
        },
        sizeMod:0,
        natural:0,
        others:[]
    };
    
    this.CA=this.currentArmor;
    this.spells={
        'learned':[{}],
        'daily':[0,0,0,0,0,0,0,0,0,0],
        'prepared':[],
        'aditionals':[0,0,0,0,0,0,0,0,0,0]
    };
    this.spellResistance=this.d20_base.spell_resistance;
    
    this.equipment=[];
    this.money={
        gold:0,
        plane:0,
        copper:0
        };
    
    this.skills=[];
    this.languages=[];
    this.experience=0;
    this.level=0;
}


Char.prototype.currentArmor=function(){
    var armor=10;
    var aux=0;
    armor+=this.armor.base;
    for (var i=0;i<this.armor.object.length;i++){
        aux+=this.armor.object[i].bonus;
    }
    armor+=aux;
    armor+=this.armor.shield.bonus;
    armor+=this.characteristics.dex.mod;
    armor+=this.armor.sizeMod;
    armor+=this.armor.natural;
    aux=0;
    for (i=0;i<this.armor.others.length;i++){
        aux+=this.armor.others[i].bonus;
    }
    return armor+aux;
};
