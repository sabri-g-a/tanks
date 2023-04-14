//Table 7.1-2: Base de datos de líquidos de petróleo

//Refinados
function getRefinedOilsData() {
	//declare liquid objects
	var liquid1 = {liquidName:"Nafta TVR 13", vapMolWeight:62, liqMolWeight:92, liqDensity:5.6, slope:3, A:11.644, B:5043.6, vaporPressure:7, reidVaporPressure:13};
	var liquid2 = {liquidName:"Nafta TVR 10", vapMolWeight:66, liqMolWeight:92, liqDensity:5.6, slope:3, A:11.724, B:5237.3, vaporPressure:5.2, reidVaporPressure:10};
	var liquid3 = {liquidName:"Nafta TVR 7", vapMolWeight:68, liqMolWeight:92, liqDensity:5.6, slope:3, A:11.833, B:5500.6, vaporPressure:3.5, reidVaporPressure:7};
	var liquid4 = {liquidName:"JP-4 (Combustible de aviación USA)", vapMolWeight:80, liqMolWeight:120, liqDensity:6.4, slope:"", A:11.368, B:5784.3, vaporPressure:1.3, reidVaporPressure:""};
	var liquid5 = {liquidName:"Jet A-1/JP1 (Combustible de aviación)", vapMolWeight:130, liqMolWeight:162, liqDensity:7, slope:"", A:12.39, B:8933, vaporPressure:0.008, reidVaporPressure:""};
	var liquid6 = {liquidName:"AvGas 100LL (Combustible de aviación)", vapMolWeight:66.25, liqMolWeight:103.68, liqDensity:5.89, slope:2, A:"", B:"", vaporPressure:"", reidVaporPressure:6};
	var liquid7 = {liquidName:"Gas Oil/Diesel Oil", vapMolWeight:130, liqMolWeight:188, liqDensity:7.1, slope:"", A:12.101, B:8907, vaporPressure:0.006, reidVaporPressure:""};
	var liquid8 = {liquidName:"ULSD (Ultra Low Sulfur Diesel)", vapMolWeight:130, liqMolWeight:188, liqDensity:7.1, slope:"", A:12.101, B:8907, vaporPressure:0.006, reidVaporPressure:""};
	var liquid9 = {liquidName:"Fuel Oil No. 2", vapMolWeight:130, liqMolWeight:188, liqDensity:7.1, slope:"", A:12.101, B:8907, vaporPressure:0.006, reidVaporPressure:""};
	var liquid10 = {liquidName:"Fuel Oil No. 6", vapMolWeight:130, liqMolWeight:387, liqDensity:7.9, slope:"", A:10.781, B:8933, vaporPressure:0.002, reidVaporPressure:""};
	var liquid11 = {liquidName:"Asfalto (Residuo o fondo de vacío)", vapMolWeight:190, liqMolWeight:387, liqDensity:7.9, slope:"", A:10.104, B:10475.5, vaporPressure:0.00004, reidVaporPressure:""};
	var liquid12 = {liquidName:"Slurry (Corriente de fondo del fraccionador de la unidad de craqueo catalítico)", vapMolWeight:130, liqMolWeight:188, liqDensity:7.1, slope:"", A:12.101, B:8907, vaporPressure:0.006, reidVaporPressure:""};
	
	//put liquid objects into array
	var arrayOfLiquids = [liquid1, liquid2, liquid3, liquid4, liquid5, liquid6, liquid7, liquid8, liquid9, liquid10, liquid11, liquid12];
	
	return arrayOfLiquids;
};

//Crudos
function getCrudeOilsData() {
	//declare liquid objects
	var liquid1 = {	
		liquidName:"Midcontinent Crude Oil",			              
        liqMolWeight:207,                         	//M_L:"Molecular weight of liquid, lb/lb-mole"
        vapMolWeight:50,                         	//M_V:"Molecular weight of the vapor, lb/lb-mole"
		liqDensity:7.1,								//W_L:"Average liquid density, lb/gal"
		vaporPressure:"",							//P_VA: "True Vapor Pressure at 60°F, psia" // ACLARACIÓN: Es un valor de referencia, NO se usa en los cálculos
		A:"Figure 7.1-16",							//A:"Constant in vapor pressure equation, dimensionless" // ACLARACIÓN: Las unidades de temperatura y presión asociadas a los valores de estas constantes (A y B) tienen que ser °R y psia respectivamente.
		B:"Figure 7.1-16",							//B:"Constant in vapor pressure equation, °R" // ACLARACIÓN: Las unidades de temperatura y presión asociadas a los valores de estas constantes (A y B) tienen que ser °R y psia respectivamente.
		slope:"",									//S:"Pendiente de la curva de destilación ASTM-D86 del combustible a un nivel de evaporación del 10%, °F/%evaporado"
		reidVaporPressure:5                       	//TVR:"Presión de vapor de Reid del combustible, psi"     
		};
	var liquid2 = {liquidName:"Crudo Medanito", liqMolWeight:255, vapMolWeight:100, liqDensity:7.0894173, vaporPressure:"", A:"Figure 7.1-16", B:"Figure 7.1-16", slope:"", reidVaporPressure:3.046};
	var liquid3 = {liquidName:"Crudo Escalante", liqMolWeight:389, vapMolWeight:150, liqDensity:7.58847222, vaporPressure:"", A:"Figure 7.1-16", B:"Figure 7.1-16", slope:"", reidVaporPressure:1.45};
	var liquid4 = {liquidName:"Crudo Cañadón Seco", liqMolWeight:367, vapMolWeight:102.5, liqDensity:7.47914748, vaporPressure:"", A:"Figure 7.1-16", B:"Figure 7.1-16", slope:"", reidVaporPressure:1.45};
	var liquid5 = {liquidName:"Crudo Rincón Los Sauces", liqMolWeight:269, vapMolWeight:100, liqDensity:7.04184852, vaporPressure:"", A:"Figure 7.1-16", B:"Figure 7.1-16", slope:"", reidVaporPressure:3.1};
	var liquid6 = {liquidName:"Crudo Tierra del Fuego", liqMolWeight:210, vapMolWeight:100, liqDensity:6.775, vaporPressure:"", A:"Figure 7.1-16", B:"Figure 7.1-16", slope:"", reidVaporPressure:5.6};


	//put liquid objects into array
	var arrayOfLiquids = [liquid1, liquid2, liquid3, liquid4, liquid5, liquid6];
	
	return arrayOfLiquids;
};

function appendRefinedOils() {
	db=getRefinedOilsData();
	var select = document.getElementById("tankContents");
	for(var i = 0; i < db.length; i++) {
        var option = document.createElement("option"),
            txt = document.createTextNode(db[i].liquidName);
        option.appendChild(txt);
        select.appendChild(option);
    };
};

function appendCrudeOils() {
	db=getCrudeOilsData();
	var select = document.getElementById("tankContents");
	for(var i = 0; i < db.length; i++) {
        var option = document.createElement("option"),
            txt = document.createTextNode(db[i].liquidName);
        option.appendChild(txt);
        select.appendChild(option);
    };
};
