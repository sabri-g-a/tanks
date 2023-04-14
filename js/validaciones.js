function validacion(validacionID){

	//Corridas de validación:
	console.log(">>> Corrida de validación: "+validacionID+"...");
	

	//"CASO BASE": Valores default para ubicación, tanque y líquido
	
	//Identificación del reporte de salida:
	id={
		userID:"Corrida de Prueba 0",
		location:"",
		company:"",
		description:"",
	};

	unitsInp="Imperial";
	unitsOut="Imperial";

	country="";
	siteName="";

	liquidCategory="";
	liquidName="";
	compoundName=""; 

	t={
        	type:"",	    		
        	height:"",		    	
        	diameter:"",    	    		
        	minLiquidHeight:"", 	    	
        	avgLiquidHeight:"", 	    	
        	maxLiquidHeight:"", 	    	
        	turnoversPerYear:"",      	
        	annualNetThroughput:"",		
        	shell:{
        		color:"",		
        		condition:"",	
        	},
        	roof:{
        		type:"", 	 	
        		color:"",		
        		condition:"",	
        		height:"",		
        		slope:"",		
        		radius:"",		
        	},
        	ventPressureSetting:0.03,	
        	ventVacuumSetting:-0.03,	
        	gaugePressure:"",		
        	insulation:"none",
			avgBulkTemp:"",		
        	heating:{
        		heating: false,		
        		cyclesPerYear:"",	
        		minBulkTemp:"",		
        		maxBulkTemp:"",		
        	},
        	construction:"", 	
        	rimSeal:{
        		fit:"",	
        		type:"",	
        		secondary:"",	
        	},	
        	deck: {
        		construction:"",
				type:"",		
        		fittings:[],		
        		seamLength:"",		
        		conformation:"",	
        		sheetWidth:"",		
        		panelWidth:"",		
        		panelLength:"",		
        	},
        	shellClingageFactor:"",		
        	shellTexture:"",	
        	columns:{
        		number:"",	
        		type:"",	
        	},
        };

	//Configuraciones de cada validación:
	switch (validacionID) {
		case "Prueba1":
			id.userID="Corrida de Prueba 1";
			id.location="Rochester, MN";
			country="USA";
			siteName="Rochester, MN";
			liquidCategory="Other organic liquids";
			compoundName="Hexane (n)";
			t.type="VFR";
			t.height="27.23";
			t.diameter="24.93";
			t.minLiquidHeight="1";
			t.avgLiquidHeight="14.63";
			t.maxLiquidHeight="23.91";
			t.turnoversPerYear="13";
			t.shell.color="white";
			t.shell.condition="new";
			t.roof.type="dome";
			t.roof.color="white";
			t.roof.condition="new";
			t.roof.height="0";
			t.roof.radius="20";
			t.construction="welded";	
		break;
	  	case "Prueba2":
			unitsOut="SI"; 
			id.userID="Corrida de Prueba 2";
			id.location="Duluth, MN";
			country="USA";
			siteName="Duluth, MN";
			liquidCategory="Refined Petroleum Liquids";
			liquidName="Nafta TVR 10";
			t.type="IFR";
			t.height="32.8";
			t.diameter="65.6";
			t.minLiquidHeight="2.37";
			t.avgLiquidHeight="15";
			t.maxLiquidHeight="26";
			t.turnoversPerYear="19.52";
            t.shell.color="gray: medium";
            t.shell.condition="new";
            t.roof.color="gray: medium";
            t.roof.condition="new";
            t.construction="riveted";
			t.rimSeal.fit="Average-Fitting Seal";
			t.rimSeal.type="Mechanical-shoe seal";
			t.rimSeal.secondary="Rim-mounted secondary";
			t.deck.construction="bolted";
			t.deck.conformation="Continuous sheet";
			t.deck.sheetWidth=5;
			addDeckFitting(t,"Access hatch","Unbolted cover, ungasketed",1);
			addDeckFitting(t,"Gauge-float well (automatic gauge)","Unbolted cover, ungasketed",1);
			addDeckFitting(t,"Deck leg, IFR-type","Adjustable",15);
			addDeckFitting(t,"Gauge-hatch/sample port","Weighted mechanical actuation, gasketed",1);
			t.shellTexture="Light Rust";
			t.columns.number=1;
			t.columns.type="Pipe Columns";                                                   
		break;
	  	case "Prueba3":
			id.userID="Corrida de Prueba 3";
			id.location="Rochester, MN";
			country="USA";
			siteName="Rochester, MN";
			liquidCategory="Refined Petroleum Liquids";
			liquidName="Fuel Oil No. 2";
			t.type="HFR";
			t.height="65.6";
			t.diameter="12.3";
			t.turnoversPerYear="13.15";
            t.shell.color="white";
            t.shell.condition="new";
            t.roof.color="white";
            t.roof.condition="new";
		break;
	  	case "Prueba4":
			id.userID="Corrida de Prueba 4";
			id.location="Duluth, MN";
			country="USA";
			siteName="Duluth, MN";
			liquidCategory="Crude Oils";
			liquidName="Midcontinent Crude Oil";    	
			t.type="EFR";
			t.height="43.5";
			t.diameter="87";
			t.minLiquidHeight="2.37";
			t.avgLiquidHeight="18";
			t.maxLiquidHeight="35";
			t.turnoversPerYear="139.99";
            t.shell.color="white";
            t.shell.condition="new";
			t.construction="welded";
			t.rimSeal.fit="Tight-Fitting Seal";
			t.rimSeal.type="Mechanical-shoe seal";
			t.rimSeal.secondary="Rim-mounted secondary";
			t.deck.type="pontoon";
			t.deck.construction="welded";
			addDeckFitting(t,"Access hatch","Bolted cover, gasketed",2);
			addDeckFitting(t,"Slotted guidepole/sample well","Gasketed sliding cover w/pole sleeve and pole wiper",1);
			addDeckFitting(t,"Deck leg, EFR-type, pontoon area","Adjustable - ungasketed",14);
			t.shellTexture="Light Rust";
		break;
		case "Prueba5":
			id.userID="Corrida de Prueba 5";
			id.location="Rochester, MN";
			country="USA";
			siteName="Rochester, MN";
			liquidCategory="Refined Petroleum Liquids";
			liquidName="Jet A-1/JP1 (Combustible de aviación)";
			t.type="DEFR";
			t.height="39.37";
			t.diameter="78.74";
			t.minLiquidHeight="2.37";
			t.avgLiquidHeight="16";
			t.maxLiquidHeight="29.82";
			t.turnoversPerYear="13";
            t.shell.color="white";
            t.shell.condition="aged";
            t.roof.color="white";
            t.roof.condition="aged";
            t.construction="welded";
			t.rimSeal.fit="Average-Fitting Seal";
			t.rimSeal.type="Liquid-mounted seal";
			t.rimSeal.secondary="Weather shield";
			t.deck.construction="welded";
			t.deck.type="double";
			addDeckFitting(t,"Access hatch","Bolted cover, gasketed",1);
			addDeckFitting(t,"Gauge-float well (automatic gauge)","Unbolted cover, ungasketed",1);
			addDeckFitting(t,"Vacuum breaker","Weighted mechanical actuation, gasketed",1);
			addDeckFitting(t,"Deck leg, EFR-type, double-deck roof","Adjustable - gasketed",16);
			t.shellTexture="Dense Rust";                                  
		break;
		case "Prueba6":
			id.userID="Corrida de Prueba 6";
			id.location="Rochester, MN";
			country="USA";
			siteName="Rochester, MN";
			liquidCategory="Crude Oils";
			liquidName="Midcontinent Crude Oil";  
			t.type="HFR";
			t.height="65.6";
			t.diameter="12.3";
			t.turnoversPerYear="13.15";
            t.shell.color="white";
            t.shell.condition="new";
            t.roof.color="white";
            t.roof.condition="new";
			t.insulation="underground";
			t.avgBulkTemp="502.2";	
		break;
		case "Prueba7":
			id.userID="Corrida de Prueba 7";
			id.location="Duluth, MN";
			country="USA";
			siteName="Duluth, MN";
			liquidCategory="Other organic liquids";
			compoundName="Benzene";
			t.type="VFR";
			t.height="27.23";
			t.diameter="24.93";
			t.minLiquidHeight="1";
			t.avgLiquidHeight="14.63";
			t.maxLiquidHeight="23.91";
			t.turnoversPerYear="13";
			t.shell.color="white";
			t.shell.condition="new";
			t.roof.type="dome";
			t.roof.color="white";
			t.roof.condition="new";
			t.roof.height="0";
			t.roof.radius="24.93";
			t.construction="welded";	
			t.insulation="full";
			t.avgBulkTemp="498.13"
		break;
		case "Prueba8":
			id.userID="Corrida de Prueba 8";
			id.location="Duluth, MN";
			country="USA";
			siteName="Duluth, MN";
			liquidCategory="Refined Petroleum Liquids";
			liquidName="Asfalto (Residuo o fondo de vacío)";
			t.type="VFR";
			t.height="49.21";
			t.diameter="125.33";
			t.minLiquidHeight="2.3";
			t.avgLiquidHeight="23.82";
			t.maxLiquidHeight="45.17";
			t.turnoversPerYear="16.36";
			t.shell.color="aluminum: diffuse";
			t.shell.condition="aged";
			t.roof.type="cone";
			t.roof.color="aluminum: diffuse";
			t.roof.condition="aged";
			t.roof.height="0";
			t.roof.slope="0.0625";
			t.insulation="full";
			t.heating.heating=true;		
        	t.heating.cyclesPerYear="365";	
        	t.heating.minBulkTemp="509.67";		
        	t.heating.maxBulkTemp="527.67";
		break;
		case "Prueba9":
			id.userID="Corrida de Prueba 9";
			id.location="Rochester, MN";
			country="USA";
			siteName="Rochester, MN";
			liquidCategory="Refined Petroleum Liquids";
			liquidName="Nafta TVR 13";  
			t.type="HFR";
			t.height="65.6";
			t.diameter="12.3";
			t.turnoversPerYear="13.15";
            t.shell.color="white";
            t.shell.condition="new";
            t.roof.color="white";
            t.roof.condition="new";
			t.ventPressureSetting="1";
			t.ventVacuumSetting="-1";
			t.gaugePressure="0";	
		break;
		case "Prueba10":
			id.userID="Corrida de Prueba 10";
			id.location="Duluth, MN";
			country="USA";
			siteName="Duluth, MN";
			liquidCategory="Refined Petroleum Liquids";
			liquidName="Asfalto (Residuo o fondo de vacío)";
			t.type="VFR";
			t.height="49.21";
			t.diameter="125.33";
			t.minLiquidHeight="2.3";
			t.avgLiquidHeight="23.82";
			t.maxLiquidHeight="45.17";
			t.turnoversPerYear="16.36";
			t.shell.color="aluminum: diffuse";
			t.shell.condition="aged";
			t.roof.type="cone";
			t.roof.color="aluminum: diffuse";
			t.roof.condition="aged";
			t.roof.height="0";
			t.roof.slope="0.0625";
			t.insulation="shell";
			t.heating.heating=true;		
        	t.heating.cyclesPerYear="365";	
        	t.heating.minBulkTemp="509.67";		
        	t.heating.maxBulkTemp="527.67";
		break;
	};


	// (1) INPUTS

	//  (1a) datos meteorologicos:
    m=loadMeteorologicalParameters(siteName);

	//  (1b) datos de combustible:
	if (liquidCategory == "Other organic liquids"){
		c=loadCompoundParameters(compoundName);
	}
	else{
		c=loadLiquidParameters(liquidName);
	};

	// (1c) datos del tanque:
	t.rimSeal=findRimSealProp(t);	//busca los factores de pérdidas a través del sello de la plataforma flotante (en tanques IFR, EFR o DEFR)
	
	if(t.turnoversPerYear!=0 && t.turnoversPerYear!="" && isNaN(t.turnoversPerYear)==false) {
		
		if (t.type=="VFR"){
			effectiveDiameter=t.diameter;
			minLiquidHeight=t.minLiquidHeight;
			if (t.maxLiquidHeight!= "" && t.maxLiquidHeight!=0 && t.maxLiquidHeight!=null) {
				maxLiquidHeight = t.maxLiquidHeight;
			} else {
				maxLiquidHeight = t.maxLiquidHeight - 1;
			};				
		} else if (t.type=="HFR") {
			effectiveDiameter = Math.sqrt((t.height * t.diameter) / (Math.PI / 4));
			effectiveHeight = Math.PI * t.diameter / 4;
			maxLiquidHeight = effectiveHeight;
			minLiquidHeight = 0;
		} else {
			minLiquidHeight=t.minLiquidHeight;
			maxLiquidHeight=t.maxLiquidHeight;
			effectiveDiameter=t.diameter;
		};

		t.annualNetThroughput = (t.turnoversPerYear*(maxLiquidHeight-minLiquidHeight)*(Math.PI/4)*Math.pow(effectiveDiameter,2));
	
	} else if (t.annualNetThroughput!=0 && t.annualNetThroughput!="" && t.annualNetThroughput!=null) {
		
		if (t.type=="VFR"){
			effectiveDiameter=t.diameter;
			minLiquidHeight=t.minLiquidHeight;
			if (t.maxLiquidHeight!= "" && t.maxLiquidHeight!=0 && t.maxLiquidHeight!=null) {
				maxLiquidHeight = t.maxLiquidHeight;
			} else {
				maxLiquidHeight = t.height - 1;
			};				
		} else if (t.type=="HFR") {
			effectiveDiameter = Math.sqrt((t.height * t.diameter) / (Math.PI / 4));
			effectiveHeight = Math.PI * t.diameter / 4;
			maxLiquidHeight = effectiveHeight;
			minLiquidHeight = 0;
		} else {
			minLiquidHeight=t.minLiquidHeight;
			maxLiquidHeight=t.maxLiquidHeight;
			effectiveDiameter=t.diameter;
		};		
		
		t.turnoversPerYear=t.annualNetThroughput/((Math.PI/4)*(Math.pow(effectiveDiameter,2))*(maxLiquidHeight-minLiquidHeight));
	};


	// (2) 

	// (2a) Inicializar array con resultados de variables intermedias:
	resultadosIntermedios=[];

	// (2b) Inicializar objeto y array con variables que van al reporte de salida:
	o={};
	outputs=[];


	//
	//(3) CALCULOS

	//  (3.a) calculos previos:
	t.a=calculateSolarAbsorbance(t);	//calcular absorbancia solar en base a pintura
	resultadosIntermedios.push({varName:"Factor de absorbancia pintura (adimensional)",value:t.a});
	t.workingVolume=calculateWorkingVolume(t);	//calcula el volumen útil o de operación del tanque [ft3]
	outputs.push({varName:"workingVolume",value:t.workingVolume,units:"ft3"});

	//  (3.b) calculo de emision:

	if (t.type == "VFR" || t.type == "HFR") {
        totalLosses = Eq1_1();
	} else if (t.type == "EFR" || t.type == "DEFR" || t.type == "IFR") {
		totalLosses = Eq2_1();
    };
	outputs.push({varName:"totalLosses",value:totalLosses,units:"lbs"});	

	
	//(4) OUTPUT

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

	printOutput();

	console.log(" Resultados:");

	if (t.type == "VFR" || t.type == "HFR") {
		console.log("    Emisiones totales: "+o.totalLosses);
		console.log("    Pérdidas almacenamiento: "+o.standingLosses); 
		console.log("    Pérdidas por llenado/vaciado: "+o.workingLosses);
	} else {
		console.log("    Emisiones totales: "+o.totalLosses);
		console.log("    Pérdidas almacenamiento: "+o.standingLosses); 		
		console.log("    Pérdidas accesorios: "+o.deckFittingLosses);
		console.log("    Pérdidas costuras: "+o.deckSeamLosses);
		console.log("    Pérdidas sello: "+o.rimSealLosses);
		console.log("    Pérdidas por vaciado: "+o.workingLosses);
	};
	

	console.log(">>> Fin corrida de validación: "+validacionID+"...");

};



function validarTodo(){

	corridasDeValidacion=["Prueba1","Prueba2","Prueba3","Prueba4","Prueba5","Prueba6","Prueba7","Prueba8","Prueba9","Prueba10"];

	for (let i=0; i<corridasDeValidacion.length; i++){
		
		validacion(corridasDeValidacion[i]);
	};
	
};
