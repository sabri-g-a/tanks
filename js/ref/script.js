// set up collapsible instructions
var coll = document.getElementsByClassName("collapsible");
var counter1;

for (counter1 = 0; counter1 < coll.length; counter1++) {
	coll[counter1].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
};
			
//Load Page
var aryVarVals = {a:"", a_R:"", a_S:"", A:"", A_deck:"", A_fi:"", B:"", C:"", C_S:"", C_sf:"", C_V:"", D:"", D_E:"", d_s:"", F_C:"", F_E:"", F_F:"", h_d:"", H_L:"", h_le:"", H_LN:"", H_LX:"", sumH_QD:"", sumH_QI:"", H_R:"", H_RO:"", H_S:"", h_v:"", H_VO:"", I:"", K_C:"", K_D:"", K_E:"", K_Fai:"", K_Fbi:"", K_Fi:"", K_N:"", K_P:"", K_Ra:"", K_Rb:"", K_S:"", K_v:"", L:"", L_C:"", L_CV:"", L_D:"", L_F:"", L_FV:"", L_FL:"", L_P:"", L_R:"", L_RL:"", L_S:"", L_seam:"", L_SL:"", L_T:"", L_Ti:"", L_TL:"", L_V:"", L_W:"", M_CG:"", m_i:"", M_i:"", M_L:"", M_V:"", N:"", n:"", n_d:"", N_2:"", N_C:"", n_CV:"", N_d:"", n_f:"", N_Fai:"", N_Fbi:"", N_Fi:"", N_l:"", N_TOTAL:"", N_vb:"", P:"", P_star:"", P_A:"", deltaP_B:"", P_BP:"", P_BV:"", P_I:"", P_i:"", deltaP_V:"", P_VA:"", P_VN:"", P_VX:"", Q:"", Q_V:"", R:"R", R_R:"", R_S:"", S:"", s:"", S_D:"", S_R:"", deltaT_A:"", T_AA:"", T_AN:"", T_AX:"", T_B:"", T_BN:"", T_BX:"", T_LA:"", T_V:"", t_v:"", deltaT_V:"", v:"", V_1:"", V_2:"", V_Q:"", V_LX:"", V_V:"", W_i:"", W_L:"", W_V:"", x_i:"", y_i:"", Z_Li:"", Z_Vi:""};

var aryVarNames1 = {a:"	&alpha;", a_R:"a_R", a_S:"a_S", A:"A", A_deck:"A_deck", A_fi:"A_fi", B:"B", C:"C", C_S:"C_S", C_sf:"C_sf", C_V:"C_V", D:"D", D_E:"D_E", d_s:"d_s", F_C:"F_C", F_E:"F_E", F_F:"F_F", h_d:"h_d", H_L:"H_L", h_le:"h_le", H_LN:"H_LN", H_LX:"H_LX", sumH_QD:"sumH_QD", sumH_QI:"sumH_QI", H_R:"H_R", H_RO:"H_RO", H_S:"H_S", h_v:"h_v", H_VO:"H_VO", I:"I", K_C:"K_C", K_D:"K_D", K_E:"K_E", K_Fai:"K_Fai", K_Fbi:"K_Fbi", K_Fi:"K_Fi", K_N:"K_N", K_P:"K_P", K_Ra:"K_Ra", K_Rb:"K_Rb", K_S:"K_S", K_v:"K_v", L:"L", L_C:"L_C", L_CV:"L_CV", L_D:"L_D", L_F:"L_F", L_FV:"L_FV", L_FL:"L_FL", L_P:"L_P", L_R:"L_R", L_RL:"L_RL", L_S:"L_S", L_seam:"L_seam", L_SL:"L_SL", L_T:"L_T", L_Ti:"L_Ti", L_TL:"L_TL", L_V:"L_V", L_W:"L_W", M_CG:"M_CG", m_i:"m_i", M_i:"M_i", M_L:"M_L", M_V:"M_V", N:"N", n:"n", n_d:"n_d", N_2:"N_2", N_C:"N_C", n_CV:"n_CV", N_d:"N_d", n_f:"n_f", N_Fai:"N_Fai", N_Fbi:"N_Fbi", N_Fi:"N_Fi", N_l:"N_l", N_TOTAL:"N_TOTAL", N_vb:"N_vb", P:"P", P_star:"P_star", P_A:"P_A", deltaP_B:"deltaP_B", P_BP:"P_BP", P_BV:"P_BV", P_I:"P_I", P_i:"P_i", deltaP_V:"deltaP_V", P_VA:"P_VA", P_VN:"P_VN", P_VX:"P_VX", Q:"Q", Q_V:"Q_V", R:"R", R_R:"R_R", R_S:"R_S", S:"S", s:"s", S_D:"S_D", S_R:"S_R", deltaT_A:"deltaT_A", T_AA:"T_AA", T_AN:"T_AN", T_AX:"T_AX", T_B:"T_B", T_BN:"T_BN", T_BX:"T_BX", T_LA:"T_LA", T_V:"T_V", t_v:"t_v", deltaT_V:"deltaT_V", v:"v", V_1:"V_1", V_2:"V_2", V_Q:"V_Q", V_LX:"V_LX", V_V:"V_V", W_i:"W_i", W_L:"W_L", W_V:"W_V", x_i:"x_i", y_i:"y_i", Z_Li:"Z_Li", Z_Vi:"Z_Vi"};

