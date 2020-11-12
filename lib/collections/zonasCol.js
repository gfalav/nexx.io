import SimpleSchema from 'simpl-schema';

Zonas = new Mongo.Collection('zonas');

schema = new SimpleSchema({
	zonaId: 	 {type: Number},
	nombre:      {type: String, max:50}
});

Zonas.attachSchema(schema);

/*
Zonas.insert({zonaId: 1, nombre: 'Zona A'});
Zonas.insert({zonaId: 2, nombre: 'Zona B'});
Zonas.insert({zonaId: 3, nombre: 'Zona C'});
Zonas.insert({zonaId: 4, nombre: 'Zona D'});
Zonas.insert({zonaId: 5, nombre: 'Zona E'});
Zonas.insert({zonaId: 6, nombre: 'Zona Espanola B'});
*/