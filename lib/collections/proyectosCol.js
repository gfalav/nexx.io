import SimpleSchema from 'simpl-schema';

Proyectos = new Mongo.Collection('proyectos');

schema = new SimpleSchema({
	nombre:      {type: String, max:50},
	desc:        {type: String, max:80, optional: true},
	comitente:   {type: String},
	contratista: {type: String},
	proyectista: {type: String},
	expediente:  {type: String},
	falta:       {type: Date, defaultValue: new Date(), optional: true},
	ubicacion:   {type: String, optional: true}
});

Proyectos.attachSchema(schema);