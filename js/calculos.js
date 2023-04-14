//Cálculos AP-42 Capítulo 7=============================================================================

//Eq1_1 Pérdidas totales desde tanques de techo fijo (totalLosses) (lbs/yr)
function Eq1_1() {

	standingLosses = Eq1_4();	//ecuacion general de Standing Losses (Pérdidas durante el almacenamiento)
	outputs.push({varName:"standingLosses",value:standingLosses,units:"lbs"});	

	workingLosses = Eq1_35();	//ecuacion general de Working Losses (Pérdidas por llenado y vaciado del tanque)
	outputs.push({varName:"workingLosses",value:workingLosses,units:"lbs"});	

	return standingLosses + workingLosses;
};

//La Eq1_2 se omitió porque la Eq1_4 es la combinación de Eq1_2 y Eq1_3

//Eq1_3 Volumen de la fase vapor (vaporSpaceVolume) (ft3)
function Eq1_3() {
	return ((Math.PI*Math.pow(t.effectiveDiameter,2)/4)*vaporSpaceOutage);
};

//Eq1_4 Standing Losses: Pérdidas durante el almacenamiento desde tanques de techo fijo (standingLosses) (lbs/yr)
function Eq1_4() {

	if (t.insulation == "underground") { 	
		t.insulated = "full";	//Los tanques subterráneos son considerados como si tuvieran aislamiento térmico total
	} else {
		t.insulated = t.insulation;			
	};

	if (t.heating.cyclesPerYear != "" && isNaN(t.heating.cyclesPerYear) == false && t.insulated == "full") {
		t.heating.cyclesPerYear = parseFloat(t.heating.cyclesPerYear);
	} else {
		t.heating.cyclesPerYear = 365;	//Si el usuario no ingresa el dato, se asume que el líquido se calienta una vez por día, es decir, 365 veces al año.
	};
	
	t.effectiveDiameter =Eq1_14();	//Obtiene el diámetro o el diámetro efectivo (según si el tanque es vertical u horizontal) (feet)
	t.effectiveHeight 	=Eq1_15();	//Obtiene la altura o la altura efectiva (según si el tanque es vertical u horizontal) (feet)
	vaporSpaceOutage  =Eq1_16();	//Obtiene la altura de la columna de vapor (vaporSpaceOutage) (tanto para tanques horizontales como verticales) (feet)
	if (unitsOut == "Imperial"){
		resultadosIntermedios.push({varName:"Altura columna vapor (ft)",value:vaporSpaceOutage});
	} else {
		resultadosIntermedios.push({varName:"Altura columna vapor (m)",value:vaporSpaceOutage/3.28084});
	};
	vaporExpansionFactor=Eq1_5();	//Obtiene la fracción del vapor dentro del tanque que se pierde diariamente al exterior (vaporExpansionFactor) (dimensionless)
	resultadosIntermedios.push({varName:"Factor expansión vapor (adimensional)",value:vaporExpansionFactor});
	ventedVapSatFactor  =Eq1_21();	//Obtiene el factor de saturación del vapor que se pierde al exterior (ventedVapSatFactor) (dimensionless)
	resultadosIntermedios.push({varName:"Factor saturación vapor (adimensional)",value:ventedVapSatFactor});
	vaporDensity        =Eq1_22();	//Obtiene la densidad del vapor dentro del tanque (vaporDensity) (lbs/ft3)
	if (unitsOut == "Imperial"){
		resultadosIntermedios.push({varName:"Densidad vapor (lbs/ft3)",value:vaporDensity});
	} else {
		resultadosIntermedios.push({varName:"Densidad vapor (g/cm3)",value:vaporDensity*0.016});
	};
	if (t.insulation == "underground" && t.type == "HFR" && t.heating.heating == false) {
		standingLosses = 0;
	} else {
		vaporSpaceVolume=Eq1_3(); //Obtiene el volumen de la fase vapor (vaporSpaceVolume) (ft3)
		if (unitsOut == "Imperial"){
			resultadosIntermedios.push({varName:"Volumen fase vapor (ft3)",value:vaporSpaceVolume});
		} else {
			resultadosIntermedios.push({varName:"Volumen fase vapor (m3)",value:vaporSpaceVolume*0.0283});
		};
		//Eq1_4
		standingLosses = t.heating.cyclesPerYear * vaporExpansionFactor * vaporSpaceVolume * ventedVapSatFactor * vaporDensity;
	};

	return standingLosses;
};

