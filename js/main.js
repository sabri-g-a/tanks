function main(){

	console.log(">>> Iniciando ejecución..");

	//(1) INPUTS
	//  (0) Opciones globales:
	unitsInp="Imperial"		//document.getElementById("unitsInput").value;  //Unidades de Input  [SI/Imperial]  
	unitsOut="Imperial"		//document.getElementById("unitsOutput").value; //Unidades de Output [SI/Imperial] 

	//  (1a) datos meteorologicos:
        siteName="Austin, TX";          //document.getElementById("siteName").value;
        m=loadMeteorologicalParameters(siteName);

	//  (1b) datos de combustible:
	liquidCategory="Crude Oils"	//document.getElementById("liquidCategory").value; //Crude Oils, Refined Petroleum Liquids, Other organic liquids
	
 	console.log("      Tipo de liquido: "+liquidCategory);

	if (liquidCategory == "Other organic liquids"){
		compoundName="";    	//document.getElementById("compoundName").value;
		c=loadCompoundParameters(compoundName);
	}
	else{
		liquidName="Midcontinent Crude Oil"; //document.getElementById("liquidName").value;
		c=loadLiquidParameters(liquidName);
	};
	
	//  (1c) datos del tanque:
	t=loadTankParameters();	//estos valores los provee el usuario.

	//  (1d) inicializar objeto con datos de salida:
	o={};

	//
	//(2) CALCULOS

	//  (0) Convertir unidades si el usuario elije sistema internacional:
	if (unitsInp == "SI"){
		//Acá funcion para convertir todos los inputs a Imperial:
	};

	//  (2.a) calculos previos:
	t.a=calculateSolarAbsorbance(t);	//calcular absorbancia solar en base a pintura:

	//  (2.b) calculo de emision:

	if (t.type == "VFR") {
                Eq1_1();

	} else if (t.type == "HFR") {
                Eq1_1();

	} else if (t.type == "EFR") {
                //ecuación para "Exterior Floating Roof Tanks" (aún no incorporada);

        } else if (t.type == "IFR") {
                //ecuación para "Interior Floating Roof Tanks" (aún no incorporada);
        }
	
	//(3) OUTPUT
	//   (0)  Convertir unidades si el usuario elige sistema internacional.
	if (unitsOut == "SI"){
        	//Funcion para convertir todos los outputs a SI.
	};

	//outputWindow()	//Acá función que crea informe de salida.

	console.log(">>> Fin de ejecución.");
}

//--------------------------------------------------
//Funciones y subrutinas

function loadMeteorologicalParameters(siteName){
	
	console.log("   Cargando datos meteorológicos.. ");
	console.log("      Sitio: "+siteName);

	baseDeDatosMeteorologica=getMeteorologicalData();	//levanto db de archivo: ./tablas/meteo.js
	m=baseDeDatosMeteorologica.find(element => element.siteName==siteName)
	
	m.minAmbientTemp+=459.67;	//pasar temperaturas de "grados Fahrenheit" a "grados Rankine"
	m.maxAmbientTemp+=459.67;	//pasar temperaturas de "grados Fahrenheit" a "grados Rankine"

	return m;
};


function loadLiquidParameters(liquidName){

	console.log("   Cargando parámetros físico-quimicos.. ");
	console.log("      Liquido: "+liquidName);

        baseDeDatosLiquidos=getLiquidData(); //levanto de base de datos de líquidos de petróleo (tablas/petroleum.js)
        l=baseDeDatosLiquidos.find(element => element.liquidName==liquidName); //me quedo con el que me interesa

	return l;
};

function loadCompoundParameters(compoundName){
	
	console.log("   Cargando parámetros físico-quimicos.. ");
	console.log("      Compuesto: "+compoundName);
	
	baseDeDatosCompuestos=getCompoundData(); //levanto de base de datos de compuestos puros (tablas/chems.js)
	c=baseDeDatosCompuestos.find(element => element.compoundName==compoundName) //me quedo con el que me interesa
	
	return c;
};


