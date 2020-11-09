import SimpleSchema from 'simpl-schema';

Tramos = new Mongo.Collection('tramos');

schema = new SimpleSchema({
	nombre:      {type: String, max:50 },
	secuencia:   {type: Number, optional: true},
	vano:        {type: Number},
	alineacion:  {type: Number},
	retencion:   {type: Number},
	especial:    {type: Number},
	tfinal:      {type: String},
	falta:       {type: Date, defaultValue: new Date(), optional: true},
	proyectoId:  {type: String}
});

Tramos.attachSchema(schema);