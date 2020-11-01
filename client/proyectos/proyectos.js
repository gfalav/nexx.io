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

		Meteor.call('proyectos.insert', {data}, (err, res)=> {
			if (err){ 
				alert(err);
			} else {
				FlowRouter.go('/proyectos/' + res);
			}
		});
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
		return DateTime.fromISO(date.toISOString()).toFormat('dd/LL/yyyy');
	}
});

Template.ProyectosShow.onCreated(function() {
  this.autorun(() => {
    this.subscribe('proyectos.show', FlowRouter.getParam('_id') );
  });
});

Template.ProyectosShow.helpers({
	proyecto: function(){
		return Proyectos.findOne(FlowRouter.getParam('_id'));
	},
	readOnly: function(){
		return 'readonly';
	}
});

Template.ProyectosEdit.onCreated(function() {
  this.autorun(() => {
    this.subscribe('proyectos.show', FlowRouter.getParam('_id') );
  });
});

Template.ProyectosEdit.helpers({
	proyecto: function(){
		return Proyectos.findOne(FlowRouter.getParam('_id'));
	}
});

Template.ProyectosEdit.events({
	'submit form': function(e){
		e.preventDefault();
		var data = new Object();

		data._id = e.target._id.value;
		data.nombre = e.target.nombre.value;
		data.desc = e.target.desc.value;
		data.proyectista = e.target.proyectista.value;
		data.comitente = e.target.comitente.value;
		data.contratista = e.target.contratista.value;
		data.expediente = e.target.expediente.value;
		data.ubicacion = e.target.ubicacion.value;

		Meteor.call('proyectos.update', {data}, (err, res)=> {
			if (err){ 
				alert(err);
			} else {
				FlowRouter.go('/proyectos/'+data._id);
			}
		});
	}
});