//Eq1_5 Fracción del vapor dentro del tanque que se pierde diariamente al exterior (vaporExpansionFactor) [prefered method]
function Eq1_5() {

	avgAmbientTemp=Eq1_30();	//Obtiene la temperatura ambiente diaria promedio (avgAmbientTemp) (°R)
	avgBulkTemp   =Eq1_31();	//Obtiene la temperatura promedio en el seno del líquido (avgBulkTemp) (°R)
	outputs.push({varName:"avgBulkTemp",value:avgBulkTemp,units:"°R"});
	avgSurfaceTemp=Eq1_27();	//Obtiene la temperatura diaria promedio en la superficie del líquido (avgSurfaceTemp) (°R)
	outputs.push({varName:"avgSurfaceTemp",value:avgSurfaceTemp,units:"°R"});
	
	//Calcula la presión de vapor del compuesto a la temperatura diaria promedio en la superficie del líquido (vaporPressure) 
	if (liquidCategory == "Crude Oils") {
		if (isNaN(c.A) == true || c.A == "" || c.A == null) {
			Fig1_16();	//Calcula las constantes de la Ecuación de Antoine para petróleos crudos
			vaporPressure = Eq1_25(avgSurfaceTemp);	//Acá también se podría usar la Fig1_13b (en lugar de la Eq1_25)
		} else {
			vaporPressure = Eq1_25(avgSurfaceTemp);
		}
	} else if (liquidCategory == "Refined Petroleum Liquids") {
		if (isNaN(c.A) == true || c.A == "" || c.A == null) {
			Fig1_15();	//Calcula las constantes de la Ecuación de Antoine para combustibles refinados
			vaporPressure = Eq1_25(avgSurfaceTemp);	//Acá también se podría usar la Fig1_14b (en lugar de la Eq1_25)
		} else {
			vaporPressure = Eq1_25(avgSurfaceTemp);
		}
	} else {
		vaporPressure = Eq1_26(avgSurfaceTemp);	//Calcula la presión de vapor de otros líquidos orgánicos
	};
	outputs.push({varName:"vaporPressure",value:vaporPressure,units:"psi"});
	
	avgVapTempRange    =Eq1_6();	//Obtiene la variación diaria promedio de la temperatura del vapor (avgVapTempRange) (°R)
	if (unitsOut == "Imperial"){
		resultadosIntermedios.push({varName:"Variación diaria temp. vapor (°R)",value:avgVapTempRange});
	} else {
		resultadosIntermedios.push({varName:"Variación diaria temp. vapor (°C)",value:(avgVapTempRange-491.67)/1.8});
	};
	avgVapPressureRange=Eq1_9();	//Obtiene la variación diaria promedio de la presión de vapor (avgVapPressureRange) (psia)
	if (unitsOut == "Imperial"){
		resultadosIntermedios.push({varName:"Variación diaria presión vapor (psia)",value:avgVapPressureRange});
	} else {
		resultadosIntermedios.push({varName:"Variación diaria presión vapor (kPa)",value:avgVapPressureRange/0.145});
	};	
	ventPressureRange  =Eq1_10();	//Obtiene el rango de presión que están ajustadas para soportar las válvulas de ventilación (ventPressureRange) (psig)
	
	//Eq1_5
	vaporExpansionFactor = (avgVapTempRange / avgSurfaceTemp) + ((avgVapPressureRange - ventPressureRange) / (m.atmPressure - vaporPressure));
	
	if (vaporExpansionFactor > 1) {
		vaporExpansionFactor = 1;
	} else if (vaporExpansionFactor < 0) {
		vaporExpansionFactor = 0;
	}

	return vaporExpansionFactor;
};

//Eq1_6 Variación diaria promedio de la temperatura del vapor (avgVapTempRange) (°R) [prefered method]
function Eq1_6() {
	
	avgAmbientTempRange=Eq1_11();	//Obtiene la variación diaria promedio de la temperatura ambiente (avgAmbientTempRange) (°R)
	
	if (t.insulated == "shell") {
		avgVapTempRange=Eq1_8();
	} else if (t.insulated == "full") {
		if (t.heating.heating == false ) {
			avgVapTempRange=0;
		} else {
			//en tanques con aislamiento térmico total y calentamiento, la variación en la temperatura del vapor será igual a la variación en la temperatura en el seno del líquido por el calentamiento (sección 7.1.3.8.4 del AP-42)
			avgVapTempRange=Eq8_1();
		}
	} else {
		//Eq1_6: En tanques sin aislamiento térmico, la variación en la temperatura del vapor depende del intercambio de calor con el exterior
		avgVapTempRange = ((1- (0.8 / (2.2 * (t.effectiveHeight / t.effectiveDiameter) + 1.9))) * avgAmbientTempRange) + (((0.042 * aRoof * m.insolation) + (0.026 * (t.effectiveHeight/t.effectiveDiameter) * aShell * m.insolation)) / (2.2 * (t.effectiveHeight/t.effectiveDiameter) + 1.9));
	};
	
	return avgVapTempRange;
};

//La Eq1_7 se omitió porque es una simplificación de la Eq1_6 en base a un supuesto.

//Eq1_8 Variación diaria promedio de la temperatura del vapor para tanques con aislamiento térmico sólo en las paredes (avgVapTempRange) (°R)
function Eq1_8() {
	return (0.6 * avgAmbientTempRange) + (0.02 * aRoof * m.insolation);
};

//Eq1_9 Variación diaria promedio de la presión de vapor (avgVapPressureRange) (psia)
function Eq1_9() {

	Fig1_17();	//Obtiene las temperaturas máxima y mínima diarias promedio en la superficie del líquido (minSurfaceTemp y maxSurfaceTemp) (°R)
	
	//Obtiene la presión de vapor mínima y máxima diaria promedio (maxVapPressure y minVapPressure) (psia)
		if (liquidCategory == "Crude Oils") {
			maxVapPressure = Eq1_25(maxSurfaceTemp);
			minVapPressure = Eq1_25(minSurfaceTemp);
		} else if (liquidCategory == "Refined Petroleum Liquids") {
			maxVapPressure = Eq1_25(maxSurfaceTemp);
			minVapPressure = Eq1_25(minSurfaceTemp);
		} else {
			minVapPressure = Eq1_26(minSurfaceTemp);	
			maxVapPressure = Eq1_26(maxSurfaceTemp);  	
		}

	if (t.insulated == "full" && t.heating.heating == false) {
		avgVapPressureRange = 0;
	} else {
		//Eq1_9
		avgVapPressureRange = maxVapPressure - minVapPressure;
	};

	return avgVapPressureRange;
};

