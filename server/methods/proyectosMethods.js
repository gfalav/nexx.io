Meteor.methods({
	'proyectos.insert'({data}){

		Proyectos.insert({
			nombre: data.nombre,
			desc: data.desc,
			comitente: data.comitente,
			contratista: data.contratista,
			proyectista: data.proyectista,
			expediente: data.expediente,
			falta: new Date(),
			ubicacion: data.ubicacion,
			userId: this.userId
		})
	}
})