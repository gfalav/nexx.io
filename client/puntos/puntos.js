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
		return FlowRouter.getParam('proyectoId');
	}
})

Template.PuntosLst.onCreated(function() {
  this.autorun(() => {
    this.subscribe('puntos.lst', FlowRouter.getParam('proyectoId'));
  });
});

Template.PuntosLst.events({
	'click button': function(e){
		e.preventDefault();
		Meteor.call('puntos.delete', e.currentTarget.id, (err,res)=>{
			if (err){ 
				alert(err);
			} else {
				initMap();
			}
		});

	}
})

Template.PuntosLst.helpers({
	puntos: function(){
		return Puntos.find({},{sort: {secuencia: +1}});
	},
	proyectoId: function(){
		return FlowRouter.getParam('proyectoId');
	},
	dateFormat: function(date){
		return DateTime.fromFormat(date.toLocaleString(),'dd/LL/yyyy H:mm:ss').toFormat('dd/LL/yyyy');
	},
	f6d: function(number){
		return parseFloat(number).toFixed(6);
	},
	f0d: function(number){
		return parseFloat(number).toFixed(0);
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


initMap = function(){
	const uluru = { lat: -33.306673, lng: -66.336460 };
    const map = new google.maps.Map(document.getElementById("map"), {
    	zoom: 11,
    	center: uluru,
  	});

  	map.addListener("click", (e) => {
	    addpunto(e.latLng, map);
	});

	dibujatraza(map);
};

addpunto = function(latLng, map){
	var data = new Object;
	var secuencia;
	if (Puntos.findOne({}, {sort: {secuencia: -1}, limit: 1})){
		secuencia = Puntos.findOne({}, {sort: {secuencia: -1}, limit: 1}).secuencia + 10;
	} else {
		secuencia = 10;
	};

	data.lat = parseFloat(latLng.lat());
	data.long = parseFloat(latLng.lng());
	data.nombre = 'Punto....';
	data.secuencia = parseFloat(secuencia);
	data.ang = parseFloat(0);
	data.dist = parseFloat(0);
	data.proyectoId = FlowRouter.getParam('proyectoId');

	Meteor.call('puntos.insert', {data}, (err, res)=> {
		if (err){ 
			alert(err);
		} else {
			dibujatraza(map);
		}
	});
}

dibujatraza = function(map) {
	var puntos = Puntos.find({}).map(function(p){
		var mylatlng = new google.maps.LatLng(p.lat, p.long);
		var marker = new google.maps.Marker({
		    position: mylatlng,
		    icon: '/piquete.png',
		    map: map,
		    title: p.nombre
		}); 
		 return mylatlng;
	});
	var traza = new google.maps.Polyline({
		    path: puntos,
		    strokeColor: "#5d4cf5",
		    strokeOpacity: 1.0,
		    strokeWeight: 2
		});
  	traza.setMap(map);
}