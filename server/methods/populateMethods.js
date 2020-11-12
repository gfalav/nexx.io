Meteor.methods({
	'populate'(){
		Zonas.insert({zonaId: 1, nombre: 'Zona A'});
		Zonas.insert({zonaId: 2, nombre: 'Zona B'});
		Zonas.insert({zonaId: 3, nombre: 'Zona C'});
		Zonas.insert({zonaId: 4, nombre: 'Zona D'});
		Zonas.insert({zonaId: 5, nombre: 'Zona E'});
		Zonas.insert({zonaId: 6, nombre: 'Zona Espanola B'});
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
		Conductores.insert({nombre: 'Al Ac - 16/2.5', s: 17.813, d: 5.4, p: 62, r: 580, ce: 8100, ct: 0.0000191, imax: 90, re: 1.88})
		Conductores.insert({nombre: 'Al Ac - 24/4', s: 27.833, d: 6.75, p: 97, r: 900, ce: 8100, ct: 0.0000191, imax: 125, re: 1.2})
		Conductores.insert({nombre: 'Al Ac - 35/6', s: 40.079, d: 8.1, p: 139, r: 1230, ce: 8100, ct: 0.0000191, imax: 145, re: 0.835})
		Conductores.insert({nombre: 'Al Ac - 50/8', s: 56.297, d: 9.6, p: 196, r: 1680, ce: 8100, ct: 0.0000191, imax: 170, re: 0.595})
		Conductores.insert({nombre: 'Al Ac - 70/12', s: 81.289, d: 11.72, p: 286, r: 2630, ce: 7700, ct: 0.0000189, imax: 290, re: 0.413})
		Conductores.insert({nombre: 'Al Ac - 95/15', s: 109.726, d: 13.61, p: 386, r: 3490, ce: 7700, ct: 0.0000189, imax: 350, re: 0.306})
		Conductores.insert({nombre: 'Al Ac - 120/20', s: 141.422, d: 15.46, p: 497, r: 4440, ce: 7700, ct: 0.0000189, imax: 410, re: 0.237})
		Conductores.insert({nombre: 'Al Ac - 150/25', s: 173.11, d: 17.1, p: 609, r: 5360, ce: 7700, ct: 0.0000189, imax: 470, re: 0.194})
		Conductores.insert({nombre: 'Al Ac - 185/30', s: 213.63, d: 18.99, p: 750, r: 6520, ce: 7700, ct: 0.0000189, imax: 535, re: 0.157})
		Conductores.insert({nombre: 'Al Ac - 210/35', s: 243.191, d: 20.27, p: 855, r: 7340, ce: 7700, ct: 0.0000189, imax: 590, re: 0.138})
		Conductores.insert({nombre: 'Al Ac - 240/40', s: 282.541, d: 21.84, p: 992, r: 8510, ce: 7700, ct: 0.0000189, imax: 645, re: 0.119})
		Conductores.insert({nombre: 'Al Ac - 300/50', s: 353.735, d: 24.5, p: 1227, r: 10500, ce: 7700, ct: 0.0000189, imax: 740, re: 0.095})
		Conductores.insert({nombre: 'Al Ac - 340/30', s: 369.139, d: 24.99, p: 1181, r: 9160, ce: 6200, ct: 0.0000209, imax: 790, re: 0.085})
		Conductores.insert({nombre: 'Al Ac - 380/50', s: 431.184, d: 27, p: 1458, r: 12100, ce: 7000, ct: 0.0000193, imax: 840, re: 0.076})
		Conductores.insert({nombre: 'Al Ac - 435/55', s: 490.591, d: 28.8, p: 1658, r: 13300, ce: 7000, ct: 0.0000193, imax: 900, re: 0.067})
		Conductores.insert({nombre: 'Al Ac - 550/70', s: 620.904, d: 32.4, p: 2099, r: 16000, ce: 7000, ct: 0.0000193, imax: 1020, re: 0.053})
		Conductores.insert({nombre: 'Al Ac - 680/85', s: 764.538, d: 36, p: 2572, r: 20600, ce: 6800, ct: 0.0000194, imax: 1150, re: 0.043})
		Conductores.insert({nombre: 'Al Al Ac - 16/2.5', s: 17.813, d: 5.4, p: 62, r: 760, ce: 8100, ct: 0.0000191, imax: 90, re: 2.19})
		Conductores.insert({nombre: 'Al Al Ac - 24/4', s: 27.833, d: 6.75, p: 97, r: 1180, ce: 8100, ct: 0.0000191, imax: 125, re: 1.4})
		Conductores.insert({nombre: 'Al Al Ac - 35/6', s: 40.079, d: 8.1, p: 139, r: 1680, ce: 8100, ct: 0.0000191, imax: 145, re: 0.97})
		Conductores.insert({nombre: 'Al Al Ac - 50/8', s: 56.297, d: 9.6, p: 196, r: 2350, ce: 8100, ct: 0.0000191, imax: 170, re: 0.691})
		Conductores.insert({nombre: 'Al Al Ac - 70/12', s: 81.289, d: 11.72, p: 286, r: 3440, ce: 7700, ct: 0.0000189, imax: 290, re: 0.468})
		Conductores.insert({nombre: 'Al Al Ac - 95/15', s: 109.726, d: 13.61, p: 386, r: 4630, ce: 7700, ct: 0.0000189, imax: 350, re: 0.355})
		Conductores.insert({nombre: 'Al Al Ac - 120/20', s: 141.422, d: 15.46, p: 497, r: 5980, ce: 7700, ct: 0.0000189, imax: 410, re: 0.276})
		Conductores.insert({nombre: 'Al Al Ac - 150/25', s: 173.11, d: 17.1, p: 609, r: 7310, ce: 7700, ct: 0.0000189, imax: 470, re: 0.225})
		Conductores.insert({nombre: 'Al Al Ac - 185/30', s: 213.63, d: 18.99, p: 750, r: 8940, ce: 7700, ct: 0.0000189, imax: 535, re: 0.182})
		Conductores.insert({nombre: 'Al Al Ac - 210/35', s: 243.191, d: 20.27, p: 855, r: 10200, ce: 7700, ct: 0.0000189, imax: 590, re: 0.16})
		Conductores.insert({nombre: 'Al Al Ac - 240/40', s: 282.541, d: 21.84, p: 992, r: 11800, ce: 7700, ct: 0.0000189, imax: 645, re: 0.138})
		Conductores.insert({nombre: 'Al Al Ac - 300/50', s: 353.735, d: 24.44, p: 1243, r: 14800, ce: 7700, ct: 0.0000189, imax: 740, re: 0.11})
		Conductores.insert({nombre: 'Al Al Ac - 340/30', s: 369.139, d: 24.99, p: 1181, r: 13500, ce: 6200, ct: 0.0000209, imax: 790, re: 0.098})
		Conductores.insert({nombre: 'Al Al Ac - 380/50', s: 431.184, d: 27, p: 1458, r: 17100, ce: 7000, ct: 0.0000193, imax: 840, re: 0.088})
		Conductores.insert({nombre: 'Al Al Ac - 435/55', s: 490.591, d: 28.8, p: 1658, r: 19300, ce: 7000, ct: 0.0000193, imax: 900, re: 0.077})
		Conductores.insert({nombre: 'Al Al Ac - 550/70', s: 620.904, d: 32.4, p: 2099, r: 24500, ce: 7000, ct: 0.0000193, imax: 1020, re: 0.061})
		Conductores.insert({nombre: 'Al Al Ac - 680/85', s: 764.538, d: 36, p: 2572, r: 30000, ce: 6800, ct: 0.0000194, imax: 1150, re: 0.05})
		Conductores.insert({nombre: 'Al Al - 10', s: 10.02, d: 4.05, p: 27, r: 280, ce: 6000, ct: 0.000023, imax: 65, re: 3.32})
		Conductores.insert({nombre: 'Al Al - 16', s: 15.889, d: 5.1, p: 43, r: 444, ce: 6000, ct: 0.000023, imax: 100, re: 2.09})
		Conductores.insert({nombre: 'Al Al - 25', s: 25.414, d: 6.45, p: 69, r: 710, ce: 6000, ct: 0.000023, imax: 125, re: 1.31})
		Conductores.insert({nombre: 'Al Al - 35', s: 34.913, d: 7.56, p: 95, r: 976, ce: 6000, ct: 0.000023, imax: 160, re: 0.952})
		Conductores.insert({nombre: 'Al Al - 50', s: 50.142, d: 9.06, p: 137, r: 1401, ce: 6000, ct: 0.000023, imax: 195, re: 0.663})
		Conductores.insert({nombre: 'Al Al - 50', s: 51.072, d: 9.25, p: 140, r: 1427, ce: 5700, ct: 0.000023, imax: 195, re: 0.654})
		Conductores.insert({nombre: 'Al Al - 70', s: 68.98, d: 10.75, p: 189, r: 1928, ce: 5700, ct: 0.000023, imax: 235, re: 0.484})
		Conductores.insert({nombre: 'Al Al - 95', s: 94.764, d: 12.6, p: 260, r: 2648, ce: 5700, ct: 0.000023, imax: 300, re: 0.352})
		Conductores.insert({nombre: 'Al Al - 120', s: 121.209, d: 14.25, p: 331, r: 3387, ce: 5700, ct: 0.000023, imax: 340, re: 0.275})
		Conductores.insert({nombre: 'Al Al - 120', s: 134.329, d: 15.05, p: 368, r: 3755, ce: 5700, ct: 0.000023, imax: 340, re: 0.249})
		Conductores.insert({nombre: 'Al Al - 150', s: 147.115, d: 15.75, p: 403, r: 4111, ce: 5700, ct: 0.000023, imax: 395, re: 0.227})
		Conductores.insert({nombre: 'Al Al - 185', s: 184.541, d: 17.64, p: 506, r: 5157, ce: 5700, ct: 0.000023, imax: 455, re: 0.181})
		Conductores.insert({nombre: 'Al Al - 240', s: 236.038, d: 19.95, p: 648, r: 6596, ce: 5700, ct: 0.000023, imax: 545, re: 0.142})
		Conductores.insert({nombre: 'Al Al - 240', s: 242.541, d: 20.25, p: 667, r: 6778, ce: 5500, ct: 0.000023, imax: 545, re: 0.138})
		Conductores.insert({nombre: 'Al Al - 300', s: 304.243, d: 22.68, p: 835, r: 8501, ce: 5500, ct: 0.000023, imax: 625, re: 0.11})
		Conductores.insert({nombre: 'Al Al - 400', s: 389.143, d: 25.65, p: 1068, r: 10874, ce: 5500, ct: 0.000023, imax: 725, re: 0.086})
		Conductores.insert({nombre: 'Espanol - 180', s: 181.6, d: 17.5, p: 676, r: 6630, ce: 8200, ct: 0.0000178, imax: 100, re: 0})
		Conductores.insert({nombre: 'Acero 25', s: 23.37, d: 6.3, p: 189, r: 2629, ce: 18500, ct: 0.0000115, imax: 0, re: 0})
		Conductores.insert({nombre: 'Acero 35', s: 33.63, d: 7.5, p: 269, r: 3783, ce: 18500, ct: 0.0000115, imax: 0, re: 0})
		Conductores.insert({nombre: 'Acero 50', s: 48.26, d: 9, p: 394, r: 5429, ce: 18500, ct: 0.0000115, imax: 0, re: 0})
		Conductores.insert({nombre: 'Acero 65', s: 65.74, d: 10.5, p: 527, r: 7396, ce: 18500, ct: 0.0000115, imax: 0, re: 0})
		Conductores.insert({nombre: 'Acero 95', s: 93.29, d: 12.5, p: 754, r: 10495, ce: 18500, ct: 0.0000115, imax: 0, re: 0})
		Conductores.insert({nombre: 'Acero 120', s: 117.04, d: 14.5, p: 943, r: 13167, ce: 18500, ct: 0.0000115, imax: 0, re: 0})

	}
})