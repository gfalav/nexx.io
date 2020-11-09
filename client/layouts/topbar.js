Template.Topbar.events({
	'click .logoutBtn'(event) {
		AccountsTemplates.logout();
	}
})

Template.Topbar.helpers({
	usrWelcome: function(){
		if (Meteor.userId()){
			return true;
		} else {
			return false;
		}
	}
})