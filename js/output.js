//output==================================================================================================

function outputWindow() {
	var newWindow = window.open();
	var str1;
	var str2;
	var str3;
	var str4;
	var str5;
	var str6;
	var str7;
	
	if (aryVarVals.tankType == "Vertical Fixed Roof" || aryVarVals.tankType == "Horizontal") {
		str2 = outputCSS();
		str3 = outputInputsFixed();
		str4 = outputMetLiq();				
		str5 = outputCalcsFixed();
		str6 = outputSummaryFixed();
	} else {
		//floating roof tanks not yet computed
	}
	str1 = "<!DOCTYPE html>";
	str1 += "<html>";
	str1 += "	<head>";
	str1 += "		<meta charset='utf-8'>";
	str1 += "		<meta http-equiv='X-UA-Compatible' content='IE=edge'>";
	str1 += "		<meta name='viewport' content='width=device-width, initial-scale=1'>";
	str1 += "		<title>Tank Emissions Report</title>";
	str1 += "		" + str2; // style
	str1 += "	</head>";
	str1 += "	<header>";
	str1 += "		<div class='outputTitle' id='outputTitle'>";
	str1 += "			<b>DEPARTMENT OF ENVIRONMENTAL QUALITY<br>";
	str1 += "			AQD Storage Tank Calculation Tool (20202)<br>";
	str1 += "			Calculation Report<br>";
	str1 += "			Based on AP-42 (06/2020) Section 7.1: Organic Liquid Storage Tanks</b><br><br>";
	str1 += "			<button onclick='window.print()'>Print this page</button>";
	str1 += "		</div>";
	str1 += "	</header>";
	str1 += "	<body>";
	str1 += "		<div class='flex-output1' id='flex-output1' style='border-top: 1px solid black'>";
	str1 += "			<div>";
	str1 += "				" + str3; //Input
	str1 += "			</div>";
	if (document.getElementById("outputType").value == "Detailed") {
		str1 += "			<div>";
		str1 += "				" + str4; //Meteorology/Liquid
		str1 += "			</div>";
	}
	str1 += "		</div>";
	if (document.getElementById("outputType").value == "Detailed") {
		str1 += "		<div class='pgbr' style='border-top: 1px solid black'>";
		str1 += "			<br><table align='center'>";
		str1 += "			<caption><b>CALCULATION DETAILS</b></caption>";
		str1 += "				<tr><td align='left' class='cellOut1'></td>";
		str1 += "				<td align='left' class='cellOut2'></td>";
		str1 += "				<td align='right' class='cellOut3'></td></tr>";
		str1 += "			</table>";
		str1 += "		</div>";
		str1 += "		<div class='flex-output1' id='flex-output2'>";
		str1 += "			" + str5; //Calculations
		str1 += "		</div><br><br>";
	}
	str1 += "       <div style='border-top: 1px solid black'></div>";
	str1 += "		<div>";
	str1 += "			" + str6; //Output
	str1 += "		</div>";
	str1 += "	</body>";
	str1 += "</html>";
	
	newWindow.document.write(str1);
}

