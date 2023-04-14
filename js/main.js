function main(){

	console.log(">>> Iniciando ejecución..");

	// IDENTIFICACIÓN DEL REPORTE DE SALIDA
	id={
		userID:$("#userID").val(),
		location:$("#location").val(),
		company:$("#company").val(),
		description:$("#description").val(),
	};

	// (1) INPUTS

	// (1a) Opciones globales:
	unitsInp=$('input[id=unitsInput]:checked').val(); 	//Unidades de Input  [SI/Imperial]  
	unitsOut=$('input[id=unitsOutput]:checked').val(); 	//Unidades de Output [SI/Imperial] 
	
	// (1b) Datos del tanque:
	
	t=loadTankParameters();	//estos valores los provee el usuario.
	
	t.rimSeal=findRimSealProp(t);	//busca los factores de pérdidas a través del sello de la plataforma flotante (en tanques IFR, EFR o DEFR)
	
	if (fittingsCounter>0) { // Accesorios de la plataforma flotante:
		for (var i = 1; i<=fittingsCounter; i++) {
			addDeckFitting(t,document.getElementById("fittingName"+i).value,document.getElementById("fittingType"+i).value,document.getElementById("fittingAmount"+i).value);
		};
	};
	
	// (1c) Datos del líquido almacenado (sólo si el usuario decide ingresarlos MANUALMENTE):
	liqInput=$("#liqInput").val();
	if (liqInput=="Manual") {
		c=manualLiquidParameters();	//toma los valores provistos por el usuario
	};

	
	// (2) 

	// (2a) Inicializar array con resultados de variables intermedias:
	resultadosIntermedios=[];

	// (2b) Inicializar objeto y array con variables que van al reporte de salida:
	o={};
	outputs=[];


	// (3) CALCULOS

	// (3.a) calculos previos:
	t.a=calculateSolarAbsorbance(t);	//calcular absorbancia solar en base a pintura
	resultadosIntermedios.push({varName:"Factor de absorbancia pintura (adimensional)",value:t.a});
	t.workingVolume=calculateWorkingVolume(t);	//calcula el volumen útil o de operación del tanque [ft3]
	outputs.push({varName:"workingVolume",value:t.workingVolume,units:"ft3"});

	// (3.b) calculo de emision:
	if (t.type == "VFR" || t.type == "HFR") {
        totalLosses = Eq1_1();
	} else if (t.type == "EFR" || t.type == "DEFR" || t.type == "IFR") {
		totalLosses = Eq2_1();
    };
	outputs.push({varName:"totalLosses",value:totalLosses,units:"lbs"});	

	
	// (4) OUTPUT

	outputs.push({varName:"height",value:t.height,units:"ft"});
	outputs.push({varName:"diameter",value:t.diameter,units:"ft"});
	outputs.push({varName:"minLiquidHeight",value:t.minLiquidHeight,units:"ft"});
	outputs.push({varName:"maxLiquidHeight",value:t.maxLiquidHeight,units:"ft"});
	outputs.push({varName:"annualNetThroughput",value:t.annualNetThroughput,units:"ft3"});
	
	// Convertir unidades si el usuario elige sistema internacional:
	if (unitsOut == "SI"){
		for (let i=0; i< outputs.length; i++){
			if (outputs[i].units=="ft"){
				o[outputs[i].varName]=outputs[i].value/3.28084;
			} else if (outputs[i].units=="ft3"){
				o[outputs[i].varName]=outputs[i].value*0.0283;
			} else if (outputs[i].units=="psi"){
				o[outputs[i].varName]=outputs[i].value/0.145;
			} else	if (outputs[i].units=="°R"){
				o[outputs[i].varName]=(outputs[i].value-491.67)/1.8;
			} else	if (outputs[i].units=="lbs"){
				o[outputs[i].varName]=outputs[i].value*0.45359;
			} else {
				o[outputs[i].varName]=outputs[i].value;
			};
		};
	} else {
		for (let i=0; i< outputs.length; i++){
			if (outputs[i].units=="°R"){
				o[outputs[i].varName]=(outputs[i].value-459.67);
			} else {
				o[outputs[i].varName]=outputs[i].value;
			};
		};
	};

	printOutput();	// Crear reporte (./js/output.js)

	console.log(">>> Fin de ejecución.");
}

