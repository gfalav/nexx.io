Meteor.publish('zonas.lst', function(){
	return Zonas.find({})
});