//Eq1_10 Rango de presión que están ajustadas para soportar las válvulas de ventilación (ventPressureRange) (psig)
function Eq1_10() {
	t.ventPressureSetting = parseFloat(t.ventPressureSetting);		
	t.ventVacuumSetting = parseFloat(t.ventVacuumSetting);

	return t.ventPressureSetting - t.ventVacuumSetting;
};

//Eq1_11 Variación diaria promedio de la temperatura ambiente (avgAmbientTempRange) (°R)
function Eq1_11() {
	return (m.maxAmbientTemp - m.minAmbientTemp);
};

//La Eq1_12 y la Eq1_13 se omitieron porque son simplificaciones de la Eq1_5 que implican una reducción en la confiabilidad del resultado.

//Eq1_14 Diámetro efectivo del tanque (feet)
function Eq1_14() {
	
	if (t.type == "VFR") {
		effectiveDiameter = t.diameter;
	} else if (t.type == "HFR") {
		effectiveDiameter = Math.sqrt((t.height * t.diameter) / (Math.PI / 4));
	} 
	return effectiveDiameter;
};

//Eq1_15 Altura efectiva del tanque (feet)
function Eq1_15() {

	if (t.type == "VFR") {
		effectiveHeight = t.height;
	} else if (t.type == "HFR") {
		effectiveHeight = Math.PI * t.diameter / 4;
	} 
	return effectiveHeight;
};

//Eq1_16 Altura de la Columna de Vapor (vaporSpaceOutage) (feet)
function Eq1_16() {
	
	if (t.type == "VFR") {
		if (t.roof.type == "cone") {
			roofOutage=Eq1_17();	//altura efectiva de un techo con forma de cono (feet)
		} else if (t.roof.type == "dome") {
			roofOutage=Eq1_19();	//altura efectiva de un techo con forma de domo (feet)
		}
		if (unitsOut == "Imperial"){
			resultadosIntermedios.push({varName:"Altura efectiva techo (ft)",value:roofOutage});
		} else {
			resultadosIntermedios.push({varName:"Altura efectiva techo (m)",value:roofOutage/3.28084});
		};	
		if (t.avgLiquidHeight!= "" && isNaN(t.avgLiquidHeight)==false && t.avgLiquidHeight!=0 && t.avgLiquidHeight!=null) {
			avgLiquidHeight = parseFloat(t.avgLiquidHeight);
		} else {
			avgLiquidHeight = effectiveHeight/2;	//Si no se ingresa un valor particular, se asume que, en promedio, el tanque se mantiene a medio llenar
		};
		outputs.push({varName:"avgLiquidHeight",value:avgLiquidHeight,units:"ft"});
		//Eq1_16
		vaporSpaceOutage = t.effectiveHeight - t.avgLiquidHeight + roofOutage;
	} else if (t.type == "HFR") {
		vaporSpaceOutage = t.effectiveHeight / 2;
	}
	return vaporSpaceOutage;
}

//Eq1_17 Altura efectiva de un techo con forma de cono (roofOutage) (ft)
function Eq1_17() {
	t.roof.height=Eq1_18();	//Obtiene la altura real del techo (ft)
	outputs.push({varName:"roofHeight",value:t.roof.height,units:"ft"});
	return t.roof.height / 3;
}

//Eq1_18 Altura real de un techo con forma de cono (ft)
function Eq1_18() {
	t.roof.slope = parseFloat(t.roof.slope);
	t.shellRadius = t.effectiveDiameter/2;
	t.roof.height = parseFloat(t.roof.height);

	if (t.roof.height == 0) {
		roofHeight = t.roof.slope * t.shellRadius;
	} else {
		roofHeight = t.roof.height;
	}
	outputs.push({varName:"roofSlope",value:roofHeight/t.shellRadius,units:"ft/ft"});

	return roofHeight;
}

//Eq1_19 Altura efectiva de un techo con forma de domo (roofOutage) (ft)
function Eq1_19() {
	t.roof.height=Eq1_20();	//Obtiene la altura real del techo
	outputs.push({varName:"roofHeight",value:t.roof.height,units:"ft"});
	
	roofOutage = t.roof.height * ((1 / 2) + ((1 / 6) * Math.pow((t.roof.height / t.shellRadius),2)));

	return roofOutage;
};

//Eq1_20 Altura real de un techo con forma de domo (ft)
function Eq1_20() {
	t.shellRadius = t.effectiveDiameter/2;
	t.roof.height = parseFloat(t.roof.height);
	t.roof.radius = parseFloat(t.roof.radius);
	outputs.push({varName:"roofRadius",value:t.roof.radius,units:"ft"});

	if (t.roof.height == 0) { 
		roofHeight = t.roof.radius - Math.pow(Math.pow(t.roof.radius,2) - Math.pow(t.shellRadius,2), 0.5);
	} else {
		roofHeight = t.roof.height;
	}
	
	return roofHeight;
}

//Eq1_21 Factor de saturación del vapor que se pierde al exterior (dimensionless) (ventedVapSatFactor)
function Eq1_21() {
	return( 1 / (1 + (0.053 * vaporPressure  * vaporSpaceOutage)) );
}