var aryVarNames2 = {a:"&alpha;",  a_R:"&alpha;<sub>R</sub>",  a_S:"&alpha;<sub>S</sub>",  A:"A",  A_deck:"A<sub>deck</sub>",  A_fi:"A<sub>fi</sub>",  B:"B",  C:"C",  C_S:"C<sub>S</sub>",  C_sf:"C<sub>sf</sub>",  C_V:"C<sub>V</sub>",  D:"D",  D_E:"D<sub>E</sub>",  d_s:"d<sub>s</sub>",  F_C:"F<sub>C</sub>",  F_E:"F<sub>E</sub>",  F_F:"F<sub>F</sub>",  h_d:"h<sub>d</sub>",  H_L:"H<sub>L</sub>",  h_le:"h<sub>le</sub>",  H_LN:"H<sub>LN</sub>",  H_LX:"H<sub>LX</sub>",  sumH_QD:"sumH<sub>QD</sub>",  sumH_QI:"sumH<sub>QI</sub>",  H_R:"H<sub>R</sub>",  H_RO:"H<sub>RO</sub>",  H_S:"H<sub>S</sub>",  h_v:"h<sub>v</sub>",  H_VO:"H<sub>VO</sub>",  I:"I",  K_C:"K<sub>C</sub>",  K_D:"K<sub>D</sub>",  K_E:"K<sub>E</sub>",  K_Fai:"K<sub>Fai</sub>",  K_Fbi:"K<sub>Fbi</sub>",  K_Fi:"K<sub>Fi</sub>",  K_N:"K<sub>N</sub>",  K_P:"K<sub>P</sub>",  K_Ra:"K<sub>Ra</sub>",  K_Rb:"K<sub>Rb</sub>",  K_S:"K<sub>S</sub>",  K_v:"K<sub>v</sub>",  L:"L",  L_C:"L<sub>C</sub>",  L_CV:"L<sub>CV</sub>",  L_D:"L<sub>D</sub>",  L_F:"L<sub>F</sub>",  L_FV:"L<sub>FV</sub>",  L_FL:"L<sub>FL</sub>",  L_P:"L<sub>P</sub>",  L_R:"L<sub>R</sub>",  L_RL:"L<sub>RL</sub>",  L_S:"L<sub>S</sub>",  L_seam:"L<sub>seam</sub>",  L_SL:"L<sub>SL</sub>",  L_T:"L<sub>T</sub>",  L_Ti:"L<sub>Ti</sub>",  L_TL:"L<sub>TL</sub>",  L_V:"L<sub>V</sub>",  L_W:"L<sub>W</sub>",  M_CG:"M<sub>CG</sub>",  m_i:"m<sub>i</sub>",  M_i:"M<sub>i</sub>",  M_L:"M<sub>L</sub>",  M_V:"M<sub>V</sub>",  N:"N",  n:"n",  n_d:"n<sub>d</sub>",  N_2:"N<sub>2</sub>",  N_C:"N<sub>C</sub>",  n_CV:"n<sub>CV</sub>",  N_d:"N<sub>d</sub>",  n_f:"n<sub>f</sub>",  N_Fai:"N<sub>Fai</sub>",  N_Fbi:"N<sub>Fbi</sub>",  N_Fi:"N<sub>Fi</sub>",  N_l:"N<sub>l</sub>",  N_TOTAL:"N<sub>TOTAL</sub>",  N_vb:"N<sub>vb</sub>",  P:"P",  P_star:"P<sub>star</sub>",  P_A:"P<sub>A</sub>",  deltaP_B:"&Delta;P<sub>B</sub>",  P_BP:"P<sub>BP</sub>",  P_BV:"P<sub>BV</sub>",  P_I:"P<sub>I</sub>",  P_i:"P<sub>i</sub>",  deltaP_V:"&Delta;P<sub>V</sub>",  P_VA:"P<sub>VA</sub>",  P_VN:"P<sub>VN</sub>",  P_VX:"P<sub>VX</sub>",  Q:"Q",  Q_V:"Q<sub>V</sub>",  R:"R", R_R:"R<sub>R</sub>",  R_S:"R<sub>S</sub>",  S:"S",  s:"s",  S_D:"S<sub>D</sub>",  S_R:"S<sub>R</sub>",  deltaT_A:"&Delta;T<sub>A</sub>",  T_AA:"T<sub>AA</sub>",  T_AN:"T<sub>AN</sub>",  T_AX:"T<sub>AX</sub>",  T_B:"T<sub>B</sub>",  T_BN:"T<sub>BN</sub>",  T_BX:"T<sub>BX</sub>",  T_LA:"T<sub>LA</sub>",  T_V:"T<sub>V</sub>",  t_v:"t<sub>v</sub>",  deltaT_V:"&Delta;T<sub>V</sub>",  v:"v",  V_1:"V<sub>1</sub>",  V_2:"V<sub>2</sub>",  V_Q:"V<sub>Q</sub>",  V_LX:"V<sub>LX</sub>",  V_V:"V<sub>V</sub>",  W_i:"W<sub>i</sub>",  W_L:"W<sub>L</sub>",  W_V:"W<sub>V</sub>",  x_i:"x<sub>i</sub>",  y_i:"y<sub>i</sub>",  Z_Li:"Z<sub>Li</sub>",  Z_Vi:"Z<sub>Vi</sub>"}

var aryVarDesc = {a:"Tank surface solar absorptance, dimensionless", a_R:"Tank roof surface solar absorptance, dimensionless", a_S:"Tank shell surface solar absorptance, dimensionless", A:"Constant in vapor pressure equation, dimensionless", A_deck:"Area of deck, ft2", A_fi:"Liquid surface area within a particular type of deck fitting, in2", B:"Constant in vapor pressure equation, °R or °C", C:"Constant in vapor pressure equation, °R or °C", C_S:"Shell clingage factor, bbl/1,000 ft2", C_sf:"Filling saturation correction factor for wind, dimensionless", C_V:"Average vapor concentration by volume during continued forced ventilation, dimensionless", D:"Tank diameter, ft", D_E:"Effective tank diameter, ft", d_s:"Average depth of sludge, in.", F_C:"Effective column diameter, ft", F_E:"Fraction of sludge with potential to evaporate, dimensionless", F_F:"Total deck fitting loss factor, lb-mole/yr", h_d:"Deck leg height at the tank shell, ft", H_L:"Liquidd height, ft", h_le:"Effective liquid height during roof landing, ft", H_LN:"Minimum liquid height, ft", H_LX:"Maximum liquid height, ft", sumH_QD:"Annual sum of the decreases in liquid level, ft/yr", sumH_QI:"Aannual sum of the increases in liquid level, ft/yr", H_R:"Tank roof height, ft", H_RO:"Roof outage, ft", H_S:"Tank shell height, ft", h_v:"Vapor space height under landed floating roof, ft", H_VO:"Vapor space outage, ft", I:"Average daily total insolation factor, Btu/ft<sup>2</sup>•d", K_C:"Product factor for floating roof tanks, dimensionless", K_D:"Deck seam loss per unit seam length factor, lb-mole/ft-yr", K_E:"Vapor space expansion factor, per day", K_Fai:"Zero wind speed loss factor for a particular type of deck fitting, lb-mole/yr", K_Fbi:"Wind speed dependent loss factor for a particular type of deck fitting, lb-mole/(mph)myr", K_Fi:"Loss factor for a particular type of deck fitting, lb-mole/yr", K_N:"Turnover factor, dimensionless", K_P:"Working loss product factor for fixed roof tanks, dimensionless", K_Ra:"Zero wind speed rim seal loss factor, lb-mole/ft•yr", K_Rb:"Wind speed dependent rim seal loss factor, lb-mole/ (mph)nft•yr", K_S:"Vented vapor saturation factor, dimensionless", K_v:"Fitting wind speed correction factor, dimensionless", L:"Length of tank, ft", L_C:"Clingage factor for drain dry tanks, lb", L_CV:"Continued forced ventilation emissions, lb/cleaning event", L_D:"Deck seam loss, lb/yr", L_F:"Deck fitting loss, lb/yr", L_FV:"Total tank cleaning emissions due to forced ventilation, lb/cleaning event", L_FL:"Filling loss during roof landing, lb/landing event", L_P:"Vapor space purge emissions due to first air change from forced ventilation, lb/cleaning event", L_R:"Rim seal loss, lb/yr", L_RL:"Rim seal loss during roof landing, lb/landing event", L_S:"Standing losses, lb/yr", L_seam:"Total length of deck seam, ft", L_SL:"Standing loss during roof landing, lb/landing event", L_T:"Total routine losses, lb/yr", L_Ti:"Emission rate of component i, lb/yr", L_TL:"Total loss during roof landing, lb/landing event", L_V:"Variable vapor space filling loss, lb/1,000 gal throughput", L_W:"Working losses, lb/yr", M_CG:"Molecular weight of calibration gas, lb/lb-mole", m_i:"Loss factor for a particular type of deck fitting, dimensionless", M_i:"Molecular weight of component i, lb/lb-mole", M_L:"Molecular weight of liquid mixture, lb/lb-mole", M_V:"Vapor molecular weight, lb/lb-mole", N:"Number of turnovers per year, dimensionless", n:"Seal-related wind speed exponent, dimensionless", n_d:"Number of days standing idle during roof landing or prior to forced ventilation, days", N_2:"Number of transfers into system, dimensionless", N_C:"Number of columns, dimensionless", n_CV:"Duration of continued forced ventilation, days", N_d:"Number of drains", n_f:"Total number of different types of fittings, dimensionless", N_Fai:"Zero wind speed loss factor for a particular type of deck fitting, lb-mole/yr", N_Fbi:"Wind speed dependent loss factor for a particular type of fitting, lb-mole/mphm•yr", N_Fi:"Number of deck fittings of a particular type, dimensionless", N_l:"Number of deck legs", N_TOTAL:"Total number of moles in mixture, lb-mole", N_vb:"Number of vacuum breakers", P:"True vapor pressure of component i, psia", P_star:"Vapor pressure function, dimensionless", P_A:"Atmospheric pressure, psi", deltaP_B:"Breather vent pressure setting range, psig", P_BP:"Breather vent pressure setting, psig", P_BV:"Breather vent vacuum setting, psig", P_I:"Gauge pressure within the vapor space, psig", P_i:"Partial pressure of component i, psia", deltaP_V:"Average daily vapor pressure range, psi", P_VA:"Vapor pressure at average daily liquid surface temperature, psia", P_VN:"Vapor pressure at the average daily minimum liquid surface temperature, psia", P_VX:"Vapor pressure at the average daily maximum liquid surface temperature, psia", Q:"Annual net throughput, bbl/yr", Q_V:"Average ventilation rate during tank cleaning, ft3/min", R:"Ideal gas constant, psia•ft<sup>3</sup>/lb-mole•&deg;R", R_R:"Tank dome roof radius, ft", R_S:"Tank shell radius, ft", S:"Filling saturation factor, dimensionless", s:"Tank cone bottom slope, ft/ft", S_D:"Deck seam length factor, ft/ft2", S_R:"Tank cone roof slope, ft/ft", deltaT_A:"Average daily ambient temperature range, °R", T_AA:"Average daily ambient temperature, °R", T_AN:"Average daily minimum ambient temperature, °R", T_AX:"Average daily maximum ambient temperature, °R", T_B:"Liquid bulk temperature, °R", T_BN:"Typical minimum liquid bulk temperature in heating cycles, °R", T_BX:"Typical maximum liquid bulk temperature in heating cycles, °R", T_LA:"Average daily liquid surface temperature, °R", T_V:"Average vapor temperature, °R", t_v:"Daily period of forced ventilation during tank cleaning, hr/day", deltaT_V:"Average daily vapor temperature range, °R", v:"Average wind speed, mph", V_1:"Volume of liquid pumped into system, bbl/yr", V_2:"Volume expansion capacity, bbl", V_Q:"Net working loss throughput, ft<sup>3</sup>/yr", V_LX:"Tank maximum liquid volume, ft<sup>3</sup>", V_V:"Vapor space volume, ft<sup>3</sup>", W_i:"Liquid density of component i, lb/ft<sup>3</sup>", W_L:"Average organic liquid density, lb/gal", W_V:"Vapor density, lb/ft<sup>3</sup>", x_i:"Liquid mole fraction of component i, lb-mole/lbmole", y_i:"Vapor mole fraction of component i, lb-mole/lbmole", Z_Li:"Liquid weight fraction of component i, lb/lb", Z_Vi:"Vapor weight fraction of component i, lb/lb"};
var validate = 0;			

