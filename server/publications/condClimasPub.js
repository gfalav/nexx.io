Meteor.publish('condClimas.lst', function(){
	return CondClimas.find({})
});
