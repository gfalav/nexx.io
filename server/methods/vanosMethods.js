Meteor.methods({
	'calcVano'(conductorId, zonaId, vano, hConductor, tmax){
		cond = Conductores.findOne(conductorId);
		zona = Zonas.findOne({zonaId: zonaId});
		cc1 = CondClimas.find({'zonaId': zonaId});
		cc2 = CondClimas.find({'zonaId': zonaId});
		arrCalcs = [];
		arrCalcsFin = [];
		flag = 0;

		cc1.map(function(c1){
			pv1 = pvcond(zona.zonaId, c1.viento, cond.d, hConductor);
			ph1 = phcond(zona.zonaId, cond.d, c1.hielo);
			pt1 = Math.sqrt(pv1**2 + (ph1 + cond.p/1000)**2);
			pang1 = Math.atan(pv1 / (cond.p/1000 + ph1)) / Math.PI * 180;
      		t1 = tmax * cond.s;
      		f1 = vano**2 * pt1 / 8 / t1;
      		flag = 0;

      		k1 = vano**2 * pt1**2 / 24 / (t1**2)  - cond.ct * c1.temp - t1 / cond.ce / cond.s;

      		arrCalcs = cc2.map(function(c2){

      			pv2 = pvcond(zona.zonaId, c2.viento, cond.d, hConductor);
				ph2 = phcond(zona.zonaId, cond.d, c2.hielo);
				pt2 = Math.sqrt(pv2**2 + (ph2 + cond.p/1000)**2);
				pang2 = Math.atan(pv2 / (cond.p/1000 + ph2)) / Math.PI * 180;
	      		k2 = (k1 + cond.ct * c2.temp) * cond.ce * cond.s; 
          		k3 = vano**2 * pt2**2 * cond.ce * cond.s / 24;
          		t2 = newton(k2,k3);
          		f2 = vano**2 * pt2 / 8 / t2;
          		if (t2 > t1){
          			flag = 1;
          		};

          		var obj = {};
	      		obj.condClima = c2.nombre;
	      		obj.temp = c2.temp;
	      		obj.viento = c2.viento;
	      		obj.hielo = c2.hielo;
	      		obj.pt = pt2;
	      		obj.tension = t2/cond.s;
	      		obj.tiro = t2;
	      		obj.flecha = f2;
	      		obj.flechaH = f2 * Math.sin(pang2 / 180 * Math.PI);
	      		obj.flechaV = f2 * Math.cos(pang2 / 180 * Math.PI);
	      		return obj;

      		});

      		if (flag == 0){
		      	arrCalcsFin = arrCalcs;
      		};
		});
		console.log(arrCalcsFin);
		return arrCalcsFin;


	}
})


pvcond = function(zonaId, v, d, vano, h_conductor){

	if (zonaId == 6){
		if (v != 0) {
        	pv = 0.05 * d;
        } else {
        	pv = 0;
        }
	} else {
		if (v <= 120) {
          k = 0.85;
		} else {
          k = 0.75;
		}
        if (vano > 200) {
          q = 0.6 + 80 / vano;
        } else {
          q = 1;
        }
        if (h_conductor > 30){
        	v = v * Math.sqrt(0.8 + h_conductor/100);
        } else if (h_conductor > 20 && h_conductor < 30){
            v = v * 1.05;
        }
        if (d<12.5){
          c = 1.2
        }
        else if (d<15.8){
          c = 1.1
        }
        else {
          c = 1
        }
	}

	pv = k * c * (v/3.6) ** 2 / 16000 * d * q;

    return pv
}

phcond = function(zonaId, d, e){
	var ph = 0;

	if (zonaId==6){
		if (e != 0){
          ph = 0.18 * Math.sqrt(d);
		} else {
          ph = 0;
		}
	} else {
		ph = 0.0029845 * e * (e + d);
	}

	return ph;
}

newton = function(k2,k3){
    n=0;
    x0 = 0.01;
    
    while (n < 500) {
      x = x0 - (x0**3 + k2 * x0**2 - k3) / (3 * x0**2 + 2 * k2 * x0);
      x0 = x;
      n += 1;
    }
    return x;  
}