Meteor.publish('conductores.lst', function(){
	return Conductores.find({})
});
