//Table 7.1-2: Base de datos de líquidos de petróleo
function getLiquidData() {
	//declare liquid objects
	var liquid1 = {	
		liquidName:"Midcontinent Crude Oil",			              
        liqMolWeight:207,                         	//M_L:"Molecular weight of liquid, lb/lb-mole"
        vapMolWeight:50,                         	//M_V:"Molecular weight of the vapor, lb/lb-mole"
		liqDensity:7.1,								//W_L:"Average liquid density, lb/gal"
		vaporPressure:"",							//P_VA: "True Vapor Pressure at 60°F, psia"
		A:"Figure 7.1-16",							//A:"Constant in vapor pressure equation, dimensionless" // ACLARACIÓN: Las unidades de temperatura y presión asociadas a los valores de estas constantes (A y B) tienen que ser °R y psia respectivamente.
		B:"Figure 7.1-16",							//B:"Constant in vapor pressure equation, °R" // ACLARACIÓN: Las unidades de temperatura y presión asociadas a los valores de estas constantes (A y B) tienen que ser °R y psia respectivamente.
		slope:"",									//S:"Pendiente de la curva de destilación ASTM-D86 del combustible a un nivel de evaporación del 10%, °F/%evaporado"
		reidVaporPressure:5,                       	//RVP:"Presión de vapor de Reid del combustible, psi"     
		};
	
	var liquid3 = {liquidName:"Motor Gasoline RVP 13", vapMolWeight:62, liqMolWeight:92, liqDensity:5.6, slope:3, A:11.644, B:5043.6, vaporPressure:7, reidVaporPressure:13};
	var liquid4 = {liquidName:"Motor Gasoline RVP 10", vapMolWeight:66, liqMolWeight:92, liqDensity:5.6, slope:3, A:11.724, B:5237.3, vaporPressure:5.2, reidVaporPressure:10};
	var liquid5 = {liquidName:"Motor Gasoline RVP 7", vapMolWeight:68, liqMolWeight:92, liqDensity:5.6, slope:3, A:11.833, B:5500.6, vaporPressure:3.5, reidVaporPressure:7};
	var liquid9 = {liquidName:"Jet Naphtha (JP-4)", vapMolWeight:80, liqMolWeight:120, liqDensity:6.4, slope:"", A:11.368, B:5784.3, vaporPressure:1.3, reidVaporPressure:""};
	var liquid10 = {liquidName:"Jet Kerosene (Jet A)", vapMolWeight:130, liqMolWeight:162, liqDensity:7, slope:"", A:12.39, B:8933, vaporPressure:0.008, reidVaporPressure:""};
	var liquid11 = {liquidName:"No. 2 Fuel Oil (Diesel)", vapMolWeight:130, liqMolWeight:188, liqDensity:7.1, slope:"", A:12.101, B:8907, vaporPressure:0.006, reidVaporPressure:""};
	var liquid12= {liquidName:"No. 6 Fuel Oil", vapMolWeight:130, liqMolWeight:387, liqDensity:7.9, slope:"", A:10.781, B:8933, vaporPressure:0.002, reidVaporPressure:""};
	var liquid13 = {liquidName:"Vacuum Residual Oil", vapMolWeight:190, liqMolWeight:387, liqDensity:7.9, slope:"", A:10.104, B:10475.5, vaporPressure:0.00004, reidVaporPressure:""};
	
	//put liquid objects into array
	var arrayOfLiquids = [liquid1, liquid3, liquid4, liquid5, liquid9, liquid10, liquid11, liquid12, liquid13];
	
	return arrayOfLiquids;
}

