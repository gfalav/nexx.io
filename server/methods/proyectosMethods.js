Meteor.methods({
	'proyectos.insert'({data}){

		var id;

		id = Proyectos.insert({
			nombre: data.nombre,
			desc: data.desc,
			comitente: data.comitente,
			contratista: data.contratista,
			proyectista: data.proyectista,
			expediente: data.expediente,
			falta: new Date(),
			ubicacion: data.ubicacion,
			userId: this.userId
		}, (err,res)=>{
			if (err){
				return err;
			} else {
				return res;
			}
		});
		return id;
	},
	'proyectos.update'({data}){

		Proyectos.update(data._id, { 
			$set: {
				nombre: data.nombre,
				desc: data.desc,
				comitente: data.comitente,
				contratista: data.contratista,
				proyectista: data.proyectista,
				expediente: data.expediente,
				falta: data.falta,
				ubicacion: data.ubicacion,
				userId: data.userId
			}
		});
	}
})