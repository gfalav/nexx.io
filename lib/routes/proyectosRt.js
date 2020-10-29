import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/proyectos', {
  name: 'proyectos',
  action() {
    // Render a template using Blaze
    BlazeLayout.render('MainLayout', { top: "Topbar", main: "ProyectosLst" });

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

FlowRouter.route('/proyectos/new', {
  name: 'proyectoNew',
  action() {
    // Render a template using Blaze
    BlazeLayout.render('MainLayout', { top: "Topbar", main: "ProyectosNew" });

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

FlowRouter.route('/proyectos/:_id', {
  name: 'proyectoShow',
  action() {
    // Render a template using Blaze
    BlazeLayout.render('MainLayout', { top: "Topbar", main: "ProyectosShow" });

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});