//Output window CSS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function outputCSS() {
	var str1;
	str1 = "<style>";
		str1 += ".outputTitle {";
		//str1 += "	background-color: #E5E4E2;";
		//str1 += "	border: 1px solid black;";
		str1 += "	padding: 20px;";
		str1 += "	text-align: center;";
		str1 += "}";
		str1 += ".flex-output1 {";
		str1 += "	display: flex;";
		str1 += "	align-items: stretch;";
		str1 += "	justify-content: center;";
		str1 += "	flex-wrap: wrap;";
		str1 += "	flex-basis: 0;";
		str1 += "}";
		str1 += ".flex-output1 > div {";
		str1 += "	text-align: center;";	
		str1 += "	color: Black;";		
		//str1 += "	border: 1px solid black;";
		str1 += "	flex-grow: 1;";
		str1 += "	background-color: White;";
		str1 += "	padding-left: 20px;";
		str1 += "	padding-right: 20px;";
		str1 += "}";
		str1 += ".cellOut1, .cellOut2, .cellOut3 {";
		str1 += "	padding-left: 10px;";
		str1 += "	padding-right: 10px;";
		str1 += "}";
		str1 += ".cellOutHead {";
		str1 += "	padding-left: 10px;";
		str1 += "	padding-right: 10px;";
		str1 += "}";
		str1 += "table {";
		str1 += "		border-collapse: collapse;";
		str1 += "}";
		str1 += "caption {";
		str1 += "	display: table-caption;";
		str1 += "	border:1px solid black;";
		str1 += "	text-align: center;";
		str1 += "}";
		str1 += "table, th, td {";
		//str1 += "		border: 1px solid black;";
		str1 += "}";
		str1 += ".cellOut1 {";
		str1 += "	vertical-align: Top;";
		str1 += "	width: 225px";
		//str1 += "	max-width: 225px;";
		//str1 += "	min-width: 40px;";
		str1 += "}";
		str1 += ".cellOut2 {";
		str1 += "	vertical-align: bottom;";
		str1 += "	width: 50px;";
		//str1 += "	max-width: 225px;";
		//str1 += "	min-width: 40px;";
		str1 += "}";
		str1 += ".cellOut3 {";
		str1 += "	vertical-align: bottom;";
		str1 += "	width: 150px";
		//str1 += "	max-width: 225px;";
		//str1 += "	min-width: 40px;";
		str1 += "}";
		
		str1 += "@media print {";										
		str1 += "	tr {";
		str1 += "		page-break-inside: avoid;";
		str1 += "		break-inside: avoid;";
		str1 += "	}";		
		str1 += "	div.pgbr {";
		/*
		str1 += "		page-break-before: always;";
		str1 += "		break-before: always;";
		str1 += "	}";	
		*/
		str1 += "	div.cellOutHead {";
		str1 += "		page-break-after: avoid;";
		str1 += "		break-after: avoid;";
		str1 += "	}";	
		
		str1 += "}";
		
	str1 += "</style>";
	return str1;
}

function outputMetLiq() {
	var str1;
	var n = 4;
	
	str1 = "<br><table align='center'>";
	str1 += "<caption><b>METEOROLOGICAL DATA</b></caption>";

	str1 += "<tr><td align='left' class='cellOut1' colspan='2'><br>" + aryVarDesc.site + ":</td>";
	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.site + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_AA  + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_AA + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_AA.toFixed(n)) + "</td></tr>";
					
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_AN  + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_AN + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_AN.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_AX  + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_AX + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_AX.toFixed(n)) + "</td></tr>";			
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.deltaT_A  + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.deltaT_A + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.deltaT_A.toFixed(n)) + "</td></tr>";
				
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.v + "</td>";
	str1 += "<td align='left' class='cellOut2'>" +  aryVarNames2.v + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.v.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.I + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.I + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.I.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_A + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_A + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_A.toFixed(n)) + "</td></tr>";
	
	//End Met Data table
	str1 += "</table><br>";
	
	//Begin Liq Table
	str1 += "<table align='center'>";
	str1 += "<caption><b>LIQUID DATA</b></caption>";
	
	str1 += "<tr><td align='left' class='cellOut1' colspan='2'><br>Liquid category</td>";
	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.LiqCat + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Liquid name</td>";
	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.LiqName + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_B + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_B + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_B.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_LA + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_LA + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_LA.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_LN + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_LN + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_LN.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_LX + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_LX + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_LX.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_VA + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_VA + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_VA.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_VN + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_VN + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_VN.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_VX + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_VX + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_VX.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.M_V + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.M_V + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.M_V.toFixed(n)) + "</td></tr>";
	
	if (aryVarVals.RVP == "" || aryVarVals.RVP == null) {
		//is either "" or undefined
	} else {
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.RVP + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.RVP + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.RVP.toFixed(n)) + "</td></tr>";
	}
	
	if (isNaN(aryVarVals.Slope) == false) {
		// is either "" or undefined
		if (aryVarVals.Slope == null || aryVarVals.Slope == "") {
			//is either "" or undefined
		} else {				
			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.Slope + "</td>";
			str1 += "<td align='left' class='cellOut2'>S</td>";
			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.Slope.toFixed(n)) + "</td></tr>";
		}
	}
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.A + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.A + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.A.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.B + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.B + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.B.toFixed(n)) + "</td></tr>";
	
	if (aryVarVals.C != "") {
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.C + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.C + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.C.toFixed(n)) + "</td></tr>";
	}
	
	//End Met Data table
	str1 += "</table><br>";
	
	return str1;
}

