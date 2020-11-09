import { DateTime } from "luxon";
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.TramosNew.events({
	'submit form': function(e){
		e.preventDefault();
		var data = new Object();

		data.nombre = e.target.nombre.value;
		data.secuencia = parseFloat(e.target.secuencia.value);
		data.tipo = e.target.tipo.value;
		data.cantidad = e.target.cantidad.value;
		data.proyectoId = FlowRouter.getParam('proyectoId');

		Meteor.call('tramos.insert', {data}, (err, res)=> {
			if (err){ 
				alert(err);
			} else {
				FlowRouter.go('/tramos/tramo/' + res);
			}
		});
	}
});

Template.TramosNew.helpers({
	proyectoId: function(){
		return FlowRouter.getParam('proyectoId');
	}
})

Template.TramosLst.onCreated(function() {
  this.autorun(() => {
    this.subscribe('tramos.lst', FlowRouter.getParam('proyectoId'));
  });
});

Template.TramosLst.events({
	'click .del-btn': function(e){
		e.preventDefault();
		
		Meteor.call('tramos.delete', e.currentTarget.id, (err,res)=>{
				if (err){ 
					alert(err);
				} else {
					FlowRouter.go('/tramos/' + FlowRouter.getParam('proyectoId'));
				}
		});
	}
})

Template.TramosLst.helpers({
	tramos: function(){
		return Tramos.find({},{sort: {secuencia: +1}});
	},
	proyectoId: function(){
		return FlowRouter.getParam('proyectoId');
	},
	dateFormat: function(date){
		return DateTime.fromFormat(date.toLocaleString(),'dd/LL/yyyy H:mm:ss').toFormat('dd/LL/yyyy');
	}
});

Template.TramosShow.onCreated(function() {
  this.autorun(() => {
    this.subscribe('tramos.show', FlowRouter.getParam('_id') );
  });
});

Template.TramosShow.helpers({
	tramo: function(){
		return Tramos.findOne(FlowRouter.getParam('_id'));
	},
	readOnly: function(){
		return 'readonly';
	}
});

Template.TramosEdit.onCreated(function() {
  this.autorun(() => {
    this.subscribe('tramos.show', FlowRouter.getParam('_id') );
  });
});

Template.TramosEdit.helpers({
	tramo: function(){
		return Tramos.findOne(FlowRouter.getParam('_id'));
	}
});

Template.TramosEdit.events({
	'submit form': function(e){
		e.preventDefault();
		var data = new Object();

		data._id = e.target._id.value;
		data.nombre = e.target.nombre.value;
		data.secuencia = e.target.secuencia.value;
		data.tipo = e.target.tipo.value;
		data.cantidad = e.target.cantidad.value;

		Meteor.call('tramos.update', {data}, (err, res)=> {
			if (err){ 
				alert(err);
			} else {
				FlowRouter.go('/tramos/tramo/'+data._id);
			}
		});
	}
});

Template.TramosCondsForm.events({
	'submit #condsForm': function(e){
		e.preventDefault();
		var data = new Object();
		data.vmax = parseFloat(e.target.vmax.value);
		data.retmax = parseFloat(e.target.retmax.value);
		data.proyectoId = FlowRouter.getParam('proyectoId');
		Meteor.call('tramos.calculo', data )
	}
})