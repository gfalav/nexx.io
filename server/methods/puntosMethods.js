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
				calc(data.proyectoId);
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
		},(err,res)=>{
			if (err){
				return err;
			} else {
				calc(data.proyectoId);
				return res;
			}
		});
	},
	'puntos.delete'(data){
		var proyectoId = Puntos.findOne(data).proyectoId;

		Puntos.remove({ _id: data }, (err,res)=>{
			if (err){
				return err;
			} else {
				calc(proyectoId);
				return res;
			}
		});
	}
})



calc = function(proyectoId){
	var puntos = Puntos.find({proyectoId: proyectoId},{sort: {secuencia: +1}});
	var p1 = null;
	var p2 = null;
	var p3 = null;

	puntos.forEach(function(p,index,array){
		if (p1==null){
			p1 = p;
			Puntos.update(p1._id, { $set: {dist: 0, ang: 0 } });
		} else if (p2 == null){
			p2 = p1;
			p1 = p;
			x1 = (p2.long - p1.long) * 60 * 1852 * Math.cos(p1.lat * Math.PI / 180);
        	y1 = (p2.lat - p1.lat) * 60 * 1852;
        	p1.distancia = Math.sqrt(x1*x1 + y1 * y1);

			Puntos.update(p1._id, { $set: {dist: p1.distancia } });

		} else {
			p3 = p2;
			p2 = p1;
			p1 = p;

			x1 = (p2.long - p1.long) * 60 * 1852 * Math.cos(p1.lat * Math.PI / 180);
        	y1 = (p2.lat - p1.lat) * 60 * 1852;
        	ang1 = Math.atan2(y1, x1) * 180 / Math.PI;
    
        	x2 = (p2.long - p3.long) * 60 * 1852 * Math.cos(p2.lat * Math.PI / 180);
        	y2 = (p2.lat - p3.lat) * 60 * 1852;
        	ang2 = Math.atan2(y2, x2) * 180 / Math.PI;
    
        	ang = Math.abs(ang1 - ang2);
        	if (ang > 180){
           		ang = 360 - ang;
        	};

        	p1.distancia = Math.sqrt(x1*x1 + y1*y1);
	        p2.distancia = Math.sqrt(x2*x2 + y2*y2);
    	    p2.angulo = ang;
			Puntos.update(p1._id, { $set: {dist: p1.distancia } });
			Puntos.update(p2._id, { $set: {dist: p2.distancia } });
			Puntos.update(p2._id, { $set: {ang: p2.angulo } });
		}
	})
}