//Inputs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Fixed roof input summary
function outputInputsFixed() {
	var str1;
	var n = 4;
	
	str1 = "<br><table align='center'>";
	str1 += "<caption><b>INPUT SUMMARY</b></caption>";
	
	//Identification
	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Identification</th></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Tank type</td>";
	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.tankType + "</td></tr>";
	
	if (aryVarVals.tankID.length > 0) {
		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Tank identifier</td>";
		str1 += "<td align='left' class='cellOut3'>" + aryVarVals.tankID + "</td></tr>";
	}
	
	if (aryVarVals.Desc.length > 0) {
		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Description:</td>";
		str1 += "<td align='left' class='cellOut3'>" + aryVarVals.Desc + "</td></tr>";
	}

	//Meteorological Information
	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Meteorological Data:</th></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>" + aryVarDesc.site + ":</td>";
	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.site + "</td></tr>";
	
	
	//Liquid Information
	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Tank Contents:</th></tr>";
					
	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Liquid category</td>";
	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.LiqCat + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Liquid name</td>";
	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.LiqName + "</td></tr>";
		
	if (aryVarVals.LiqInput == "Manual Entry") {
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.M_V + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.M_V + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.M_V.toFixed(n)) + "</td></tr>";
		
		if (aryVarVals.RVP == "" || aryVarVals.RVP == null) {
			//is either "" or undefined
		} else {
			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.RVP + "</td>";
			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.RVP + "</td>";
			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.RVP.toFixed(n)) + "</td></tr>";
		}
		
		if (isNaN(aryVarVals.Slope) == false) {
			// is either "" or undefined
			if (aryVarVals.Slope == null || aryVarVals.Slope == "") {
				//is either "" or undefined
			} else {
				str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.Slope + "</td>";
				str1 += "<td align='left' class='cellOut2'>S</td>";
				str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.Slope.toFixed(n)) + "</td></tr>";
			}
		}
		
		if (aryVarVals.RVP == "" || aryVarVals.RVP == null) {
			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.A + "</td>";
			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.A + "</td>";
			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.A.toFixed(n)) + "</td></tr>";
			
			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.B + "</td>";
			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.B + "</td>";
			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.B.toFixed(n)) + "</td></tr>";
			
			if (aryVarVals.C != "") {
				str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.C + "</td>";
				str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.C + "</td>";
				str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.C.toFixed(n)) + "</td></tr>";
			}
		}
	}
	
	//Tank Dimensions
	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Tank Dimensions:</th></tr>";
	
	if (aryVarVals.tankType == "Vertical Fixed Roof") {
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_S + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_S + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_S.toFixed(n)) + "</td></tr>";
	} else {
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.L + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.L + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.L.toFixed(n)) + "</td></tr>";
	}
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.D + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.D + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.D.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_LX + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_LX + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_LX.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_LN + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_LN + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_LN.toFixed(n)) + "</td></tr>";
	
	if (aryVarVals.tankType == "Vertical Fixed Roof") {
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_L + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_L + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_L.toFixed(n)) + "</td></tr>";
	}
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.N + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.N + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.N.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Annual net throughput, gal/yr</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(parseFloat(document.getElementById("throughput").value.replace(/,/g,"")).toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.Q + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.Q + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.Q.toFixed(n)) + "</td></tr>";
					
	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Vapor balanced?</td>";
	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.Balanced + "</td></tr>";
	
	//Paint Characteristics
	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Paint Characteristics:</th></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Shell color/shade</td>";
	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.shellColor + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Shell condition</td>";
	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.shellCond + "</td></tr>";
	
	if (aryVarVals.a_R !="") {
		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Roof color/shade</td>";
		str1 += "<td align='left' class='cellOut3'>" + aryVarVals.roofColor + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Roof condition</td>";
		str1 += "<td align='left' class='cellOut3'>" + aryVarVals.roofCond + "</td></tr>";
						
		//Roof Characteristics
		str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Roof Characteristics:</th></tr>";				
		
		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Roof type</td>";
		str1 += "<td align='left' class='cellOut3'>" + aryVarVals.roofType + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_R + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_R + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + parseFloat(document.getElementById("roofH").value).toFixed(n) + "</td></tr>";
		
		if (document.getElementById("roofType").value == "Cone") {
			if (document.getElementById("fixedRoofSlope").value != "") {
				str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.S_R + "</td>";
				str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.S_R + "</td>";
				str1 += "<td align='right' class='cellOut3'>" + aryVarVals.S_R + "</td></tr>";
			}
		} else if (document.getElementById("roofType").value == "Dome") {
			if (document.getElementById("fixedRoofRad").value != "") {
				str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.R_R + "</td>";
				str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.R_R + "</td>";
				str1 += "<td align='right' class='cellOut3'>" + aryVarVals.R_R + "</td></tr>";
			}
		}
	}
					
	//Breather Vent Settings
	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Breather Vent Settings:</th></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_BV + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_BV + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_BV.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_BP + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_BP + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_BP.toFixed(n)) + "</td></tr>";
	
	if (aryVarVals.P_I != "") {
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_I + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_I + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_I.toFixed(n)) + "</td></tr>";
	}
					
	//Insolation Characteristics
		str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Insulation Characteristics:</th></tr>";
							
		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Tank insulation</td>";
		str1 += "<td align='left' class='cellOut3'>" + insulated.options[insulated.selectedIndex].innerHTML; + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Tank heating</td>";
		str1 += "<td align='left' class='cellOut3'>" + aryVarVals.heat + "</td></tr>";
		
	if (document.getElementById("minBulkTemp").value != "" && isNaN(document.getElementById("minBulkTemp").value) == false) {

		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Heating cycles per year</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.heatingCycles.toFixed(n)) + "</td></tr>";
	
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_BN + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_BN + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_BN.toFixed(n)) + "</td></tr>";
						
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_BX + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_BX + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_BX.toFixed(n)) + "</td></tr>";
		
	} /*else if (document.getElementById("constBulkTemp").value != "" && isNaN(document.getElementById("constBulkTemp").value) == false) {
		//from section 7.1.3.8.4
	
		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Heating cycles per year</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.heatingCycles.toFixed(n)) + "</td></tr>";
	
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_B + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_B + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_B.toFixed(n)) + "</td></tr>";
	}*/
	
	//End Inputs table
	str1 += "</table><br>";
	
	return str1;
}