//--------------------------------------------------
// Funciones y subrutinas

function loadMeteorologicalParameters(siteName){
	
	console.log("   Cargando datos meteorológicos.. ");
	console.log("      Sitio: "+siteName);

	if (country=="Argentina") {

        baseDeDatosMeteorologica=getARGMeteorologicalData();	//levanto db de archivo: ./tablas/meteoARG.js
		m=baseDeDatosMeteorologica.find(element => element.siteName==siteName)
		
		m.minAmbientTemp+=459.67;	//pasar temperaturas de "grados Fahrenheit" a "grados Rankine"
		m.maxAmbientTemp+=459.67;	//pasar temperaturas de "grados Fahrenheit" a "grados Rankine"

		return m;

	} else if (country=="USA"){
		
		baseDeDatosMeteorologica=getUSAMeteorologicalData();	//levanto db de archivo: ./tablas/meteoUSA.js
		m=baseDeDatosMeteorologica.find(element => element.siteName==siteName)
		
		m.minAmbientTemp+=459.67;	//pasar temperaturas de "grados Fahrenheit" a "grados Rankine"
		m.maxAmbientTemp+=459.67;	//pasar temperaturas de "grados Fahrenheit" a "grados Rankine"

		return m;
	};
};


function loadLiquidParameters(liquidName){

	console.log("      Liquido: "+liquidName);

	if (liquidCategory=="Refined Petroleum Liquids") {
        baseDeDatosLiquidos=getRefinedOilsData(); //levanto de base de datos de petróleos refinados (tablas/petroleum.js)
        l=baseDeDatosLiquidos.find(element => element.liquidName==liquidName); //me quedo con el que me interesa
		return l;
	} else {
		baseDeDatosLiquidos=getCrudeOilsData(); //levanto de base de datos de petróleos crudos (tablas/petroleum.js)
		l=baseDeDatosLiquidos.find(element => element.liquidName==liquidName); //me quedo con el que me interesa
		return l;
	};
};

function loadCompoundParameters(compoundName){

	console.log("      Compuesto: "+compoundName);
	
	baseDeDatosCompuestos=getCompoundData(); //levanto de base de datos de compuestos puros (tablas/chems.js)
	c=baseDeDatosCompuestos.find(element => element.compoundName==compoundName) //me quedo con el que me interesa
	
	return c;
};