appendMetData();
fillPaintProperties("paintShell");
fillPaintProperties("paintRoof");
LoadPage();
			
//Load Page Elements===================================

function confirm_reset() {
	return confirm("The 'Reset' button was clicked.  Click OK to reset all entries.");				
}

function LoadPage() {
	
	document.getElementById("Form1").reset();
	document.getElementById("Next1").style.display = "block";
	document.getElementById("Input2").style.display = "none";
	document.getElementById("metCharData").style.display = "none";
	
	document.getElementById("Input3").style.display = "none";
	document.getElementById("divLiqType").style.display = "none";
	document.getElementById("divtankContents").style.display = "none";
	document.getElementById("divCalcMethod").style.display = "none";
	document.getElementById("divLiqChar").style.display = "none";
	document.getElementById("divLiqInputs").style.display = "none";				
	
	document.getElementById("Input4").style.display = "none";
	document.getElementById("Input5").style.display = "none";
	document.getElementById("Input6").style.display = "none";
	document.getElementById("Input7").style.display = "none";
	document.getElementById("Input8").style.display = "none";
	document.getElementById("flex-input2").style.display = "none";
	document.getElementById("flex-input3").style.display = "none";
	document.getElementById("flex-input4").style.display = "none";
	//document.getElementById("outputTitle").style.display = "none";
	//document.getElementById("flex-output1").style.display = "none";
	
	//reset aryVarVals
	resetAryVarVals();

	//reset color of cells
	var aryInputs = ["tankType","metSite","LiqInput","LiqType","tankContents","calcMethod","inputM_V","inputSlope","inputRVP","inputA","inputB","inputC","HeightFixed","lengthFixed","diamFixed","maxLiqH","minLiqH","avgLiqH","turn","throughput","balanced","paintShell","conditionShell","paintRoof","conditionRoof","roofType","roofH","fixedRoofSlope","fixedRoofRad","setVac","setPres","gaugePres","insulated","heat","heatCycles","minBulkTemp","maxBulkTemp","calcBasis","outputType"];
	var i;
	var select1;
	var x;
	
	for (i = 0; i < aryInputs.length; i++) {
		select1 = eval("document.getElementById('" + aryInputs[i] + "')");
		x = select1.value;					
		select1.style.backgroundColor = "White";
		if (select1.type === "select-one") {
			select1.selectedIndex = "0";
		}
	}
	
	//debug();
}

function resetAryVarVals() {
	Object.keys(aryVarVals).forEach(function(key){ aryVarVals[key] = "" });
}

