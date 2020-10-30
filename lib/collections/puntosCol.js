import SimpleSchema from 'simpl-schema';

Puntos = new Mongo.Collection('puntos');

schema = new SimpleSchema({
	nombre:      {type: String, max:50 },
	secuencia:   {type: Number, optional: true},
	lat:         {type: Number},
	long:        {type: Number},
	ang:         {type: Number},
	dist:        {type: Number},
	falta:       {type: Date, defaultValue: new Date(), optional: true},
	proyectoId:  {type: String}
});

Puntos.attachSchema(schema);