function manualLiquidParameters(){
	
	console.log("   Tomando características del líquido.. ");

	if (unitsInp == "Imperial"){
		c={
			compoundName:$("#tankContent").val(),		
			liquidName:$("#tankContent").val(),			
			molWeight:$("#molW").val(),					//Peso molecular del compuesto puro [lb/lb-mol]	
			liqMolWeight:$("#liqMW").val(),				//Peso molecular del líquido de un pétroleo crudo o refinado [lb/lb-mol]	
			vapMolWeight:$("#vapMW").val(),				//Peso molecular del vapor de un pétroleo crudo o refinado [lb/lb-mol]		
			liqDensity:$("#liqD").val(),				//Densidad promedio del líquido [lb/gal]	
			A:$("#coefA").val(),						//Constante A de la ecuación de Antoine [unidades varían según si es un compuesto puro o un petróleo y no se pueden convertir]					
			B:$("#coefB").val(),						//Constante B de la ecuación de Antoine [unidades varían según si es un compuesto puro o un petróleo y no se pueden convertir]	
			C:$("#coefC").val(),						//Constante C de la ecuación de Antoine [unidades varían según si es un compuesto puro o un petróleo y no se pueden convertir]	
			slope:$("#slope").val(),					//Pendiente de la curva de destilación ASTM-D86 del combustible a un nivel de evaporación del 10% [°F/%evaporado]	
			reidVaporPressure:$("#RVP").val(),			//Presión de vapor de Reid del combustible [psi]	
		};
	} else {
		//Convertir unidades si el usuario elije sistema internacional:
		c={
			compoundName:$("#tankContent").val(),	
			liquidName:$("#tankContent").val(),
			molWeight:$("#molW").val(),					//Peso molecular del compuesto puro [lb/lb-mol]
			liqMolWeight:$("#liqMW").val(),				//Peso molecular del líquido de un pétroleo crudo o refinado [lb/lb-mol]
			vapMolWeight:$("#vapMW").val(),				//Peso molecular del vapor de un pétroleo crudo o refinado [lb/lb-mol]
			liqDensity:$("#liqD").val()*8.3454,			//Densidad promedio del líquido [lb/gal]
			A:$("#coefA").val(),						//Constante A de la ecuación de Antoine [unidades varían según si es un compuesto puro o un petróleo y no se pueden convertir]
			B:$("#coefB").val(),						//Constante B de la ecuación de Antoine [unidades varían según si es un compuesto puro o un petróleo y no se pueden convertir]
			C:$("#coefC").val(),						//Constante C de la ecuación de Antoine [unidades varían según si es un compuesto puro o un petróleo y no se pueden convertir]
			slope:$("#slope").val()*1.8,				//Pendiente de la curva de destilación ASTM-D86 del combustible a un nivel de evaporación del 10% [°F/%evaporado]
			reidVaporPressure:$("#RVP").val()*0.145,	//Presión de vapor de Reid del combustible [psi]
		};

	};
	
	return c;
};

