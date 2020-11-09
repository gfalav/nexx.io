Meteor.publish('tramos.lst', function(proyectoId){
	return Tramos.find({proyectoId: proyectoId})
});

Meteor.publish('tramos.show', function(id){
	return Tramos.find({_id: id })
});