import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/puntos/:proyectoId', {
  name: 'puntos',
  action() {
    // Render a template using Blaze
    BlazeLayout.render('MainLayout', { top: "Topbar", main: "PuntosLst" });

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

FlowRouter.route('/puntos/new/:proyectoId', {
  name: 'puntoNew',
  action() {
    // Render a template using Blaze
    BlazeLayout.render('MainLayout', { top: "Topbar", main: "PuntosNew" });

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

FlowRouter.route('/puntos/punto/:_id', {
  name: 'puntoShow',
  action() {
    // Render a template using Blaze
    BlazeLayout.render('MainLayout', { top: "Topbar", main: "PuntosShow" });

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

FlowRouter.route('/puntos/punto/:_id/edit', {
  name: 'puntoEdit',
  action() {
    // Render a template using Blaze
    BlazeLayout.render('MainLayout', { top: "Topbar", main: "PuntosEdit" });

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});