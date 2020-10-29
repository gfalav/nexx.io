Meteor.publish('proyectos.lst', function(){
	return Proyectos.find({userId: this.userId},
						  {fields: { nombre: 1, desc: 1, comitente: 1, falta: 1}})
});

Meteor.publish('proyectos.show', function(id){
	return Proyectos.find({userId: this.userId, _id: id })
});