//Eq1_22 Densidad del vapor dentro del tanque (vaporDensity) (lbs/ft^3)
function Eq1_22() {
	
	//Obtiene la temperatura promedio del vapor (avgVapTemp) (°R)
	if (t.insulated == "shell") {
		avgVapTemp=Eq1_34();
	} else if (t.insulated == "full") {
		avgVapTemp=Eq8_2();
	} else {
		avgVapTemp=Eq1_32();
	}	
	
	//constante de los gases ideales (psia*ft3/lb-mole*°R)
	rConstant = 10.731;
	
	if (liquidCategory == "Other organic liquids") {
		vaporDensity = (c.molWeight * vaporPressure) / (rConstant * avgVapTemp);
	} else {
		vaporDensity = (c.vapMolWeight * vaporPressure) / (rConstant * avgVapTemp);
	}

	return vaporDensity;
}

//La Eq1_23 y la Eq1_24 por el momento las omitimos porque sirven para MEZCLAS (de las cuales se conozca su composición, es decir, NO como los Crude Oils ni los Refined Petroleum Liquids).

//Eq1_25 Presión de vapor de determinados líquidos de petróleo (psia)
function Eq1_25(tempRankine) {
	var pressurePsia;	 
	pressurePsia = Math.exp(c.A - (c.B / tempRankine));
	return pressurePsia;
}

//Eq1_26 Presión de vapor de líquidos orgánicos (psia) 
function Eq1_26(tempRankine) {
	var pressurePsia;
	var pressureMmHg;
	var tempCelsius;
	tempCelsius = (tempRankine - 491.67) * 5 / 9; //convierte el valor de temperatura ingresado de °R a °C (porque para ingresarlo en la siguiente ecuación tiene que estar en °C)
	pressureMmHg = Math.pow(10,c.A - (c.B / (tempCelsius + c.C)));	//devuelve la presión de vapor en mmHg
	pressurePsia = 14.7 / 760 * pressureMmHg;	//convierte el valor de la presión de vapor obtenido de mmHg a psia)
	return pressurePsia;
}

//Eq1_27 Temperatura diaria promedio en la superficie del líquido (avgSurfaceTemp) (°R)
function Eq1_27() {
					
	if (t.insulated == "full") {				
		//en los tanques con aislamiento térmico total, la temperatura en la superficie del líquido es igual a la temperatura en el seno del líquido (sección 7.1.3.8.4 del AP-42)
		avgSurfaceTemp=Eq8_2();
	} else if (t.insulated == "shell") {
		//la temperatura en la superficie del líquido depende del intercambio de calor con el seno del líquido y con el exterior a través del techo
		avgSurfaceTemp=Eq1_29();
	} else if (t.insulated == "none") {
		//Eq1_27: la temperatura en la superficie del líquido depende del intercambio de calor con el seno del líquido y con el exterior a través del techo y las paredes
		avgSurfaceTemp =  ((0.5 - (0.8 / (4.4 * (t.effectiveHeight / t.effectiveDiameter) + 3.8))) * avgAmbientTemp) + ((0.5 + (0.8 / (4.4 * (t.effectiveHeight / t.effectiveDiameter) + 3.8))) * avgBulkTemp) + (((0.021 * aRoof * m.insolation) + (0.013 * (t.effectiveHeight / t.effectiveDiameter) * aShell * m.insolation)) / (4.4 * (t.effectiveHeight / t.effectiveDiameter) + 3.8));
	}

	return avgSurfaceTemp;
}

//La Eq1_28 se omitió porque es una simplificación de la Eq1_29 en base a un supuesto.

//Eq1_29 Temperatura diaria promedio en la superficie del líquido (avgSurfaceTemp) (°R) 
function Eq1_29() {
	return (0.3 * avgAmbientTemp) + (0.7 * avgBulkTemp) + (0.005 * aRoof * m.insolation);
}

//Eq1_30  Temperatura Ambiente Diaria Promedio (avgAmbientTemp) (°R) 
function Eq1_30() {
	return ((m.maxAmbientTemp + m.minAmbientTemp)/2);
}

//Eq1_31 Temperatura diaria promedio en el seno del líquido (avgBulkTemp) (°R) 
function Eq1_31() {

	if (t.heating.heating == true) {
		maxBulkTemp = parseFloat(t.heating.maxBulkTemp);				
		minBulkTemp = parseFloat(t.heating.minBulkTemp);				
		avgBulkTemp = (maxBulkTemp + minBulkTemp) / 2;
	} else if (t.insulated == "full" || t.insulated == "shell") {
		avgBulkTemp = parseFloat(t.avgBulkTemp);
	} else {	
		//Eq1_31
		avgBulkTemp = avgAmbientTemp + (0.003 * aShell * m.insolation);
	};

	return avgBulkTemp;
}

//Eq1_32 Temperatura promedio del vapor en tanques sin aislamiento térmico (avgVapTemp) (°R) 
function Eq1_32() {
	return (((2.2 * (t.effectiveHeight / t.effectiveDiameter) +1.1) * avgAmbientTemp) + (0.8 * avgBulkTemp) + (0.021 * aRoof * m.insolation) + (0.013 * (t.effectiveHeight / t.effectiveDiameter) * aShell * m.insolation)) / (2.2 * (t.effectiveHeight / t.effectiveDiameter) +1.9);
}

//La Eq1_33 se omitió porque es una simplificación de la Eq1_32 en base a un supuesto

//Eq1_34 Temperatura promedio del vapor en tanques con aislamiento térmico sólo en las paredes (avgVapTemp) (°R) 
function Eq1_34() {
	return (0.6 * avgAmbientTemp) + (0.4 * avgBulkTemp) + (0.01 * aRoof * m.insolation);
}

