Meteor.methods({
	'tramos.insert'({data}){

		var id;

		id = Tramos.insert({
			nombre: data.nombre,
			secuencia: data.secuencia,
			tipo: data.tipo,
			cantidad: data.cantidad,
			falta: new Date(),
			proyectoId: data.proyectoId
		}, (err,res)=>{
			if (err){
				return err;
			} else {
				return res;
			}
		});
		return id;
	},
	'tramos.update'({data}){

		Tramos.update(data._id, { 
			$set: {
			nombre: data.nombre,
			secuencia: data.secuencia,
			tipo: data.tipo,
			cantidad: data.cantidad,
			falta: new Date(),
			proyectoId: data.proyectoId
			}
		},(err,res)=>{
			if (err){
				return err;
			} else {
				return res;
			}
		});
	},
	'tramos.delete'(data){
		var proyectoId = Tramos.findOne(data).proyectoId;

		Tramos.remove({ _id: data }, (err,res)=>{
			if (err){
				return err;
			} else {
				return res;
			}
		});
	},
	'tramos.calculo'(data){

		var n = 1;
		var proyectoId = data.proyectoId;
		var puntos = Puntos.find({proyectoId: proyectoId},{sort: {secuencia: +1}});
		Tramos.remove({proyectoId: proyectoId});

		puntos.forEach(function(p, index, array){

			var total = Math.trunc(p.dist/data.vmax);
			var ret = Math.trunc(p.dist/data.retmax);
			var alin = total -ret;
			var vanoprom = Math.round(p.dist/(total+1) * 100)/100;

			if (n == 1 ){
				Tramos.insert({
					nombre: 'Tramo '+ (n*10),
					secuencia: n*10,
					vano: 0,
					alineacion: 0,
					retencion: 0,
					especial: 0,
					tfinal: 'Arranque',
					falta: new Date(),
					proyectoId: proyectoId
				});
			} else if (n == puntos.count()){
				Tramos.insert({
					nombre: 'Tramo '+ (n*10),
					secuencia: n*10,
					vano: vanoprom,
					alineacion: alin,
					retencion: ret,
					especial: 0,
					tfinal: 'Terminal',
					falta: new Date(),
					proyectoId: proyectoId
				});
			} else {
				Tramos.insert({
					nombre: 'Tramo '+ (n*10),
					secuencia: n*10,
					vano: vanoprom,
					alineacion: alin,
					retencion: ret,
					especial: p.ang,
					tfinal: 'Ret Angular',
					falta: new Date(),
					proyectoId: proyectoId
				});
			}
			n++;

		});

	}
})
