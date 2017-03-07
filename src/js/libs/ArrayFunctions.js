function ArrayFunctions(){
}

ArrayFunctions.prototype.add=function(name,callback){
	this[name]=callback;
};
ArrayFunctions.prototype.remove=function(name){
	this[name]=undefined;
};

function PubSub() {
    this.callbacks=[];
}
PubSub.prototype.add=function(name,callback){
	if (this.callbacks[name]===undefined) {
		this.callbacks[name]=[];
		this[name]=function(){
			console.log(this);
			var aux = this.callbacks[name].length;
			for (var i=0;i<aux;i++){
				this.callbacks[name][i].apply(null,arguments);
			}
		};
	}
	this.callbacks[name].push(callback);
	
};
PubSub.prototype.remove=function(name){
	this.callbacks[name]=undefined;
	this[name]=function(){console.error('Function remove.');};
};

/* example:
var pub=new PubSub();

pub.add('Evento1',function(parameter1,parameter2){
	console.log(this);
	console.log('Evento1 con param1: '+parameter1);
	console.log('Evento1 con param2: '+parameter2);
});
pub.add('Evento1',function(){
	console.log('Evento1 sin param.');

});
pub['Evento1']('Hola mundo');
pub['Evento1']('Hola mundo','Parametro 2');
pub.remove('Evento1');
pub['Evento1']('Hola mundo','Parametro 2');
*/

/*
PubSub.prototype.add2=function(name,callback){
	if (this.callbacks[name]===undefined) this.callbacks[name]=[];
	this.callbacks[name].push(callback);
	this[name]=(...args) => {
		this.callbacks.forEach( fn => fn.call(null, ...args) )
	};
};

*/
