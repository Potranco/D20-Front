function ArrayFunctions(){
}
ArrayFunctions.prototype.add=function(name,callback){
	this[name]=callback;
};
ArrayFunctions.prototype.remove=function(name){
	this[name]=function(){console.error('Function['+name+'] removed.');};
};

function PubSub() {
    this.callbacks=[];
}
/*
PubSub.prototype.add=function(name,callback){
	if (this.callbacks[name]===undefined) {
		this.callbacks[name]=[];
		this[name]=function(){
			var aux = this.callbacks[name].length;
			for (var i=0;i<aux;i++){
				this.callbacks[name][i].apply(null,arguments);
			}
		};
	}
	this.callbacks[name].push(callback);
};

*/
PubSub.prototype.add=function(name,callback){
	if (this.callbacks[name]===undefined) {
		this.callbacks[name]=[];
		this[name]=function(){
			return Promise.all(
				this.callbacks[name].map(function(execute){
					Promise.resolve(execute.apply(null, arguments));
				})
			)
		};
	}
	this.callbacks[name].push(callback);
};

PubSub.prototype.remove=function(name){
	this.callbacks[name]=undefined;
	this[name]=function(){console.error('Function['+name+'] removed.');};
};

/*
function PubSub() {
   this.callbacks={};
}

PubSub.prototype.on=function(name,callback){
    this.callbacks[name] =
      (this.callbacks[name] || []).concat(callback)
};

PubSub.prototype.emit = function (name, ...args) {
  return Promise.all(
    this.callbacks[name]
      .map(fnc => Promise.resolve(fnc.apply(this, args)))
  )
}

var pubSub = new PubSub()

pubSub.on('event_one', function(label = 'Hello'){
  setTimeout(function(){console.log(`Handler ${label}`);}, 3000)
})
pubSub.on('event_one', function(label = 'World'){
  setTimeout(function(){console.log(`Handler ${label}`);}, 2000)
})

pubSub.emit('event_one', 'pepito')
*/