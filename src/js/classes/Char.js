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
        'str':this.d20_base.ability_s_t_r,
        'strMod':0,
        'dex':this.d20_base.ability_d_e_x,
        'dexMod':0,
        'int':this.d20_base.ability_i_n_t,
        'intMod':0,
        'con':this.d20_base.ability_c_o_n,
        'conMod':0,
        'wis':this.d20_base.ability_w_i_s,
        'wisMod':0,
        'cha':this.d20_base.ability_c_h_a,
        'chaMod':0
    };

    this.saving={
        fortitude:this.d20_base.saving_fortitude,
        reflex:this.d20_base.saving_reflex,
        will:this.d20_base.saving_will
        };
    
    this.attack={
        'baseAttack':this.d20_base.base_attack,
        'mele':0,
        'range':0
    };
    
    this.HP={
        'initial':this.d20_base.hit_points,
        'total':this.d20_base.hit_points,
        'current':this.d20_base.hit_points
    };
    this.CA=this.d20_base.armor_class;
    this.initiative=this.d20_base.initiative;
    this.speedBase=this.d20_base.speed;
    this.damageReduction=this.d20_base.damage_reduction;
    
    this.abilities={};
    this.weapons=[{
            name:'',
            bonus:0,
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
        objs:[{
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
        }
    };
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