function debug() {
	var x = 6;
	//may convert later to file read function
	//SET initial DEFAULT VALUES FOR DEBUGGING
	document.getElementById("tankType").value = "VFR";
	//confirmTankType();
	Next1();
	document.getElementById("metSite").value = "Oklahoma City, OK";
	fillMetChar();
	Next2();
	
	switch (x) {
		case 1:
			//using Manual Entry Liquid>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			//for Crude Oil
			document.getElementById("LiqInput").value = "Manual";
			SelectLiquidInput();
			document.getElementById("LiqType").value = "Crude";
			loadLiquidList();
			document.getElementById("calcMethod").value = "RVP";
			formatLiqInput();
			document.getElementById("inputM_V").value = 50;				
			document.getElementById("inputRVP").value = 5;
			break;
		case 2:
			//using Manual Entry Liquid>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			//for Gasoline RVP 10
			document.getElementById("LiqInput").value = "Manual";
			SelectLiquidInput();
			document.getElementById("LiqType").value = "Refined";
			loadLiquidList();
			document.getElementById("calcMethod").value = "Coef";
			formatLiqInput();
			document.getElementById("inputM_V").value = 66;	
			document.getElementById("inputSlope").value = 3.0;	
			document.getElementById("inputA").value = 11.724;				
			document.getElementById("inputB").value = 5237.3;
			break;
		case 3:
			//using Manual Entry Liquid>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			//for Benzene
			document.getElementById("LiqInput").value = "Manual";
			SelectLiquidInput();
			document.getElementById("LiqType").value = "PetroChem";
			loadLiquidList();
			formatLiqInput();
			document.getElementById("inputM_V").value = 78.11;	
			document.getElementById("inputA").value = 6.906;				
			document.getElementById("inputB").value = 1211.0;
			document.getElementById("inputC").value = 220.79;
			break;
		case 4:
			//using Database>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			//RVP 5
			document.getElementById("LiqInput").value = "Database";
			SelectLiquidInput();
			document.getElementById("LiqType").value = "Crude";
			loadLiquidList();
			document.getElementById("tankContents").value = "Midcontinent Crude Oil";
			fillLiqChar();
			break;
		case 5:
			//using Database>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			//diesel
			document.getElementById("LiqInput").value = "Database";
			SelectLiquidInput();
			document.getElementById("LiqType").value = "Refined";
			loadLiquidList();
			document.getElementById("tankContents").value = "No. 2 Fuel Oil (Diesel)";
			fillLiqChar();
			break;
		case 6:
			//using Database>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			//diesel
			document.getElementById("LiqInput").value = "Database";
			SelectLiquidInput();
			document.getElementById("LiqType").value = "Refined";
			loadLiquidList();
			document.getElementById("tankContents").value = "Motor Gasoline RVP 10";
			fillLiqChar();
			break;
	}
	Next3();
	document.getElementById("HeightFixed").value = 20;
	document.getElementById("diamFixed").value = 12;
	document.getElementById("maxLiqH").value = 19;
	document.getElementById("minLiqH").value = 1;
	document.getElementById("avgLiqH").value = 10;
	minTurnQ()
	document.getElementById("throughput").value = 3600000;
	calcTurn();
	document.getElementById("balanced").value = "No";
	Next4();
	//document.getElementById("minBulkTemp").value = 430;
	document.getElementById("paintShell").value = "White";
	document.getElementById("conditionShell").value = "New";
	document.getElementById("paintRoof").value = "White";
	document.getElementById("conditionRoof").value = "New";
	document.getElementById("roofType").value = "Cone";
	fixedRoofType();
	document.getElementById("roofH").value = 0;				
	fixedRoofHeight();
	//document.getElementById("fixedRoofSlope").value = 0.0625;
	//document.getElementById("fixedRoofRad").value = 6;				
	Next5();
	//document.getElementById("setVac").value = -0.03;
	//document.getElementById("setPres").value = 0.03;
	checkPres();
	document.getElementById("insulated").value = "None";
	//document.getElementById("heat").value = "No";
	//Next6();
	//Next7();
	//document.getElementById("calcBasis").value = "Annual";
	//document.getElementById("outputType").value = "Detailed";
	//calcSelect();
	//beginCalcs();
}

//next buttons==================================================================================

function Next1() {
	var tank = document.getElementById("tankType").value;
	var validate;
	
	validate = ValidateInput1();
	
	if (validate == 0) {
		if (tank == "VFR") {
			document.getElementById("Input2").style.display = "block";
			document.getElementById("Next1").style.display = "none";
			document.getElementById("Next2").style.display = "block";
		} else if (tank == "HFR") {
			document.getElementById("Input2").style.display = "block";
			document.getElementById("Next1").style.display = "none";
			document.getElementById("Next2").style.display = "block";
		} else if (tank == "EFR") {
			document.getElementById("Form1").reset();
			document.getElementById("flex-input2").style.display = "none";
			//document.getElementById("flex-input3").style.display = "flex";
			document.getElementById("flex-input4").style.display = "none";
			//document.getElementById("tankType").value = tank;
			alert("Floating roof calculations are not currently functional.")
			document.getElementById("tankType").selectedIndex = "0";
		} else if (tank == "IFR") {
			document.getElementById("Form1").reset();
			document.getElementById("flex-input2").style.display = "none";
			//document.getElementById("flex-input3").style.display = "flex";
			document.getElementById("flex-input4").style.display = "none";
			//document.getElementById("tankType").value = tank;
			alert("Floating roof calculations are not currently functional.")
			document.getElementById("tankType").selectedIndex = "0";
		}
	} else {
		validateErrorMsg(validate); 
	}				
}

function Next2() {			
	var validate;
	
	validate = ValidateInput2();
	
	if (validate == 0) {
		document.getElementById("Input3").style.display = "block";
		document.getElementById("Next2").style.display = "none";
		document.getElementById("Next3").style.display = "block";
	} else {
		validateErrorMsg(validate); 
	}
}


//next buttons - fixed roof tanks================================================================
function Next3() {
	var tank = document.getElementById("tankType").value;
	var validate;
	
	validate = ValidateInput3();
	
	if (validate == 0) {
		if (tank == "VFR") {
			document.getElementById("flex-input2").style.display = "flex";
			document.getElementById("flex-input3").style.display = "none";
			document.getElementById("Input4").style.display = "block";
			document.getElementById("heightVFR").style.display = "block";
			document.getElementById("lengthHFR").style.display = "none";
			document.getElementById("divMaxLiqH").style.display = "block";
			document.getElementById("divMinLiqH").style.display = "block";
			document.getElementById("divAvgLiqH").style.display = "block";
		} else if (tank == "HFR") {
			document.getElementById("flex-input2").style.display = "flex";
			document.getElementById("flex-input3").style.display = "none";
			document.getElementById("Input4").style.display = "block";
			document.getElementById("heightVFR").style.display = "none";
			document.getElementById("lengthHFR").style.display = "block";
			document.getElementById("divMaxLiqH").style.display = "block";
			document.getElementById("divMinLiqH").style.display = "block";
			document.getElementById("divAvgLiqH").style.display = "none";
		} else if (tank == "EFR") {
			
		} else if (tank == "IFR") {
			
		}
		document.getElementById("Next3").style.display = "none";
		document.getElementById("Next4").style.display = "block";
	} else {
		validateErrorMsg(validate); 
	}
}


function Next4() {			
	var tank = document.getElementById("tankType").value;
	var validate;
	
	validate = ValidateInput4();
	
	if (validate == 0) {
		document.getElementById("Input5").style.display = "block";
		if (tank == "VFR") {
			document.getElementById("divRoof").style.display = "block";
			document.getElementById("divRoofH").style.display = "none";
			document.getElementById("divSlope").style.display = "none";
			document.getElementById("divRadius").style.display = "none";
		} else if (tank == "HFR") {
			document.getElementById("divRoof").style.display = "none";
		} 
		document.getElementById("Next4").style.display = "none";
		document.getElementById("Next5").style.display = "block";					
	} else {
		validateErrorMsg(validate); 
	}
}

