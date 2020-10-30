Meteor.methods({
	'puntos.insert'({data}){

		var id;

		id = Puntos.insert({
			nombre: data.nombre,
			secuencia: data.secuencia,
			lat: data.lat,
			long: data.long,
			ang: data.ang,
			dist: data.dist,
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
	'puntos.update'({data}){

		Puntos.update(data._id, { 
			$set: {
				nombre: data.nombre,
				secuencia: data.secuencia,
				lat: data.lat,
				long: data.long,
				ang: data.ang,
				dist: data.dist,
				falta: data.falta,
				proyectoId: data.proyectoId
			}
		});
	}
})