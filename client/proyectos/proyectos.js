import { DateTime } from "luxon";
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.ProyectosNew.events({
	'submit form': function(e){
		e.preventDefault();
		var data = new Object();

		data.nombre = e.target.nombre.value;
		data.desc = e.target.desc.value;
		data.proyectista = e.target.proyectista.value;
		data.comitente = e.target.comitente.value;
		data.contratista = e.target.contratista.value;
		data.expediente = e.target.expediente.value;
		data.ubicacion = e.target.ubicacion.value;

		Meteor.call('proyectos.insert', {data} );
	}
});

Template.ProyectosLst.onCreated(function() {
  this.autorun(() => {
    this.subscribe('proyectos.lst');
  });
});

Template.ProyectosLst.helpers({
	proyectos: function(){
		return Proyectos.find({});
	},

	dateFormat: function(date){
		return DateTime.fromFormat(date.toLocaleString(),'dd/LL/yyyy HH:mm:ss').toFormat('dd/LL/yyyy');
	}
});

Template.ProyectosShow.onCreated(function() {
  this.autorun(() => {
    this.subscribe('proyectos.show', FlowRouter.getParam('_id') );
  });
});

Template.ProyectosForm.helpers({
	p: function(){
		if (FlowRouter.getRouteName() == 'proyectoNew') {
			return null;
		} else {
			return Proyectos.findOne(FlowRouter.getParam('_id'));
		}
	},
	readOnly: function(){

		if (FlowRouter.getRouteName() == 'proyectoShow') {
			return 'readonly';
		} else {
			return '';
		}
	}
});