function Next5() {
	var tank = document.getElementById("tankType").value;
	var validate;
	
	validate = ValidateInput5();
	
	if (validate == 0) {
		document.getElementById("Input6").style.display = "block";
		if (tank == "VFR") {
			document.getElementById("divGaugePres").style.display = "none";
		} else if (tank == "HFR") {
			document.getElementById("divGaugePres").style.display = "none";
		} else if (tank == "EFR") {
			
		} else if (tank == "IFR") {
			
		}
		document.getElementById("Next5").style.display = "none";
		document.getElementById("Next6").style.display = "block";					
	} else {
		validateErrorMsg(validate); 
	}
}

function Next6() {
	var tank = document.getElementById("tankType").value;
	var validate;
	
	validate = ValidateInput6();
	
	if (validate == 0) {
	
		if (document.getElementById("heat").value == "Yes") {
			document.getElementById("Input7").style.display = "block";	
			document.getElementById("heatCycles").value = "365";
			document.getElementById("Next6").style.display = "none";						
			document.getElementById("Next7").style.display = "block";
		} else {
			document.getElementById("Input7").style.display = "none";
			document.getElementById("Next6").style.display = "none";
			document.getElementById("Next7").style.display = "none";
			
			document.getElementById("heatCycles").value = "365";
			document.getElementById("maxBulkTemp").value = "";
			document.getElementById("minBulkTemp").value = "";
			
			document.getElementById("flex-input4").style.display = "flex";
			document.getElementById("Input20").style.display = "block";
		}	
					
	} else {
		validateErrorMsg(validate); 
	}
}

function Next7() {
	var tank = document.getElementById("tankType").value;
	var validate;
	
	validate = ValidateInput7();
	
	if (validate == 0) {
		document.getElementById("flex-input4").style.display = "flex";
		document.getElementById("Input20").style.display = "block";

		document.getElementById("Next7").style.display = "none";				
	} else {
		validateErrorMsg(validate); 
	}
}


//switch between tank types
function confirmTankType(select1) {

	
	var new1 = select1.value;
	var old1 = select1.oldvalue;
	if (select1.oldvalue != "") {
		var r = confirm("The selection for 'Tank Type' was changed.  Click OK to accept.  Clicking OK will reset all entries.");
		if (r == true) {
			LoadPage();
			document.getElementById("tankType").value = new1;
			document.getElementById("Next1").style.display = "block";
		} else {
			document.getElementById("tankType").value = old1;
		}
	}
}


//format for database or userInput liquid selection
function SelectLiquidInput() {
	var a = document.getElementById("LiqInput").value;
	
	document.getElementById("divLiqType").style.display = "none";
	
	if (a == "Database") { 
		document.getElementById("divLiqType").style.display = "block";
		document.getElementById("divtankContents").style.display = "none";
		document.getElementById("divLiqInputs").style.display = "none";
		document.getElementById("divCalcMethod").style.display = "none";
	} else {
		document.getElementById("divLiqType").style.display = "block";
		document.getElementById("divtankContents").style.display = "none";
		document.getElementById("divLiqInputs").style.display = "none";
		document.getElementById("divLiqChar").style.display = "none";
	}
	document.getElementById("LiqType").selectedIndex = "0";
	document.getElementById("tankContents").selectedIndex = "0";
	
	var x = document.getElementById("LiqType").value;
	var select = document.getElementById("tankContents");
	var length = select.options.length;
	for (i = length-1; i >= 1; i--) {
		select.options[i] = null;
	}
	ResetLiqProp();
}

//appends list of liquids in dropdown
function loadLiquidList() {
	var a = document.getElementById("LiqInput").value;
	var x = document.getElementById("LiqType").value;
	
	document.getElementById("divCalcMethod").style.display = "none";
	
	//remove all previous options
	if (a == "Database") { 
		
		document.getElementById("divtankContents").style.display = "block";
		var select = document.getElementById("tankContents");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
			select.options[i] = null;
		}
		//append chosen list
		if (x == "Crude") {
			fillCrudeProperties();
		} else if (x == "Refined") {
			fillPertoleumProperties();
		} else {
			fillPetroChemProperties();
		}
		
		select.selectedIndex = "0";				
		ResetLiqProp();
		
	} else {
		document.getElementById("calcMethod").selectedIndex = "0";
		document.getElementById("divCalcMethod").style.display = "none";
		
		document.getElementById("divLiqInputs").style.display = "none";
		
		document.getElementById("divInputM_V").style.display = "none";
		document.getElementById("inputM_V").value = "";
		document.getElementById("divInputRVP").style.display = "none";
		document.getElementById("inputRVP").value = "";
		document.getElementById("divInputS").style.display = "none";
		document.getElementById("inputSlope").value = "";
		document.getElementById("divInputA").style.display = "none";
		document.getElementById("inputA").value = "";
		document.getElementById("divInputB").style.display = "none";
		document.getElementById("inputB").value = "";
		document.getElementById("divInputC").style.display = "none";
		document.getElementById("inputC").value = "";
		if (x == "Crude" || x == "Refined") {
			document.getElementById("divCalcMethod").style.display = "block";
		} else {
			formatLiqInput();
		}
	}
}

//formats for user input liquid characteristics
function formatLiqInput() {
	var x = document.getElementById("LiqType").value;
	var y = document.getElementById("calcMethod").value;
	document.getElementById("divLiqInputs").style.display = "block";
	if (x == "Crude") {
		if (y != "") {
			document.getElementById("divInputM_V").style.display = "block";
			if (y == "RVP") {
				document.getElementById("divInputRVP").style.display = "block";
				
				document.getElementById("divInputA").style.display = "none";
				document.getElementById("divInputB").style.display = "none";
			} else {
				document.getElementById("divInputRVP").style.display = "none";
				document.getElementById("divInputA").style.display = "block";
				document.getElementById("divInputB").style.display = "block";
				document.getElementById("labelInputB").innerHTML = "Antoine's Coef. B (&deg;R):";
			}
		}
	} else if (x == "Refined") {
		if (y != "") {
			document.getElementById("divInputM_V").style.display = "block";
			document.getElementById("divInputS").style.display = "block";
			if (y == "RVP") {
				document.getElementById("divInputRVP").style.display = "block";
				document.getElementById("divInputA").style.display = "none";
				document.getElementById("divInputB").style.display = "none";
				
			} else {
				document.getElementById("divInputRVP").style.display = "none";
				document.getElementById("divInputA").style.display = "block";
				document.getElementById("divInputB").style.display = "block";
				document.getElementById("labelInputB").innerHTML = "Antoine's Coef. B (&deg;R)";
			}
		}
	} else {
		document.getElementById("divInputM_V").style.display = "block";
		document.getElementById("divInputA").style.display = "block";
		document.getElementById("divInputB").style.display = "block";
		document.getElementById("labelInputB").innerHTML = "Antoine's Coef. B (&deg;C):";
		document.getElementById("divInputC").style.display = "block";
		document.getElementById("labelInputC").innerHTML = "Antoine's Coef. C (&deg;C):";
	}
}