//Eq1_35 Working Losses: Pérdidas por llenado y vaciado de tanques de techo fijo (workingLosses) (lbs/yr)
function Eq1_35() {
	annualNetThroughput = parseFloat(t.annualNetThroughput);	//Volumen neto total introducido en el tanque a lo largo del año (annualNetThroughput) (ft3/yr)
	turnoversPerYear = parseFloat(t.turnoversPerYear);			//Número de veces que el tanque se llenó totalmente en el año (turnoversPerYear) (adimensional)
	//Obtiene el factor de saturación de las pérdidas por llenado y vaciado del tanque (workingLossTurnover) (dimensionless)
		if (turnoversPerYear > 36) {
			workingLossTurnover = (180 + turnoversPerYear) / (6 * turnoversPerYear);
		} else {
			workingLossTurnover = 1;
		}
		resultadosIntermedios.push({varName:"Factor saturación llenado/vaciado (adimensional)",value:workingLossTurnover});
	//Obtiene el factor de producto de las pérdidas por llenado y vaciado del tanque (productFactor) (dimensionless)
		if (liquidCategory == "Crude Oils") {
			productFactor = 0.75;
		} else {
			productFactor = 1;
		}
		resultadosIntermedios.push({varName:"Factor de producto (adimensional)",value:productFactor});
	//Obtiene el factor de corrección del ajuste de presión de las válvulas de ventilación (ventCorrectionFactor) (dimensionless)
	ventCorrectionFactor=Eq1_41();
	//Eq1_35
	workingLosses = annualNetThroughput * workingLossTurnover * productFactor * vaporDensity * ventCorrectionFactor;
	
	return workingLosses;
}

//Las Eq1_36, Eq1_37, Eq1_38 y Eq1_39 se omitieron por ser innecesarias

//Eq1_40 Condición que determina si es necesario incluir el factor de corrección del ajuste de presión de las válvulas de ventilación 
function Eq1_40() {
	
	if (ventPressureRange > 0.06) {
		t.gaugePressure = parseFloat(t.gaugePressure);
		if ( workingLossTurnover * ((t.ventPressureSetting + m.atmPressure) / (t.gaugePressure + m.atmPressure)) > 1) {
			return 1;
		} else {
			return 0;
		}
	} else {
		return 0;
	}
}

//Eq1_41 Factor de corrección del ajuste de presión de las válvulas de ventilación (ventCorrectionFactor) (dimensionless)
function Eq1_41() {
	if (Eq1_40() == 1) {			
		ventCorrectionFactor = (((t.gaugePressure + m.atmPressure) / workingLossTurnover) - vaporPressure) / (t.ventPressureSetting + m.atmPressure - vaporPressure);
	} else {
		ventCorrectionFactor = 1;
	}
	
	return ventCorrectionFactor;
};

//Eq8_1 Variación diaria promedio de la temperatura del vapor en tanques con aislamiento térmico total y calentamiento (avgVapTempRange) (°R)
function Eq8_1() {
	return maxBulkTemp - minBulkTemp;
}

//Eq8_2 Temperatura diaria promedio en la superficie del líquido (avgSurfaceTemp) (°R)
function Eq8_2() {
	return avgBulkTemp;
}

//Eq2_1 Pérdidas totales desde tanques de techo flotante (totalLosses) (lbs/yr)
function Eq2_1() {

	standingLosses=Eq2_2();	//ecuacion general de Standing Losses (Pérdidas durante el almacenamiento)
	outputs.push({varName:"standingLosses",value:standingLosses,units:"lbs"});

	workingLosses =Eq2_19();	//ecuacion general de Working Losses (Pérdidas por vaciado del tanque)
	outputs.push({varName:"workingLosses",value:workingLosses,units:"lbs"});
	
	return standingLosses + workingLosses;
}

//Eq2_2 Standing Losses: Pérdidas durante el almacenamiento (standingLosses) (lbs/yr)
function Eq2_2() {

	rimSealLosses    =Eq2_3();	//Calcula las pérdidas a través del sello (rimSealLosses) (lbs/yr)
	outputs.push({varName:"rimSealLosses",value:rimSealLosses,units:"lbs"});	

	deckFittingLosses=Eq2_13();	//Calcula las pérdidas a través de los accesorios de la plataforma flotante (deckFittingLosses) (lbs/yr)
	outputs.push({varName:"deckFittingLosses",value:deckFittingLosses,units:"lbs"});

	deckSeamLosses   =Eq2_18();	//Calcula las pérdidas a través de las "costuras" de la plataforma flotante (deckSeamLosses) (lbs/yr)
	outputs.push({varName:"deckSeamLosses",value:deckSeamLosses,units:"lbs"});	

	return rimSealLosses + deckFittingLosses + deckSeamLosses;
}

