Template.Topbar.events({
	'click .logoutBtn'(event) {
		AccountsTemplates.logout();
	}
})

Template.Topbar.helpers({
	usrwelcome() {
		if (Meteor.userId() == null) {
			return false;
		} else {
			return true;
		}
	}
})