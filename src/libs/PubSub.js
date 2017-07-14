function PubSub() {
    this.callbacks=[];
}

PubSub.prototype.add=function(name,callback){
	if (this.callbacks[name]===undefined) {
		this.callbacks[name]=[];
		this[name]=function(){
			return Promise.all(
				this.callbacks[name].map(function(execute){
					Promise.resolve(execute.apply(null, arguments));
				})
			);
		};
	}
	this.callbacks[name].push(callback);
};


PubSub.prototype.removeAll=function(name){
	this.callbacks[name]=undefined;
	this[name]=function(){console.error('Function['+name+'] removed.');};
};

export default PubSub;