//fills liquid characteristics on userform				
function fillLiqChar() {
	var liq, i, x, length;
	var liqSelect = document.getElementById("LiqType").value;
	var select = document.getElementById("tankContents").value;
	
	document.getElementById("divLiqChar").style.display = "block";
	
	document.getElementById("VapMW").readOnly = false;
	document.getElementById("LiqMW").readOnly = false;
	document.getElementById("LiqWL").readOnly = false;
	document.getElementById("Slope").readOnly = false;
	document.getElementById("TVP").readOnly = false;
	
	document.getElementById("VapMW").value = "";
	document.getElementById("LiqMW").value = "";
	document.getElementById("LiqWL").value = "";
	document.getElementById("Slope").value = "";
	document.getElementById("TVP").value = "";
					
	if (liqSelect == "Crude") {
		liq = CrudeProperties();
	} else if (liqSelect == "Refined") {
		liq = PertoleumProperties();			
	} else {
		liq = PetroChemProperties();				
	}
	
	length = liq.length;
	for (i = 0; i < length; i++) {
		if (liq[i].propName == select) {
			x = i;
			i = length;
		}
	}

	if (liqSelect == "Crude") {
		document.getElementById("VapMW").value = liq[x].M_V;
	} else if (liqSelect == "Refined") {
		document.getElementById("VapMW").value = liq[x].M_V;
	} else {
		document.getElementById("VapMW").value = liq[x].M_L;
	}
	document.getElementById("LiqMW").value = liq[x].M_L;
	document.getElementById("LiqWL").value = liq[x].W_L;
	document.getElementById("Slope").value = liq[x].S;
	document.getElementById("TVP").value = liq[x].P_VA;
	
	document.getElementById("VapMW").readOnly = true;
	document.getElementById("LiqMW").readOnly = true;
	document.getElementById("LiqWL").readOnly = true;
	document.getElementById("Slope").readOnly = true;
	document.getElementById("TVP").readOnly = true;
}

function ResetLiqProp() {
	
	document.getElementById("VapMW").readOnly = false;
	document.getElementById("LiqMW").readOnly = false;
	document.getElementById("LiqWL").readOnly = false;
	document.getElementById("Slope").readOnly = false;
	document.getElementById("TVP").readOnly = false;
	
	document.getElementById("VapMW").value = "";
	document.getElementById("LiqMW").value = "";
	document.getElementById("LiqWL").value = "";
	document.getElementById("Slope").value = "";
	document.getElementById("TVP").value = "";
	
	document.getElementById("VapMW").readOnly = true;
	document.getElementById("LiqMW").readOnly = true;
	document.getElementById("LiqWL").readOnly = true;
	document.getElementById("Slope").readOnly = true;
	document.getElementById("TVP").readOnly = true;
}

function fillMetChar() {
	var i, x, site, length;
	var select = document.getElementById("metSite").value;
	
	document.getElementById("metCharData").style.display = "block";
	
	site = MetData();
	length = site.length;
	for (i = 0; i < length; i++) {
		if (site[i].metName == select) {
			x = i;
			i = length;
		}
	}
	
	document.getElementById("MinTemp").readOnly = false;
	document.getElementById("MaxTemp").readOnly = false;
	document.getElementById("Wind").readOnly = false;
	document.getElementById("Insolation").readOnly = false;
	document.getElementById("atmPres").readOnly = false;
	
	document.getElementById("MinTemp").value = (site[x].T_AN_Ann + 459.7).toFixed(1);
	document.getElementById("MaxTemp").value = (site[x].T_AX_Ann + 459.7).toFixed(1);
	document.getElementById("Wind").value = site[x].V_Ann.toFixed(1);
	document.getElementById("Insolation").value = numberWithCommas(site[x].I_Ann);
	document.getElementById("atmPres").value = site[x].P_A_Ann.toFixed(2);

	document.getElementById("MinTemp").readOnly = true;
	document.getElementById("MaxTemp").readOnly = true;
	document.getElementById("Wind").readOnly = true;
	document.getElementById("Insolation").readOnly = true;
	document.getElementById("atmPres").readOnly = true;

}

function minTurnQ(select1) {
	var x = 0;
	if (isNaN(document.getElementById("diamFixed").value) || document.getElementById("diamFixed").value == "" || document.getElementById("diamFixed").value.length == 0 || document.getElementById("diamFixed").value == "null") {
		x++;		
	}
	if (isNaN(document.getElementById("minLiqH").value) || document.getElementById("minLiqH").value == "" || document.getElementById("minLiqH").value.length == 0 || document.getElementById("minLiqH").value == "null") {
		x++;				
	}
	if (isNaN(document.getElementById("maxLiqH").value) || document.getElementById("maxLiqH").value == "" || document.getElementById("maxLiqH").value.length == 0 || document.getElementById("maxLiqH").value == "null") {
		x++;			
	}
	if (document.getElementById("lengthFixed").offsetParent === null) {
	} else {
		if (isNaN(document.getElementById("lengthFixed").value) || document.getElementById("lengthFixed").value == "" || document.getElementById("lengthFixed").value.length == 0 || document.getElementById("lengthFixed").value == "null") {
			x++;
		} 
	}
	
	if (select1.value.length > 0) {
		select1.style.backgroundColor = "White";
	} else {
		select1.style.backgroundColor = "Yellow";
		alert("One of the prerequisite input boxes (highlighted in yellow) for 'Turnovers Per Year' and 'Net Throughput' may be incomplete.  Please complete the highlighted input box.");
	}

	if (x > 0) {
		if  (document.getElementById("throughput").value.length > 0) {
		}
		document.getElementById("divTurnQ").style.display = "none";
	} else {
		document.getElementById("divTurnQ").style.display = "block";
		document.getElementById("turn").focus();
		if (document.getElementById("throughput").value.length > 0) {
			calcTurn();
		}
	}
	
}

function calcTurn() {
	var H_LX = parseFloat(document.getElementById("maxLiqH").value);
	var H_LN = parseFloat(document.getElementById("minLiqH").value);
	var N = parseFloat(document.getElementById("turn").value);
	var Q = parseFloat(document.getElementById("throughput").value.replace(/,/g,"")) /42;
	var D = parseFloat(document.getElementById("diamFixed").value);
	var D_E;
	var L;
	var sumH_QI;
	var V_Q;

	if (isNaN(Q)) {
		//no input
	} else {
		
		if (document.getElementById("tankType").value == "VFR") {
			D_E = D;
		} else if (document.getElementById("tankType").value == "HFR") {
			L = document.getElementById("lengthFixed").value;
			D_E = Math.sqrt((L * D) * (Math.PI / 4));
		} 
		V_Q = 5.614 * Q;
		sumH_QI = (V_Q) / ((Math.PI / 4) * Math.pow(D_E,2));
		N = sumH_QI / (H_LX - H_LN);
		//document.getElementById("throughput").value = numberWithCommas((Q * 42).toFixed(2));
		//document.getElementById("turn").value = numberWithCommas(N.toFixed(2));
		document.getElementById("throughput").value = (Q * 42).toFixed(2);
		document.getElementById("turn").value = N.toFixed(2);
		alert("The element for 'Turnovers Per Year' has been auto-calculated.");
	}
	
}