function loadTankParameters(){

	console.log("   Tomando características del tanque.. ");

	if (unitsInp == "Imperial"){
		t={
			type:$('input[id=tankType]:checked').val(),	  			//(VFR|HFR|EFR|DEFR|IFR)
			height:$("#shellHeight").val(),		 					//altura [ft] // ACLARACIÓN: Si el tanque es horizontal, aquí debe ingresarse su largo.
			diameter:$("#diameter").val(),    						//diametro [ft]
			minLiquidHeight:minLiquidHeight, 	  					//altura minima de liquido [ft] // ACLARACIÓN: Para tanques VFR, si no se conoce, ingresar 1. Para tanques HFR, NO se ingresa. Para tanques de techo flotante se tiene que ingresar SÍ O SÍ.
			avgLiquidHeight:$("#avgLiquidHeight").val(), 	  		//altura promedio de liquido [ft] // ACLARACIÓN: Para tanques HFR y tanques de techo flotante, NO se ingresa. Para tanques VFR, si no se conoce, dejar en blanco o ingresar cero.
			maxLiquidHeight:maxLiquidHeight, 	  					//altura maxima de liquido [ft] // ACLARACIÓN: Para tanques VFR, si no se conoce, dejar en blanco o ingresar cero. Para tanques HFR, NO se ingresa. Para tanques de techo flotante se tiene que ingresar SÍ O SÍ. 
			turnoversPerYear:$("#turnoversPerYear").val(),     		//número de veces que el tanque se llenó totalmente en el año [adimensional] // ACLARACIÓN: Si se desconoce, ingresar cero o dejar vacío e ingresar a continuacion el valor de AnnualNetThroughput
			annualNetThroughput:$("#annualNetThroughput").val(), 	//volumen neto que se incorporó al tanque a lo largo de todo el año [ft3/año] (alternativamente se puede usar el volumen bruto pero eso generaría una sobreestimación de las emisiones) // ACLARACIÓN: Si se desconoce, se debe ingresar el valor de turnoversPerYear en la entrada anterior, para que lo calcule automaticamente.
			shell:{
				color:$("#paintShell").val(),		
				condition:$("#conditionShell").val(),
			},
			roof:{
				type:$("#roofType").val(), 	 				//(cone|dome)
				color:$("#paintRoof").val(),				//color
				condition:$("#conditionRoof").val(),		//(new|aged|average)
				height:$("#roofH").val(),					//altura del techo [ft] // ACLARACIÓN: Si el usuario no tiene el valor de la altura del techo, en esta variable se debe ingresar cero.
				slope:$("#roofSlope").val(),				//pendiente del techo (si es cónico) [ft/ft]
				radius:$("#roofRad").val(),					//radio del techo (si es en forma de domo) [ft] // ACLARACIÓN: Si el usuario no tiene el valor del radio del techo, en esta variable se debe ingresar el mismo valor que se haya ingresado para el diámetro del tanque (así lo recomienda el AP-42).
			},
			ventPressureSetting:$("#pressure").val(), 		//presión a la cual están seteadas las válvulas de ventilación [psig]
			ventVacuumSetting:$("#vacuum").val(), 			//presión de vacío de las válvulas de ventilación [psig]
			gaugePressure:$("#gaugePress").val(), 			//presión manométrica en la fase vapor en condiciones de operación normales [psig] // ACLARACIÓN: sólo se debe ingresar si la ventPressureRange ingresada es mayor que 0,06. Si el tanque está a temperatura atmosférica, debe ingresarse cero.
			insulation:$("#insulated").val(),				//none, shell, full, underground //ACLARACIÓN: El AP-42 sólo permite incorporar el aislamiento térmico en los cálculos para tanques de techo fijo
			avgBulkTemp:$("#avgBulkTemp").val(),			//temperatura promedio del líquido [grados Rankine] //ACLARACIÓN: En tanques que tengan cualquier tipo de aislamiento pero NO calentamiento, se debe ingresar en este input una medición directa de la temperatura en el seno del líquido.
			heating:{
				heating:$("#heated").is(":checked"),		//considerar calentamiento? //ACLARACIÓN: El AP-42 sólo permite incorporar el calentamiento en los cálculos para tanques de techo fijo
				cyclesPerYear:$("#cyclesPerYear").val(),	//numero de ciclos de calentamiento
				minBulkTemp:$("#minBulkTemp").val(),		//temperatura minima del liquido [grados Rankine] //ACLARACIÓN: Si el tanque tiene calentamiento, es obligatorio ingresar en este input una medición directa de la temperatura en el seno del líquido y tiene que ser mayor a 460°R 
				maxBulkTemp:$("#maxBulkTemp").val(),		//temperatura maxima del liquido [grados Rankine] //ACLARACIÓN: Si el tanque tiene calentamiento, es obligatorio ingresar en este input una medición directa de la temperatura en el seno del líquido y tiene que ser mayor a 460°R 
			},
			construction:$("#tankConst").val(),		//(welded|riveted) //ACLARACIÓN: Si no se sabe, el AP-42 recomienda asumir que es "welded".
			rimSeal:{
				fit:$("#sealFit").val(),			//(Average-Fitting Seal|Tight-Fitting Seal)
				type:$("#primarySeal").val(),		//(Mechanical-shoe Seal|Liquid-mounted seal|Vapor-mounted Seal)
				secondary:$("#secondSeal").val(),	//(Primary only|Shoe-mounted secondary|Rim-mounted secondary|Weather shield)
			},	
			deck: {
				construction:$("#deckConst").val(),			//(welded|bolted)
				type:$("#deckType").val(),					//(pontoon|double|unknown) //ACLARACIÓN: Si se ingresa "unknown", el programa hace los cálculos como si fuera pontoon (así lo recomienda el AP-42).
				fittings:[],								//acá agrego array con "accesorios"
				seamLength:$("#seamLength").val(),	 		//medida total de las "costuras" de la plataforma flotante [ft] //si no se conoce, se debe dejar en blanco o ingresar cero
				conformation:$("#deckConf").val(),	 		//(Continuous sheet|Panel|Unknown)//si no se conocen las MEDIDAS de las hojas o paneles con los que está construida la plataforma, se debe elegir la opción "Unknown" 
				sheetWidth:$("#sheetWidth").val(),			//ancho de las hojas de metal con las que está construida la plataforma flotante [ft]
				panelWidth:$("#panelWidth").val(),			//ancho de los paneles rectangulares de metal con los que está construida la plataforma flotante [ft]
				panelLength:$("#panelLength").val(),		//largo de los paneles rectangulares de metal con los que está construida la plataforma flotante [ft]
			},
			shellClingageFactor:$("#shellClingageFactor").val(),		//factor de adhesión del líquido a las paredes [bbl/1000ft2]//si no se conoce, se debe dejar en blanco o ingresar cero
			shellTexture:$("#shellTexture").val(),						//(Light Rust|Dense Rust|Gunite Lining)//estado del interior de las paredes del tanque 	
			columns:{
				number:$("#numColumns").val(),				//número de columnas internas de soporte que tiene el tanque (sólo cuando es un tanque IFR, porque los DEFR tienen techos autoportantes)
				type:$("#typeColumns").val(),				//(Built-up Columns|Pipe Columns|Unknown)
			},
		};
	} else {
		//Convertir unidades si el usuario elije sistema internacional:
		t={
			type:$('input[id=tankType]:checked').val(),	  					//(VFR|HFR|EFR|DEFR|IFR)
			height:$("#shellHeight").val()*3.28084,		 					//altura [ft] 
			diameter:$("#diameter").val()*3.28084,    						//diametro [ft]
			minLiquidHeight:minLiquidHeight*3.28084, 						//altura minima de liquido [ft] 
			avgLiquidHeight:$("#avgLiquidHeight").val()*3.28084, 			//altura promedio de liquido [ft] 
			maxLiquidHeight:maxLiquidHeight*3.28084, 						//altura maxima de liquido [ft] 
			turnoversPerYear:$("#turnoversPerYear").val(),     				//número de veces que el tanque se llenó totalmente en el año [adimensional] 
			annualNetThroughput:$("#annualNetThroughput").val()*35.3147, 	//volumen neto que se incorporó al tanque a lo largo de todo el año [ft3/año]
			shell:{
				color:$("#paintShell").val(),		
				condition:$("#conditionShell").val(),
			},
			roof:{
				type:$("#roofType").val(), 	 				//(cone|dome)
				color:$("#paintRoof").val(),				//color
				condition:$("#conditionRoof").val(),		//(new|aged|average)
				height:$("#roofH").val()*3.28084,			//altura del techo [ft] 
				slope:$("#roofSlope").val(),				//pendiente del techo (si es cónico) [ft/ft]
				radius:$("#roofRad").val()*3.28084,			//radio del techo (si es en forma de domo) [ft] 
			},
			ventPressureSetting:$("#pressure").val()*14.5038, 	//presión a la cual están seteadas las válvulas de ventilación [psig]
			ventVacuumSetting:$("#vacuum").val()*14.5038, 		//presión de vacío de las válvulas de ventilación [psig]
			gaugePressure:$("#gaugePress").val()*14.5038, 		//presión manométrica en la fase vapor en condiciones de operación normales [psig] 
			insulation:$("#insulated").val(),					//none, shell, full, underground 
			avgBulkTemp:$("#avgBulkTemp").val()*1.8 + 491.67,	//temperatura promedio del líquido [grados Rankine]
			heating:{
				heating:$("#heated").is(":checked"),					//considerar calentamiento?
				cyclesPerYear:$("#cyclesPerYear").val(),				//numero de ciclos de calentamiento
				minBulkTemp:$("#minBulkTemp").val()*1.8 + 491.67,		//temperatura minima del liquido [grados Rankine] 
				maxBulkTemp:$("#maxBulkTemp").val()*1.8 + 491.67,		//temperatura maxima del liquido [grados Rankine] 
			},
			construction:$("#tankConst").val(),		//(welded|riveted) 
			rimSeal:{
				fit:$("#sealFit").val(),			//(Average-Fitting Seal|Tight-Fitting Seal)
				type:$("#primarySeal").val(),		//(Mechanical-shoe Seal|Liquid-mounted seal|Vapor-mounted Seal)
				secondary:$("#secondSeal").val(),	//(Primary only|Shoe-mounted secondary|Rim-mounted secondary|Weather shield)
			},	
			deck: {
				construction:$("#deckConst").val(),				//(welded|bolted)
				type:$("#deckType").val(),						//(pontoon|double|unknown) 
				fittings:[],									//acá agrego array con "accesorios"
				seamLength:$("#seamLength").val()*3.28084,	 	//medida total de las "costuras" de la plataforma flotante [ft] 
				conformation:$("#deckConf").val(),	 			//(Continuous sheet|Panel|Unknown)
				sheetWidth:$("#sheetWidth").val()*3.28084,		//ancho de las hojas de metal con las que está construida la plataforma flotante [ft]
				panelWidth:$("#panelWidth").val()*3.28084,		//ancho de los paneles rectangulares de metal con los que está construida la plataforma flotante [ft]
				panelLength:$("#panelLength").val()*3.28084,	//largo de los paneles rectangulares de metal con los que está construida la plataforma flotante [ft]
			},
			shellClingageFactor:$("#shellClingageFactor").val()*0.5843,		//factor de adhesión del líquido a las paredes [bbl/1000ft2]
			shellTexture:$("#shellTexture").val(),							//(Light Rust|Dense Rust|Gunite Lining)
			columns:{
				number:$("#numColumns").val(),				//número de columnas internas de soporte que tiene el tanque 
				type:$("#typeColumns").val(),				//(Built-up Columns|Pipe Columns|Unknown)
			},
		};		
	};

	return t;
};