//Eq2_3 Pérdidas a través del sello de la plataforma flotante (rimSealLosses) (lbs/yr)
function Eq2_3() {
	vaporPressureFunction=Eq2_4();	//Calcula un factor relacionado con la presión de vapor (vaporPressureFunction) (adimensional)
	resultadosIntermedios.push({varName:"Factor presión vapor (adimensional)",value:vaporPressureFunction}); 

	//Determina el factor de producto correspondiente (productFactor) (adimensional)
	if (liquidCategory == "Crude Oils"){
		productFactor = 0.4
	} else {
		productFactor = 1
	};
	resultadosIntermedios.push({varName:"Factor de producto (adimensional)",value:productFactor});

	if (t.type=="EFR"){
		windSpeed=m.u
	} else {
		windSpeed=0
	};

	if (unitsOut == "Imperial"){
		resultadosIntermedios.push({varName:"Factor A del sello (lb-mol/ft*año)",value:t.rimSeal.Kra});
	} else {
		resultadosIntermedios.push({varName:"Factor A del sello (kmol/m*año)",value:t.rimSeal.Kra*1.488});
	};
	if (unitsOut == "Imperial"){
		resultadosIntermedios.push({varName:"Factor B del sello (lb-mole/(mph)ⁿ*ft*año)",value:t.rimSeal.Krb});
	} else {
		resultadosIntermedios.push({varName:"Factor B del sello (kmol/(1.6km/h)ⁿ*m*año)",value:t.rimSeal.Krb*1.488});
	};
	
	//Eq2_3
	if (liquidCategory == "Other organic liquids") {
		rimSealLosses = (t.rimSeal.Kra + t.rimSeal.Krb*Math.pow(windSpeed,t.rimSeal.n))*t.diameter*vaporPressureFunction*c.molWeight*productFactor
	} else {
		rimSealLosses = (t.rimSeal.Kra + t.rimSeal.Krb*Math.pow(windSpeed,t.rimSeal.n))*t.diameter*vaporPressureFunction*c.vapMolWeight*productFactor
	};

	return rimSealLosses;
};

//Eq2_4	Factor relacionado con la presión de vapor (vaporPressureFunction) (adimensional)
function Eq2_4() {

	//Calcula la temperatura diaria promedio en la superficie del líquido (avgSurfaceTemp) (°R)
	if (t.type == "IFR"|| t.type == "DEFR") {
		avgSurfaceTemp=Eq2_5();
	} else if (t.type == "EFR") { 
		if (t.deck.type == "double") {
			avgSurfaceTemp=Eq2_10();	//Temperatura diaria promedio en la superficie del líquido en tanques tipo EFR con double deck (avgSurfaceTemp) (°R)
		} else {
			avgSurfaceTemp=Eq2_7();	//Temperatura diaria promedio en la superficie del líquido en tanques tipo EFR con pontoon deck (avgSurfaceTemp) (°R)
		};
	};
	outputs.push({varName:"avgSurfaceTemp",value:avgSurfaceTemp,units:"°R"});

	//Calcula la presión de vapor del compuesto a la temperatura diaria promedio en la superficie del líquido (vaporPressure) 
	if (liquidCategory == "Crude Oils") {
		if (isNaN(c.A) == true || c.A == "" || c.A == null) {
			Fig1_16();	//Calcula las constantes de la Ecuación de Antoine para petróleos crudos
			vaporPressure = Eq1_25(avgSurfaceTemp);	//Acá también se podría usar la Fig1_13b (en lugar de la Eq1_25)
		} else {
			vaporPressure = Eq1_25(avgSurfaceTemp);
		}
	} else if (liquidCategory == "Refined Petroleum Liquids") {
		if (isNaN(c.A) == true || c.A == "" || c.A == null) {
			Fig1_15();	//Calcula las constantes de la Ecuación de Antoine para combustibles refinados
			vaporPressure = Eq1_25(avgSurfaceTemp);	//Acá también se podría usar la Fig1_14b (en lugar de la Eq1_25)
		} else {
			vaporPressure = Eq1_25(avgSurfaceTemp);
		}
	} else {
		vaporPressure = Eq1_26(avgSurfaceTemp);	//Calcula la presión de vapor de otros líquidos orgánicos
	}
	outputs.push({varName:"vaporPressure",value:vaporPressure,units:"psi"});

	//Eq2_4
	return (vaporPressure/m.atmPressure)/Math.pow((1+Math.pow((1-(vaporPressure/m.atmPressure)),0.5)),2);
}

//Eq2_5 Temperatura diaria promedio en la superficie del líquido en tanques tipo IFR o DEFR (avgSurfaceTemp) (°R)
function Eq2_5() {
	avgAmbientTemp=Eq1_30();	//Obtiene la temperatura ambiente diaria promedio (avgAmbientTemp) (°R) 
	avgBulkTemp   =Eq1_31();	//Obtiene la temperatura promedio en el seno del líquido (avgBulkTemp) (°R)
	outputs.push({varName:"avgBulkTemp",value:avgBulkTemp,units:"°R"});

	return (((2.86*(t.height/t.diameter)+1.43)*avgAmbientTemp)+((3.52*(t.height/t.diameter)+3.79)*avgBulkTemp)+(0.027*aRoof*m.insolation)+(0.017*(t.height/t.diameter)*aShell*m.insolation))/(6.38*(t.height/t.diameter)+5.22);
}

//La Eq2_6 se omitió porque es una simplificación de la Eq2_5 en base a un supuesto.

//Eq2_7 Temperatura diaria promedio en la superficie del líquido en tanques tipo EFR con pontoon deck (avgSurfaceTemp) (°R)
function Eq2_7() {
	avgAmbientTemp=Eq1_30(); //Obtiene la temperatura ambiente diaria promedio (avgAmbientTemp) (°R) 
	avgBulkTemp   =Eq2_8();	//Obtiene la temperatura promedio en el seno del líquido (avgBulkTemp) (°R)
	outputs.push({varName:"avgBulkTemp",value:avgBulkTemp,units:"°R"});

	return (0.7*avgAmbientTemp) + (0.3*avgBulkTemp) + (0.008*aRoof*m.insolation);
}