function calcQ() {
	var H_LX = parseFloat(document.getElementById("maxLiqH").value);
	var H_LN = parseFloat(document.getElementById("minLiqH").value);
	var N = parseFloat(document.getElementById("turn").value);
	var Q = parseFloat(document.getElementById("throughput").value.replace(/,/g,"")) /42;
	var D = parseFloat(document.getElementById("diamFixed").value);
	var D_E;
	var sumH_QI;
	var V_Q;
	
	if (isNaN(N)) {
		//no input
	} else {
		
		if (document.getElementById("tankType").value == "VFR") {
			D_E = D;
		} else if (document.getElementById("tankType").value == "HFR") {
			L = document.getElementById("lengthFixed").value;
			D_E = Math.sqrt((L * D) * (Math.PI / 4));
		} 
		sumH_QI = N * (H_LX - H_LN);
		V_Q = sumH_QI * ((Math.PI / 4) * Math.pow(D_E,2));
		Q = V_Q / 5.614;
		//document.getElementById("throughput").value = numberWithCommas((Q * 42).toFixed(2));
		//document.getElementById("turn").value = numberWithCommas(N.toFixed(2));
		document.getElementById("throughput").value = (Q * 42).toFixed(2);
		document.getElementById("turn").value = N.toFixed(2);
		window.alert("The element for 'Net Throughput' has been auto-calculated.");
	}
}


function checkPres() {
	if (isNaN(document.getElementById("setVac").value) || isNaN(document.getElementById("setPres").value)) {
		document.getElementById("gaugePres").value = "";
		document.getElementById("divGaugePres").style.display = "none";
	} else if (Math.abs(document.getElementById("setPres").value - document.getElementById("setVac").value) > 0.06) {
		//reveal gauge pressure inbox
		document.getElementById("divGaugePres").style.display = "block";
	} else if (Math.abs(document.getElementById("setPres").value - document.getElementById("setVac").value) <= 0.06) {
		document.getElementById("gaugePres").value = "";
		document.getElementById("divGaugePres").style.display = "none";
	}
}

function numberWithCommas(x) {
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
}

function fixedRoofType() {
	var x = document.getElementById("roofType").value;
	if (x == "Cone") {
		document.getElementById("divRoofH").style.display = "block";
		document.getElementById("roofH").value = "";
		//document.getElementById("divSlope").style.display = "block";
		//document.getElementById("divRadius").style.display = "none";
	} else if (x == "Dome") {
		document.getElementById("divRoofH").style.display = "block";
		document.getElementById("roofH").value = "";
		//document.getElementById("divSlope").style.display = "none";
		//document.getElementById("divRadius").style.display = "block";
	} else {
		document.getElementById("roofH").value = "";
		document.getElementById("divRoofH").style.display = "none";
		//document.getElementById("divSlope").style.display = "none";
		//document.getElementById("divRadius").style.display = "none";
	}
	fixedRoofHeight();
}

function fixedRoofHeight() {
	var x = document.getElementById("roofType").value;
	var y = parseFloat(document.getElementById("roofH").value);
	if (x == "Cone" && y == 0) {
		//document.getElementById("divRoofH").style.display = "block";
		document.getElementById("fixedRoofRad").value = "";
		document.getElementById("divSlope").style.display = "block";
		document.getElementById("divRadius").style.display = "none";
		document.getElementById("fixedRoofSlope").value = 0.0625;
		document.getElementById("fixedRoofSlope").focus();
	} else if (x == "Dome" && y == 0) {
		//document.getElementById("divRoofH").style.display = "block";
		document.getElementById("fixedRoofSlope").value = "";
		document.getElementById("divSlope").style.display = "none";
		document.getElementById("divRadius").style.display = "block";
		document.getElementById("fixedRoofRad").focus();
		//pg 7.1-22 below Eq 1-20
		document.getElementById("fixedRoofRad").value = document.getElementById("diamFixed").value;
	} else {
		//document.getElementById("divRoofH").style.display = "none";
		document.getElementById("fixedRoofRad").value = "";
		document.getElementById("fixedRoofSlope").value = "";
		document.getElementById("divSlope").style.display = "none";
		document.getElementById("divRadius").style.display = "none";
	}
}


/*

			function confirmTankType(select1) {

				
				var new1 = select1.value;
				var old1 = select1.oldvalue;
				if (select1.oldvalue != "") {
					var r = confirm("The selection for 'Tank Type' was changed.  Click OK to accept.  Clicking OK will reset all entries.");
					if (r == true) {
						LoadPage();
						document.getElementById("tankType").value = new1;
						document.getElementById("Next1").style.display = "block";
					} else {
						document.getElementById("tankType").value = old1;
					}
				}
			}

*/

			
function formatHeated(select1) {

	var new1 = select1.value;
	var old1 = select1.oldvalue;
	if (select1.oldvalue != "") {

		var x = document.getElementById("Input7");
		
		if (window.getComputedStyle(x).display === "none") {
			if (document.getElementById("heat").value == "Yes") {
				document.getElementById("Next6").style.display = "block";
				document.getElementById("Input7").style.display = "none";
				document.getElementById("Input20").style.display = "none";
				document.getElementById("flex-input4").style.display = "none";
				document.getElementById("heat").style.backgroundColor = "Yellow";
				alert("The selection for 'Tank Heating' was changed.  Please verify the selection and continue.");
			}
		} else {
			if (document.getElementById("heat").value == "No") {
				document.getElementById("Next6").style.display = "block";
				document.getElementById("Input7").style.display = "none";
				document.getElementById("Input20").style.display = "none";
				document.getElementById("flex-input4").style.display = "none";
				document.getElementById("heat").style.backgroundColor = "Yellow";
				alert("The selection for 'Tank Heating' was changed.  Please verify the selection and continue.");
			}
		}	
	}
}
			
