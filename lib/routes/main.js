import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.triggers.enter([checkLogged]);


FlowRouter.route('/', {
  name: 'index',
  action() {
    // Render a template using Blaze
    BlazeLayout.render('MainLayout', { top: "Topbar", main: "Welcome" });

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});


// Create 404 route (catch-all)
FlowRouter.route('*', {
  action() {
    // Show 404 error page using Blaze
    BlazeLayout.render('MainLayout', { top: "Topbar", main: "NotFound" });

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

function checkLogged() {
  if (!Meteor.userId()) {
    FlowRouter.go('/');
  }
}