//Fixed roof calculation details
function outputCalcsFixed() {
	var n = 4;
	var str1;
	str1 = "<div>";
	str1 += "<table  align='center'>";
	//str1 += "<caption><b>CALCULATION DETAILS</b></caption>";
	
	//Standing Losses, L_S
	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Standing Losses</th></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.L_S + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.L_S + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.L_S.toFixed(n)) + "</td></tr>";
	
	if (document.getElementById("insulated").value == "Underground" && document.getElementById("tankType").value == "VFR" && aryVarVals.heat == "No") {
		// no standing losses, do not show calculations
	} else {
		
		if (aryVarVals.heat == "Yes") {
			str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Heating cycles per year</td>";
			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.heatingCycles.toFixed(n)) + "</td></tr>";
		}
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.V_V + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.V_V + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.V_V.toFixed(n)) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.W_V + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.W_V + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.W_V.toFixed(n)) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.K_E + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.K_E + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.K_E.toFixed(n)) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.K_S + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.K_S + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.K_S.toFixed(n)) + "</td></tr>";
		
		//Vapor space Volume, V_V
		str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Vapor Space Volume</th></tr>";
		
		str1 += "<tr><td align='left' class='cellOut2'>" + aryVarDesc.V_V + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.V_V + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.V_V.toFixed(n)) + "</td></tr>";
		
		if (aryVarVals.tankType == "Vertical Fixed Roof") {
			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.D + "</td>";
			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.D + "</td>";
			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.D.toFixed(n)) + "</td></tr>";
		} else {
			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.D_E + "</td>";
			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.D_E + "</td>";
			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.D_E.toFixed(n)) + "</td></tr>";
		}
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_VO + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_VO + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_VO.toFixed(n)) + "</td></tr>";
		
		//Vapor space outage, H_VO
		str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Vapor Space Outage</th></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_VO + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_VO + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_VO.toFixed(n)) + "</td></tr>";
		
		if (aryVarVals.tankType == "Vertical Fixed Roof") {
			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_S + "</td>";
			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_S + "</td>";
			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_S.toFixed(n)) + "</td></tr>";
		
			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_L + "</td>";
			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_L + "</td>";
			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_L.toFixed(n)) + "</td></tr>";
		
		} else {
			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_E + "</td>";
			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_E + "</td>";
			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_E.toFixed(n)) + "</td></tr>";
		}
		
		if (aryVarVals.tankType == "Vertical Fixed Roof") {
			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_RO + "</td>";
			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_RO + "</td>";
			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_RO.toFixed(n)) + "</td></tr>";
			
			//Roof Outage, H_RO
			str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Roof Outage</th></tr>";
			
			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_RO + "</td>";
			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_RO + "</td>";
			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_RO.toFixed(n)) + "</td></tr>";
			
			
			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_R + "</td>";
			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_R + "</td>";
			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_R.toFixed(n)) + "</td></tr>";
			
			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.R_S + "</td>";
			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.R_S + "</td>";
			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.R_S.toFixed(n)) + "</td></tr>";
			
			if (document.getElementById("roofType").value == "Cone") {
				if (document.getElementById("fixedRoofSlope").value != "") {
					str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.S_R + "</td>";
					str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.S_R + "</td>";
					str1 += "<td align='right' class='cellOut3'>" + aryVarVals.S_R.toFixed(4) + "</td></tr>";
				}
			} else {	
				if (document.getElementById("fixedRoofRad").value != "") {
					str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.R_R + "</td>";
					str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.R_R + "</td>";
					str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.R_R.toFixed(n)) + "</td></tr>";
				}
			}	
		}	
		//Vapor Density, W_V
		str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Vapor Density</th></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.W_V + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.W_V + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.W_V.toFixed(n)) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.M_V + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.M_V + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.M_V.toFixed(n)) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_VA + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_VA + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_VA.toFixed(n)) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.R + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.R + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.R.toFixed(n)) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_V + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_V + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_V.toFixed(n)) + "</td></tr>";

		if (aryVarVals.a_R != "") {
			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.a_R + "</td>";
			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.a_R + "</td>";
			str1 += "<td align='right' class='cellOut3'>" + aryVarVals.a_R.toFixed(n) + "</td></tr>";
		}
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.a_S + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.a_S + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + aryVarVals.a_S.toFixed(n) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.I + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.I + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.I.toFixed(n)) + "</td></tr>";
		
		str1 += "</table>";
		
		
		str1 += "</div>";
		str1 += "<div>";
		
		str1 += "<table  align='center'>";
		
		
		//Vapor Space Expansion Factor, K_E
		str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Vapor Space Expansion Factor</th></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.K_E + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.K_E + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.K_E.toFixed(n)) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.deltaT_V + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.deltaT_V + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.deltaT_V.toFixed(n)) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.deltaP_V + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.deltaP_V + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.deltaP_V.toFixed(n)) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.deltaP_B + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.deltaP_B + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.deltaP_B.toFixed(n)) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_A + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_A + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_A.toFixed(n)) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_VA + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_VA + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_VA.toFixed(n)) + "</td></tr>";

		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_LA + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_LA + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_LA.toFixed(n)) + "</td></tr>";

		//Vented Vapor Saturation Factor, K_S
		str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Vented Vapor Saturation Factor</th></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.K_S + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.K_S + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + aryVarVals.K_S.toFixed(n) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_VA + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_VA + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_VA.toFixed(n)) + "</td></tr>";
		
		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_VO + "</td>";
		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_VO + "</td>";
		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_VO.toFixed(n)) + "</td></tr>";
	}
	
	//Working Losses, L_W
	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Working Losses</th></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.L_W + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.L_W + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.L_W.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.V_Q + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.V_Q + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.V_Q.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.K_N + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.K_N + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.K_N.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.K_P + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.K_P + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.K_P.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.W_V + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.W_V + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.W_V.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.K_B + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.K_B + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.K_B.toFixed(n)) + "</td></tr>";
	
	str1 += "</table>";
	str1 += "</div><br>";
	
	return str1;
}

//Fixed roof emissions summary
function outputSummaryFixed () {
	//Total Losses, L_T
	var n = 4;
	var str1;
	
	str1 = "<br><table  align='center'>";
	str1 += "<caption><b>EMISSIONS SUMMARY</b></caption>";
	
	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Total Losses</th></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.L_S + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.L_S + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.L_S.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.L_W + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.L_W + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.L_W.toFixed(n)) + "</td></tr>";
	
	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.L_T + "</td>";
	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.L_T + "</td>";
	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.L_T.toFixed(n)) + "</td></tr>";
	
	str1 += "</table>";
	
	return str1;
}
