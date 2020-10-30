Meteor.publish('puntos.lst', function(proyectoId){
	return Puntos.find({proyectoId: proyectoId})
});

Meteor.publish('puntos.show', function(id){
	return Puntos.find({_id: id })
});