//Eq2_8 Temperatura promedio en el seno del líquido en tanques tipo EFR con pontoon deck (avgBulkTemp) (°R)
function Eq2_8() {
	return avgAmbientTemp + (((0.71*aRoof*m.insolation)+(0.485*(t.height/t.diameter)*aShell*m.insolation))/((170*(t.height/t.diameter))+57));
}

//La Eq2_9 se omitió porque es una simplificación de la Eq2_8 en base a un supuesto.

//Eq2_10 Temperatura diaria promedio en la superficie del líquido en tanques tipo EFR con double deck (avgSurfaceTemp) (°R)
function Eq2_10() {
	avgAmbientTemp=Eq1_30(); 	//Obtiene la temperatura ambiente diaria promedio (avgAmbientTemp) (°R) 
	avgBulkTemp   =Eq2_11();	//Obtiene la temperatura promedio en el seno del líquido (avgBulkTemp) (°R)
	outputs.push({varName:"avgBulkTemp",value:avgBulkTemp,units:"°R"});

	return (0.3*avgAmbientTemp) + (0.7*avgBulkTemp) + (0.009*aRoof*m.insolation);
}

//Eq2_11 Temperatura promedio en el seno del líquido en tanques tipo EFR con double deck (avgBulkTemp) (°R)
function Eq2_11() {
	return avgAmbientTemp + (((0.39*aRoof*m.insolation)+(0.485*(t.height/t.diameter)*aShell*m.insolation))/((170*(t.height/t.diameter))+45));
}

//La Eq2_12 se omitió porque es una simplificación de la Eq2_11 en base a un supuesto.

//Eq2_13 Pérdidas totales a través de los accesorios de la plataforma flotante (deckFittingLosses) (lbs/yr)
function Eq2_13() {
	if (t.type=="EFR") {
		deckFittingLossFactor=Eq2_14();//Calcula el factor de pérdidas totales a través de los accesorios en tanques EFR (deckFittingLossFactor) (lb-mole/yr)
	} else {
		deckFittingLossFactor=Eq2_16();//Calcula el factor de pérdidas totales a través de los accesorios en tanques IFR y DEFR (deckFittingLossFactor) (lb-mole/yr)
	};
	if (unitsOut == "Imperial"){
		resultadosIntermedios.push({varName:"Factor pérdidas tot. accesorios (lb-mole/año)",value:deckFittingLossFactor});
	} else {
		resultadosIntermedios.push({varName:"Factor pérdidas tot. accesorios (moles/año)",value:deckFittingLossFactor*453.59});
	};

	if (liquidCategory == "Other organic liquids") {
		deckFittingLosses =deckFittingLossFactor*vaporPressureFunction*c.molWeight*productFactor;
	} else {
		deckFittingLosses =deckFittingLossFactor*vaporPressureFunction*c.vapMolWeight*productFactor;
	};
	return deckFittingLosses;
};

//Eq2_14 Factor de pérdidas totales a través de los accesorios de la plataforma flotante en tanques EFR (deckFittingLossFactor) (lb-mole/yr)
function Eq2_14(){    

    Ff=0; //Inicializo las perdidas en 0 y luego las voy sumando:
    for (i=0;i<t.deck.fittings.length;i++){
        f=t.deck.fittings[i]     //Cada tipo particular de fitting presente en la plataforma flotante 
		//Eq2_15: Calcula el factor de pérdida de cada tipo de accesorio
        Ff+=f.amount*(f.Kfa + f.Kfb * Math.pow((0.7*m.u),f.m));  
    };

	return Ff;
};

//Eq2_16 Factor de pérdidas totales a través de los accesorios de la plataforma flotante en tanques IFR o DEFR (deckFittingLossFactor) (lb-mole/yr)
function Eq2_16() {

	Ff=0; //inicializo las perdidas en 0 y luego las voy sumando:
    for (i=0;i<t.deck.fittings.length;i++){
	 	f=t.deck.fittings[i]     //Cada tipo particular de fitting presente en la plataforma flotante
		//Eq2_16: Calcula el factor de pérdida de cada tipo de accesorio
        Ff+=f.amount*f.Kfa;  
    };

	return Ff;
};

//Eq2_17: Esta ecuación no se incluyó (Sirve para calcular los factores de perdida desde tipos de accesorios que NO estén en la base de datos del programa)

//Eq2_18 Pérdidas a través de las uniones de la plataforma flotante (deckSeamLosses) (lbs/yr)
function Eq2_18() {
	if(t.deck.construction=="welded"||t.type=="EFR"||t.type=="DEFR") {
		Kd=0;
	} else {
		Kd=0.14;
	};
	//Calcula el factor de pérdidas a través de las uniones de la plataforma (seamLengthFactor) (ft/ft2)
	if ( t.deck.seamLength=="" || t.deck.seamLength==null || t.deck.seamLength==0 ) {
		if(t.deck.conformation=="Continuous sheet") {
			seamLengthFactor = ( 1 / t.deck.sheetWidth );
		} else if(t.deck.conformation=="Panel") {
			seamLengthFactor = ( t.deck.panelLength + t.deck.panelWidth ) / ( t.deck.panelLength * t.deck.panelWidth );
		} else {
			seamLengthFactor = 0.2;
		}
	} else {
		seamLengthFactor = t.deck.seamLength/(Math.PI*Math.pow(t.diameter,2)/4);
	};
	outputs.push({varName:"deckSeamLength",value:seamLengthFactor*(Math.PI*Math.pow(t.diameter,2)/4),units:"ft"});

	//Eq2_18
	if(liquidCategory=="Other organic liquids") {
		deckSeamLosses = Kd*seamLengthFactor*Math.pow(t.diameter,2)*vaporPressureFunction*c.molWeight*productFactor  
	} else {
		deckSeamLosses = Kd*seamLengthFactor*Math.pow(t.diameter,2)*vaporPressureFunction*c.vapMolWeight*productFactor  
	};
	return deckSeamLosses;
};