//monthly calcs see section 7.1.3.8.1
function calcSelect() {
	document.getElementById("JanQ").readOnly = false;
	document.getElementById("JanQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("JanCheck").disabled = false;
	document.getElementById("FebQ").readOnly = false;
	document.getElementById("FebQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("FebCheck").disabled = false;
	document.getElementById("MarQ").readOnly = false;
	document.getElementById("MarQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("MarCheck").disabled = false;
	document.getElementById("AprQ").readOnly = false;
	document.getElementById("AprQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("AprCheck").disabled = false;
	document.getElementById("MayQ").readOnly = false;
	document.getElementById("MayQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("MayCheck").disabled = false;
	document.getElementById("JunQ").readOnly = false;
	document.getElementById("JunQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("JunCheck").disabled = false;
	document.getElementById("JulQ").readOnly = false;
	document.getElementById("JulQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("JulCheck").disabled = false;
	document.getElementById("AugQ").readOnly = false;
	document.getElementById("AugQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("AugCheck").disabled = false;
	document.getElementById("SepQ").readOnly = false;
	document.getElementById("SepQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("SepCheck").disabled = false;
	document.getElementById("OctQ").readOnly = false;
	document.getElementById("OctQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("OctCheck").disabled = false;
	document.getElementById("NovQ").readOnly = false;
	document.getElementById("NovQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("NovCheck").disabled = false;
	document.getElementById("DecQ").readOnly = false;
	document.getElementById("DecQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("DecCheck").disabled = false;
	
	if (document.getElementById("calcBasis").value == "Annual") {
		document.getElementById("JanQ").style.backgroundColor = "#cccccc";
		document.getElementById("JanQ").readOnly = true;
		document.getElementById("JanCheck").checked = false;
		document.getElementById("JanCheck").disabled = true;
		document.getElementById("FebQ").style.backgroundColor = "#cccccc";
		document.getElementById("FebQ").readOnly = true;
		document.getElementById("FebCheck").checked = false;
		document.getElementById("FebCheck").disabled = true;
		document.getElementById("MarQ").style.backgroundColor = "#cccccc";
		document.getElementById("MarQ").readOnly = true;
		document.getElementById("MarCheck").checked = false;
		document.getElementById("MarCheck").disabled = true;
		document.getElementById("AprQ").style.backgroundColor = "#cccccc";
		document.getElementById("AprQ").readOnly = true;
		document.getElementById("AprCheck").checked = false;
		document.getElementById("AprCheck").disabled = true;
		document.getElementById("MayQ").style.backgroundColor = "#cccccc";
		document.getElementById("MayQ").readOnly = true;
		document.getElementById("MayCheck").checked = false;
		document.getElementById("MayCheck").disabled = true;
		document.getElementById("JunQ").style.backgroundColor = "#cccccc";
		document.getElementById("JunQ").readOnly = true;
		document.getElementById("JunCheck").checked = false;
		document.getElementById("JunCheck").disabled = true;
		document.getElementById("JulQ").style.backgroundColor = "#cccccc";
		document.getElementById("JulQ").readOnly = true;
		document.getElementById("JulCheck").checked = false;
		document.getElementById("JulCheck").disabled = true;
		document.getElementById("AugQ").style.backgroundColor = "#cccccc";
		document.getElementById("AugQ").readOnly = true;
		document.getElementById("AugCheck").checked = false;
		document.getElementById("AugCheck").disabled = true;
		document.getElementById("SepQ").style.backgroundColor = "#cccccc";
		document.getElementById("SepQ").readOnly = true;
		document.getElementById("SepCheck").checked = false;
		document.getElementById("SepCheck").disabled = true;
		document.getElementById("OctQ").style.backgroundColor = "#cccccc";
		document.getElementById("OctQ").readOnly = true;
		document.getElementById("OctCheck").checked = false;
		document.getElementById("OctCheck").disabled = true;
		document.getElementById("NovQ").style.backgroundColor = "#cccccc";
		document.getElementById("NovQ").readOnly = true;
		document.getElementById("NovCheck").checked = false;
		document.getElementById("NovCheck").disabled = true;
		document.getElementById("DecQ").style.backgroundColor = "#cccccc";
		document.getElementById("DecQ").readOnly = true;
		document.getElementById("DecCheck").checked = false;
		document.getElementById("DecCheck").disabled = true;
	} else {
		
		/*document.getElementById("JanQ").style.backgroundColor = "White";
		document.getElementById("JanCheck").checked = true;
		document.getElementById("FebQ").style.backgroundColor = "White";
		document.getElementById("FebCheck").disabled = false;
		document.getElementById("FebCheck").checked = true;
		document.getElementById("MarQ").style.backgroundColor = "White";
		document.getElementById("MarCheck").disabled = false;
		document.getElementById("MarCheck").checked = true;
		document.getElementById("AprQ").style.backgroundColor = "White";
		document.getElementById("AprCheck").disabled = false;
		document.getElementById("AprCheck").checked = true;
		document.getElementById("MayQ").style.backgroundColor = "White";
		document.getElementById("MayCheck").disabled = false;
		document.getElementById("MayCheck").checked = true;
		document.getElementById("JunQ").style.backgroundColor = "White";
		document.getElementById("JunCheck").disabled = false;
		document.getElementById("JunCheck").checked = true;
		document.getElementById("JulQ").style.backgroundColor = "White";
		document.getElementById("JulCheck").disabled = false;
		document.getElementById("JulCheck").checked = true;
		document.getElementById("AugQ").style.backgroundColor = "White";
		document.getElementById("AugCheck").disabled = false;
		document.getElementById("AugCheck").checked = true;
		document.getElementById("SepQ").style.backgroundColor = "White";
		document.getElementById("SepCheck").disabled = false;
		document.getElementById("SepCheck").checked = true;
		document.getElementById("OctQ").style.backgroundColor = "White";
		document.getElementById("OctCheck").disabled = false;
		document.getElementById("OctCheck").checked = true;
		document.getElementById("NovQ").style.backgroundColor = "White";
		document.getElementById("NovCheck").disabled = false;
		document.getElementById("NovCheck").checked = true;
		document.getElementById("DecQ").style.backgroundColor = "White";
		document.getElementById("DecCheck").disabled = false;
		document.getElementById("DecCheck").checked = true;
		*/
		document.getElementById("calcBasis").value = "Annual";
		alert("Monthly calculations are not yet functional.")
	}
	document.getElementById("TotalQ").value = document.getElementById("throughput").value
	
}

function checkBoxes(x) {
	
	switch (x) {
	
		case document.getElementById("JanCheck"):
			if (x.checked == false) {
				document.getElementById("JanQ").value = 0;
			}
			break;
		case document.getElementById("FebCheck"):
			if (x.checked == false) {
				document.getElementById("FebQ").value = 0;
			}
			break;
		case document.getElementById("MarCheck"):
			if (x.checked == false) {
				document.getElementById("MarQ").value = 0;
			}
			break;
		case document.getElementById("AprCheck"):
			if (x.checked == false) {
				document.getElementById("AprQ").value = 0;
			}
			break;
		case document.getElementById("MayCheck"):
			if (x.checked == false) {
				document.getElementById("MayQ").value = 0;
			}
			break;
		case document.getElementById("JunCheck"):
			if (x.checked == false) {
				document.getElementById("JunQ").value = 0;
			}
			break;
		case document.getElementById("JulCheck"):
			if (x.checked == false) {
				document.getElementById("JulQ").value = 0;
			}
			break;
		case document.getElementById("AugCheck"):
			if (x.checked == false) {
				document.getElementById("AugQ").value = 0;
			}
			break;
		case document.getElementById("SepCheck"):
			if (x.checked == false) {
				document.getElementById("SepQ").value = 0;
			}
			break;
		case document.getElementById("OctCheck"):
			if (x.checked == false) {
				document.getElementById("OctQ").value = 0;
			}
			break;
		case document.getElementById("NovCheck"):
			if (x.checked == false) {
				document.getElementById("NovQ").value = 0;
			}
			break;
		case document.getElementById("DecCheck"):
			if (x.checked == false) {
				document.getElementById("DecQ").value = 0;
			}
			break;
	}
	calcMonthly();
}

function checkMonthly() {

}

function calcMonthly() {
	var x = 0;
	x += parseFloat(document.getElementById("JanQ").value);
	x += parseFloat(document.getElementById("FebQ").value);
	x += parseFloat(document.getElementById("MarQ").value);
	x += parseFloat(document.getElementById("AprQ").value);
	x += parseFloat(document.getElementById("MayQ").value);
	x += parseFloat(document.getElementById("JunQ").value);
	x += parseFloat(document.getElementById("JulQ").value);
	x += parseFloat(document.getElementById("AugQ").value);
	x += parseFloat(document.getElementById("SepQ").value);
	x += parseFloat(document.getElementById("OctQ").value);
	x += parseFloat(document.getElementById("NovQ").value);
	x += parseFloat(document.getElementById("DecQ").value);
	document.getElementById("TotalQ").value = x;
}