function loadTankParameters(){

	console.log("   Tomando características del tanque.. ");

	t={
		type:"VFR",	    		//document.getElementById("tankType").value; //(VFR|HFR|EFR|IFR)
		height:10,		    	//document.getElementById("tankheight").value; //altura [m] // ACLARACIÓN: Si el tanque es horizontal, aquí debe ingresarse su largo.
		diameter:5,    	    		//document.getElementById("tankDiamter").value; //diametro [m]
		minLiquidHeight:1, 	    	//document.getElementById("").value; //altura minima de liquido [m]
		avgLiquidHeight:2, 	    	//document.getElementById("").value; //altura promedio de liquido [m]
		maxLiquidHeight:3, 	    	//document.getElementById("").value; //altura maxima de liquido [m]
		turnoversPerYear:0.02,      	//document.getElementById("").value; //número de veces que el tanque se llenó totalmente en el año
		annualNetThroughput:5.88,	//document.getElementById("").value; //volumen neto que se incorporó al tanque a lo largo de todo el año [gal] (alternativamente se puede usar el volumen bruto pero eso generaría una sobreestimación de las emisiones)
		vaporbalanced:true, 		//document.getElementById("").value; //esta en equilibrio con el vapor?
		shell:{
			color:"black",		//document.getElementById("").value; //color
			condition:"aged",	//document.getElementById("").value; //(new|aged|average)
		},
		roof:{
			type:"dome", 	 	//document.getElementById("").value; //(cone|dome)
			color:"white",		//document.getElementById("").value; //color
			condition:"new",	//document.getElementById("").value; //(new|aged|average)
			height:0,		//document.getElementById("").value; //altura del techo [m] // ACLARACIÓN: Si el usuario no tiene el valor de la altura del techo, en esta variable se debe ingresar cero.
			slope:"",		//document.getElementById("").value; //pendiente del techo (si es cónico) [m/m]
			radius:5,		//document.getElementById("").value; //radio del techo (si es en forma de domo) [m] // ACLARACIÓN: Si el usuario no tiene el valor del radio del techo, en esta variable se debe ingresar el mismo valor que se haya ingresado para el diámetro del tanque (así lo recomienda el AP-42).
		},
		ventPressureSetting:0.03,	//document.getElementById("").value; //presión a la cual están seteadas las válvulas de ventilación [psig]
		ventVacuumSetting:-0.03,	//document.getElementById("").value; //presión de vacío de las válvulas de ventilación [psig]
		gaugePressure:"",			//document.getElementById("").value; //presión manométrica en la fase vapor en condiciones de operación normales [psig] // ACLARACIÓN: sólo se debe ingresar si la ventPressureRange ingresada es mayor que 0,06. Si el tanque está a temperatura atmosférica, debe ingresarse cero.
		insulation:"shellAndRoof",	//document.getElementById("").value; //none, shell, shellAndRoof, underground
		heating:{
			heating: true,		//document.getElementById("").value; //considerar calentamiento?
			cyclesPerYear:"365",	//document.getElementById("").value; //numero de ciclos de calentamiento
			minBulkTemp:"460",	//document.getElementById("").value; //temperatura minima del liquido [grados Kelvin]
			maxBulkTemp:"480",	//document.getElementById("").value; //temperatura maxima del liquido [grados Kelvin]
		},
	};

	return t;
};

function calculateSolarAbsorbance(t){
	
	console.log("   Calculando absorbancia del tanque.. ");

	paint=getPaintProperties();	//levanto db de archivo: ./tablas/paint.js

	if (t.type == "HFR"){
		
		aShell=eval("paint.find( element => element.paintName==\""+t.shell.color+"\")."+t.shell.condition);
		a=aShell;
	}
	else{
		aShell=eval("paint.find( element => element.paintName==\""+t.shell.color+"\")."+t.shell.condition);
		aRoof=eval("paint.find( element => element.paintName==\""+t.roof.color+"\")."+t.roof.condition);
		
		a=(aShell+aRoof)*0.5;	//promedio de absorb entre shell y roof.
	};

	return a; 
};