//Eq2_19 Pérdidas por vaciado del tanque (workingLosses) (lbs/yr)
function Eq2_19() {
	
	//Volumen neto total introducido en el tanque a lo largo del año (annualNetThroughput) (bbl/yr) 
	annualNetThroughput=parseFloat(t.annualNetThroughput)/5.614;	
	
	//Determina el factor de adhesión del líquido a las paredes (shellClingageFactor) (bbl/1000ft2)
	if (t.shellClingageFactor=="" || t.shellClingageFactor==null || t.shellClingageFactor==0) {
		if(liquidCategory=="Crude Oils") {
			if(t.shellTexture=="Light Rust") {
				shellClingageFactor = 0.006
			} else if (t.shellTexture=="Dense Rust") {
				shellClingageFactor = 0.03
			} else {shellClingageFactor = 0.6}
		} else {
			if(t.shellTexture=="Light Rust") {
				shellClingageFactor = 0.0015
			} else if (t.shellTexture=="Dense Rust") {
				shellClingageFactor = 0.0075
			} else {shellClingageFactor = 0.15}
		};
	} else {
		shellClingageFactor = parseFloat(t.shellClingageFactor)
	};

	if (unitsOut == "Imperial"){
		resultadosIntermedios.push({varName:"Factor adhesión a pared (bbl/1000ft2)",value:shellClingageFactor});
	} else {
		resultadosIntermedios.push({varName:"Factor adhesión a pared (l/m2)",value:shellClingageFactor/0.5843});
	};
	
	//Obtiene el diámetro efectivo de las columnas internas de soporte que tiene el tanque (effectiveColumnDiameter) (ft)
	if(t.columns.type=="Built-up Columns"){
		effectiveColumnDiameter = 1.1
	} else if(t.columns.type=="Pipe Columns") {
		effectiveColumnDiameter = 0.7
	} else {
		effectiveColumnDiameter = 1
	};
	outputs.push({varName:"effectiveColumnDiameter",value:effectiveColumnDiameter,units:"ft"});
	//Eq2_19
	return ((0.943*annualNetThroughput*shellClingageFactor*c.liqDensity)/t.diameter)*(1+((t.columns.number*effectiveColumnDiameter)/t.diameter));
};

//La Eq2_20 se omitió por ser innecesaria



//FIGURAS=================================================================================================================================================

//Figura 7.1-13b: Presion de vapor (psia) de petróleos crudos que tengan una presión de vapor de Reid de entre 2 y 15 psi
function Fig1_13b(tempRankine) {
	var pressurePsia;
	pressurePsia = Math.exp((((2799/tempRankine) - 2.227) * Math.log10(c.reidVaporPressure)) - (7261/tempRankine) + 12.82);
	return pressurePsia;
}

//Figura 7.1-14b: Presion de vapor (psia) de combustibles refinados que tengan una presión de vapor de Reid de entre 1 y 20 psi
function Fig1_14b(tempRankine) {
	var pressurePsia;
	pressurePsia = Math.exp(((0.7553 - (413.0/tempRankine)) * Math.pow(c.slope,0.5) * Math.log10(c.reidVaporPressure)) - ((1.854 - (1042/tempRankine)) * Math.pow(c.slope,0.5)) + (((2416/tempRankine) - 2.013) * Math.log10(c.reidVaporPressure)) - (8742/tempRankine) + 15.64);
	return pressurePsia;
}

//Figura 7.1-15: Constantes A y B (adimensionales) de la Ecuación de Antoine para combustibles refinados 
function Fig1_15() {
	c.A = 15.64 - (1.854 * Math.pow(c.slope,0.5)) - ((0.8742 - (0.3280 * Math.pow (c.slope,0.5))) * Math.log(c.reidVaporPressure));
	c.B = 8742 - (1042 * Math.pow(c.slope,0.5)) - ((1049 - 179.4 * Math.pow(c.slope,0.5)) * Math.log(c.reidVaporPressure));
}

//Figura 7.1-16: Constantes A y B (adimensionales) de la Ecuación de Antoine para petróleos crudos
function Fig1_16() {
	c.A = 12.82 - (0.9672 * Math.log(c.reidVaporPressure));
	c.B = 7261 - (1216 * Math.log(c.reidVaporPressure));
}

//Figura 7.1-17: Temperaturas máxima y mínima diarias promedio en la superficie del líquido (minSurfaceTemp y maxSurfaceTemp) (°R) 
function Fig1_17() {

	if (t.heating.heating == true && t.insulated=="full") {
		//en tanques con aislamiento térmico total y calentamiento (sección 7.1.3.8.4 del AP-42)
		minSurfaceTemp = t.heating.minBulkTemp;
		maxSurfaceTemp = t.heating.maxBulkTemp;
	} else {
		//Fig1_17
		minSurfaceTemp = avgSurfaceTemp - (0.25 * avgVapTempRange);
		maxSurfaceTemp = avgSurfaceTemp + (0.25 * avgVapTempRange);
	}
	
}

