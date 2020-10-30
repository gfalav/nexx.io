import { DateTime } from "luxon";
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.PuntosNew.events({
	'submit form': function(e){
		e.preventDefault();
		var data = new Object();

		data.nombre = e.target.nombre.value;
		data.secuencia = parseFloat(e.target.secuencia.value);
		data.lat = parseFloat(e.target.lat.value);
		data.long = parseFloat(e.target.long.value);
		data.ang = parseFloat(e.target.ang.value);
		data.dist = parseFloat(e.target.dist.value);
		data.proyectoId = FlowRouter.getParam('proyectoId');

		Meteor.call('puntos.insert', {data}, (err, res)=> {
			if (err){ 
				alert(err);
			} else {
				FlowRouter.go('/puntos/punto/' + res);
			}
		});
	}
});

Template.PuntosNew.helpers({
	proyectoId: function(){

	}
})

Template.PuntosLst.onCreated(function() {
  this.autorun(() => {
    this.subscribe('puntos.lst', FlowRouter.getParam('proyectoId'));
  });
});

Template.PuntosLst.helpers({
	puntos: function(){
		return Puntos.find({});
	},
	proyectoId: function(){
		return FlowRouter.getParam('proyectoId');
	},
	dateFormat: function(date){
		return DateTime.fromFormat(date.toLocaleString(),'dd/LL/yyyy H:mm:ss').toFormat('dd/LL/yyyy');
	}
});

Template.PuntosShow.onCreated(function() {
  this.autorun(() => {
    this.subscribe('puntos.show', FlowRouter.getParam('_id') );
  });
});

Template.PuntosShow.helpers({
	punto: function(){
		return Puntos.findOne(FlowRouter.getParam('_id'));
	},
	readOnly: function(){
		return 'readonly';
	}
});

Template.PuntosEdit.onCreated(function() {
  this.autorun(() => {
    this.subscribe('puntos.show', FlowRouter.getParam('_id') );
  });
});

Template.PuntosEdit.helpers({
	punto: function(){
		return Puntos.findOne(FlowRouter.getParam('_id'));
	}
});

Template.PuntosEdit.events({
	'submit form': function(e){
		e.preventDefault();
		var data = new Object();

		data._id = e.target._id.value;
		data.nombre = e.target.nombre.value;
		data.secuencia = e.target.secuencia.value;
		data.lat = e.target.lat.value;
		data.long = e.target.long.value;
		data.ang = e.target.ang.value;
		data.dist = e.target.dist.value;

		Meteor.call('puntos.update', {data}, (err, res)=> {
			if (err){ 
				alert(err);
			} else {
				FlowRouter.go('/puntos/punto/'+data._id);
			}
		});
	}
});