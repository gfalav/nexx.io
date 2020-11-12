import SimpleSchema from 'simpl-schema';

CondClimas = new Mongo.Collection('condclimas');

schema = new SimpleSchema({
	nombre:      	{type: String, max:50},
	temp:   		{type: Number},
	viento:   		{type: Number},
	hielo:   		{type: Number},
	zonaId:   		{type: Number}
});

CondClimas.attachSchema(schema);

/*
CondClimas.insert({zonaId: 2, nombre: 'Tmax', temp: 45, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 2, nombre: 'Tmin', temp: -15, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 2, nombre: 'T c/Vmax', temp: 10, viento: 120, hielo: 0});
CondClimas.insert({zonaId: 2, nombre: 'T c/Vmed', temp: -5, viento: 50, hielo: 0});
CondClimas.insert({zonaId: 2, nombre: 'Tmed', temp: 16, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 6, nombre: 'Tracc Max', temp: -15, viento: 0, hielo: 10});
CondClimas.insert({zonaId: 6, nombre: 'Adicional', temp: -10, viento: 120, hielo: 0});
CondClimas.insert({zonaId: 6, nombre: 'Flecha Max 1', temp: 15, viento: 120, hielo: 0});
CondClimas.insert({zonaId: 6, nombre: 'Flecha Max 2', temp: 0, viento: 0, hielo: 10});
CondClimas.insert({zonaId: 6, nombre: 'Flecha Max 3', temp: 50, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 6, nombre: 'Flecha Min', temp: -15, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 6, nombre: 'Tmed', temp: 15, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 1, nombre: 'Tmax', temp: 50, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 1, nombre: 'Tmin', temp: -5, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 1, nombre: 'T c/Vmax', temp: 10, viento: 120, hielo: 0});
CondClimas.insert({zonaId: 1, nombre: 'T c/Vmed', temp: -5, viento: 50, hielo: 0});
CondClimas.insert({zonaId: 1, nombre: 'Tmed', temp: 20, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 3, nombre: 'Tmax', temp: 45, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 3, nombre: 'Tmin', temp: -10, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 3, nombre: 'T c/Vmax', temp: 15, viento: 120, hielo: 0});
CondClimas.insert({zonaId: 3, nombre: 'T c/Vmed', temp: -5, viento: 50, hielo: 0});
CondClimas.insert({zonaId: 3, nombre: 'Tmed', temp: 16, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 4, nombre: 'Tmax', temp: 35, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 4, nombre: 'Tmin', temp: -20, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 4, nombre: 'T c/Vmax', temp: 10, viento: 120, hielo: 0});
CondClimas.insert({zonaId: 4, nombre: 'T c/Vmed', temp: -5, viento: 50, hielo: 10});
CondClimas.insert({zonaId: 4, nombre: 'Tmed', temp: 8, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 5, nombre: 'Tmax', temp: 35, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 5, nombre: 'Tmin', temp: -20, viento: 0, hielo: 0});
CondClimas.insert({zonaId: 5, nombre: 'T c/Vmax', temp: 10, viento: 130, hielo: 0});
CondClimas.insert({zonaId: 5, nombre: 'T c/Vmed', temp: -5, viento: 50, hielo: 0});
CondClimas.insert({zonaId: 5, nombre: 'Tmed', temp: 9, viento: 0, hielo: 0});
*/