function calculateSolarAbsorbance(t){
	
	console.log("   Calculando absorbancia del tanque.. ");

	paint=getPaintProperties();	//levanto db de archivo: ./tablas/paint.js

	if (t.type == "HFR"||t.type=="EFR"){
		
		aShell=eval("paint.find( element => element.paintName==\""+t.shell.color+"\")."+t.shell.condition);
		aRoof=aShell;
		a=aShell;
	}
	else{
		aShell=eval("paint.find( element => element.paintName==\""+t.shell.color+"\")."+t.shell.condition);
		aRoof=eval("paint.find( element => element.paintName==\""+t.roof.color+"\")."+t.roof.condition);
		
		a=(aShell+aRoof)*0.5;	//promedio de absorb entre shell y roof.
	};

	return a; 
};


function calculateWorkingVolume(t) {
	if(t.type=="HFR"){
		t.effectiveDiameter=Eq1_14();
		t.effectiveHeight=Eq1_15();
		t.workingVolume = t.effectiveHeight*(Math.PI/4)*Math.pow(t.effectiveDiameter,2);
	} else {
		t.workingVolume = (t.maxLiquidHeight-t.minLiquidHeight)*(Math.PI/4)*Math.pow(t.diameter,2);
	};

	return t.workingVolume;
};


function addDeckFitting(t,fittingName,fittingType,n) {
	
	databaseDeckFittings=getDeckFittingsProperties(); //levanto de base de datos de deckFittings (tablaa/deckFittings.js)
	f=databaseDeckFittings.find(element=>(element.fittingName==fittingName && element.fittingType==fittingType));
	t.deck.fittings.push({
		fittingName:fittingName,
		fittingType:fittingType,
		amount:n,
		Kfa:f.Kfa,
		Kfb:f.Kfb,
		m:f.m,
	});

};
	

function findRimSealProp(t) {
	
	databaseRimSeals=getRimSealProperties(); //levanto de base de datos de Rim Seals (tablas/rimSeal.js)
	t.rimSeal=databaseRimSeals.find(element => (element.fit==t.rimSeal.fit & element.tankConstruction==t.construction & element.type==t.rimSeal.type & element.secondary==t.rimSeal.secondary)) //me quedo con el que me interesa
	
	return t.rimSeal;
};
