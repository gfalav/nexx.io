import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/tramos/:proyectoId', {
  name: 'tramos',
  action() {
    // Render a template using Blaze
    BlazeLayout.render('MainLayout', { top: "Topbar", main: "TramosLst" });

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

FlowRouter.route('/tramos/new/:proyectoId', {
  name: 'tramoNew',
  action() {
    // Render a template using Blaze
    BlazeLayout.render('MainLayout', { top: "Topbar", main: "TramosNew" });

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

FlowRouter.route('/tramos/tramo/:_id', {
  name: 'tramoShow',
  action() {
    // Render a template using Blaze
    BlazeLayout.render('MainLayout', { top: "Topbar", main: "TramosShow" });

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

FlowRouter.route('/tramos/tramo/:_id/edit', {
  name: 'tramoEdit',
  action() {
    // Render a template using Blaze
    BlazeLayout.render('MainLayout', { top: "Topbar", main: "TramosEdit" });

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});