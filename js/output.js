function printOutput(){

	let outputWindow = window.open();
	
	HTMLreport=printReport();

	outputWindow.document.write(HTMLreport);

};

function printReport(){

	report=`
		<!DOCTYPE html>
		<html lang="en">
	        <head>
	                <meta charset="utf-8">
	                <meta http-equiv="X-UA-Compatible" content="IE=edge">
	                <meta name="viewport" content="width=device-width, initial-scale=1">
	                <title>HERRAMIENTA TANQUES - FAUBA</title>
	                <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'>

	                <!-- call css -->
	                <link rel="stylesheet" href="css/style.css">

	                <!-- call js -->
	        </head>

		<body>
		<section>

		${printSeparador("Identificación y Características Físicas del Tanque")}

		<!-- *****Identificación **** -->
		<h3> Identificación </h3>
		<table width = "80%">
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Nombre del proyecto:</td>
			<td> ${ id.userID } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Ubicación:</td>
			<td> ${ id.location } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Empresa:</td>
			<td> ${ id.company } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Tipo de tanque:</td>
			<td> ${ t.type } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Descripción:</td>
			<td> ${ id.description } </td>
		</tr>
		</table>
	
		<!-- ***** Fin de la identificación **** -->

		<!-- *****Dimensiones del tanque **** -->
		<h3> Dimensiones del tanque </h3>
		<table width = "35%">
	`

	if( t.type=='VFR'){
		report+=`	
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Altura del tanque <span class="unitsImp">(ft)</span> <span class="unitsSI">(m)</span>:</td>
				<td > ${ o.height } </td>
			</tr>
		`;
	} else if( t.type =='HFR'){
		report+=`	
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Largo del tanque <span class="unitsImp">(ft)</span> <span class="unitsSI">(m)</span>:</td>
				<td > ${ o.height } </td>
			</tr>
		`;
	};

	report+=`	
	    <!-- Todos los tipos de tanques tienen diámetro -->
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Diámetro <span class="unitsImp">(ft)</span> <span class="unitsSI">(m)</span>:</td>
			<td > ${ o.diameter } </td>
		</tr>
		<!-- Fin diámetro -->
	`;

	if(t.type == "VFR"){
		report+=`	
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Altura Máxima del Líquido <span class="unitsImp">(ft)</span> <span class="unitsSI">(m)</span>:</td>
				<td > ${ o.maxLiquidHeight } </td>
			</tr>
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Altura Mínima del Líquido <span class="unitsImp">(ft)</span> <span class="unitsSI">(m)</span>:</td>
				<td > ${ o.minLiquidHeight } </td>
			</tr>
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Altura Promedio del Líquido <span class="unitsImp">(ft)</span> <span class="unitsSI">(m)</span>:</td>
				<td > ${ o.avgLiquidHeight } </td>
			</tr>
		`
	} else if(t.type != "HFR"){
		report+=`	
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Altura Máxima del Líquido <span class="unitsImp">(ft)</span> <span class="unitsSI">(m)</span>:</td>
			<td > ${ o.maxLiquidHeight } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Altura Mínima del Líquido <span class="unitsImp">(ft)</span> <span class="unitsSI">(m)</span>:</td>
			<td > ${ o.minLiquidHeight } </td>
		</tr>
		`
	};

	report+=`	
		<!-- Todos los tanques tienen volumen útil, llenados anuales y volumen neto anual introducido -->
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Volumen útil <span class="unitsImp">(ft3)</span> <span class="unitsSI">(m3)</span>:</td>
			<td > ${ parseFloat(o.workingVolume).toFixed(2) } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Llenados anuales (adimensional):</td>
			<td > ${ parseFloat(t.turnoversPerYear).toFixed(2) } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Volumen neto anual introducido <span class="unitsImp">(ft3)</span> <span class="unitsSI">(m3)</span>:</td>
			<td > ${ parseFloat(o.annualNetThroughput).toFixed(2) } </td>		
		</tr>
		<!-- Fin volumen útil, llenados anuales y volumen neto anual introducido -->
	`;

	if (t.type == 'VFR' || t.type == 'HFR'){
		report+=`
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Tipo de aislamiento:</td>
				<td > ${ t.insulated } </td>		
			</tr>
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Calentamiento:</td>
		`
		if(t.heating.heating == 'true') {
			report+=`	
					<td> Sí </td>
				</tr>
			`
		} else {
			report+=`	
					<td> No </td>
				</tr>
			`
		};

	};

	if ( t.type == 'IFR'){
		report+=`	
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Número de columnas:</td>
				<td > ${ t.columns.number } </td>
			</tr>
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Diámetro efectivo columnas <span class="unitsImp">(ft)</span> <span class="unitsSI">(m)</span>:</td>
				<td > ${ parseFloat(o.effectiveColumnDiameter).toFixed(4) } </td>
			</tr>
		`;
	};

	if (t.type == 'HFR'){
		report+=`		
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">¿Es un tanque subterráneo?</td>
		`		
		if(t.insulation == "underground") {
			report+=`	
					<td> Sí </td>
				</tr>
			`
		} else {
			report+=`
					<td> No </td>
				</tr>
			`
		};	
	};

	report+=`
		</table>
		<!-- *****Fin Dimesiones del Tanque **** -->
		<br>

		<!-- *****Características de la Pintura **** -->

		<h3>Características de la pintura</h3>
		<table width = "35%">
	`
	if ( t.type == "EFR"  || t.type== 'IFR' || t.type == "DEFR"){
		report+=`
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Condición de la pared interna:</td>
				<td> ${ t.shellTexture } </td>
			</tr>
		`
	};

	report+=`	
		<!-- Todos los tanques tienen atributo de color y condición de la pared externa -->
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Color/Tonalidad de la pared:</td>
			<td> ${ t.shell.color } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Condición de la pared:</td>
			<td> ${ t.shell.condition } </td>
		</tr>
		<!-- Fin color y condición -->
	`;

	if (t.type == "VFR" || t.type == "IFR" || t.type == "DEFR") {
		report+=`
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Color/Tonalidad del techo:</td>
				<td> ${ t.roof.color } </td>
			</tr>
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Condición del techo:</td>
				<td> ${ t.roof.condition } </td>
			</tr>
		`
	};	

	report+=` 
		</table>
	
		<!-- *****Fin características pintura **** -->

		<!-- *****Características del techo **** -->
	
	`

	if(t.type =="VFR") {
		report+=`
			<h3>Características del techo</h3>
			<table width = "35%">	
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Tipo:</td>
				<td> ${ t.roof.type } </td>
			</tr>
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Altura <span class="unitsImp">(ft)</span> <span class="unitsSI">(m)</span>:</td>
				<td > ${ o.roofHeight } </td>
			</tr>
		`		
		if (t.roof.type == "dome") {
			report+=`
				<tr>
					<td width = "20">&#160;</td>
					<td width = "180">Radio <span class="unitsImp">(ft)</span> <span class="unitsSI">(m)</span>:</td>
					<td > ${ o.roofRadius } </td>
				</tr>	
			`
		} else if (t.roof.type == "cone") {
			report+=`
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Pendiente <span class="unitsImp">(ft/ft)</span> <span class="unitsSI">(m/m)</span>:</td>
				<td > ${ o.roofSlope } </td>
			</tr>	
			`
		}
	};


	report+=`
		</table>
	
		<!-- *****Fin características techo **** -->

		<!-- *****Ajustes válvulas de ventilación **** -->

	`
	
	if(t.type == "VFR"|| t.type =="HFR") {
		report+=`	
			<h3>Ajustes válvulas de ventilación</h3>
			<table width = "35%">
		`
		if (unitsOut=="Imperial"){
			report+=`
					<tr>
						<td width = "20">&#160;</td>
						<td width = "180">Ajuste de vacío (psig):</td>
						<td > ${ t.ventVacuumSetting } </td>
					</tr>
					<tr>
						<td width = "20">&#160;</td>
						<td width = "180">Ajuste de presión (psig):</td>
						<td > ${ t.ventPressureSetting } </td>
					</tr>
				</table>
			`
		} else {
			report+=`
				<tr>
					<td width = "20">&#160;</td>
					<td width = "180">Ajuste de vacío (bar):</td>
					<td > ${ t.ventVacuumSetting/14.5038 } </td>
				</tr>
				<tr>
					<td width = "20">&#160;</td>
					<td width = "180">Ajuste de presión (bar):</td>
					<td > ${ t.ventPressureSetting/14.5038 } </td>
				</tr>
			</table>
			`
		};	
	};
	
	
	if(t.type == "EFR"|| t.type == "IFR"|| t.type == "DEFR") {
		report+=`
		<!-- *****Características del sello de la plataforma flotante **** -->

		<h3>Sello perimetral plataforma flotante</h3>
		<table width = "35%">
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Construcción del tanque:</td>
				<td> ${ t.construction } </td>
			</tr>
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Ajuste del sello:</td>
				<td> ${ t.rimSeal.fit } </td>
			</tr>
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Sello primario:</td>
				<td> ${ t.rimSeal.type} </td>
			</tr>
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Sello secundario:</td>
				<td> ${ t.rimSeal.secondary } </td>
			</tr>
		</table>
	
		`

		if (t.type == "EFR"||t.type =="IFR") {
			report+=`
				<!-- *****Características de la plataforma flotante**** -->
				<h3>Características de la plataforma flotante</h3>
				<table width = "35%">
			`
			if (t.type == "EFR") {
				report+=`
					<tr>
						<td width = "20">&#160;</td>
						<td width = "180">Tipo:</td>
						<td> ${ t.deck.type } </td>
					</tr>
				`	
			} else {
				report+=`
					<tr>
						<td width = "20">&#160;</td>
						<td width = "180">Construcción:</td>
						<td> ${ t.deck.construction } </td>
					</tr>
				`	
				if (t.deck.construction == "bolted") {
					report+=`
						<tr>
							<td width = "20">&#160;</td>
							<td width = "180">Conformación:</td>
							<td> ${ t.deck.conformation } </td>
						</tr>
						<tr>
							<td width = "20">&#160;</td>
							<td width = "180">Longitud costuras <span class="unitsImp">(ft)</span> <span class="unitsSI">(m)</span>:</td>
							<td > ${ parseFloat(o.deckSeamLength).toFixed(2) } </td>   
						</tr>
					`
				};
			};	
			report+=`
				</table>
			`
		};

		
		report+=`
			<!-- *****Accesorios de la plataforma flotante  **** -->

			<h3>Accesorios de la plataforma flotante</h3>

			<table width = "100%">
			<tr>
				<td colspan = "1"><b>Accesorio</b></td>
				<td colspan = "1"><b>Características</b></td>
				<td colspan = "1"><b>Cantidad</b></td>
				<td colspan = "3"><b>Factores de pérdida del accesorio</b></td>
			</tr>
			<tr>
				<td colspan = "6"><hr/></td>
			</tr>
			<tr>
				<td colspan = "1">&#160;</td>
				<td colspan = "1">&#160;</td>
				<td colspan = "1">&#160;</td>
				<td colspan = "1">KFa<span class="unitsImp">(lb-mol/año)</span> <span class="unitsSI">(kmol/año)</span></td>
				<td colspan = "1">KFb<span class="unitsImp">(lb-mol/(mph)ᵐ*año)</span> <span class="unitsSI">(kmol/(1.6km/h)ᵐ*año)</span></td>
				<td colspan = "1">m (adimensional)</td>
			</tr>
			<tr>
				<td colspan = "6"><hr/></td>
			</tr>
		`
		for (i=0;i<t.deck.fittings.length;i++){
			
			report+=`
				<tr>
					<td colspan = "1"> ${t.deck.fittings[i].fittingName}</td>
					<td colspan = "1"> ${t.deck.fittings[i].fittingType}</td>
					<td colspan = "1"> ${t.deck.fittings[i].amount}</td>
			`	
			if (unitsOut=="Imperial"){
				report+=`
						<td colspan = "1"> ${t.deck.fittings[i].Kfa}</td>
						<td colspan = "1"> ${t.deck.fittings[i].Kfb}</td>
						<td colspan = "1"> ${t.deck.fittings[i].m}</td>			
					</tr>
				`
			} else {
				report+=`
						<td colspan = "1"> ${t.deck.fittings[i].Kfa*0.45359}</td>
						<td colspan = "1"> ${t.deck.fittings[i].Kfb*0.45359}</td>
						<td colspan = "1"> ${t.deck.fittings[i].m}</td>			
					</tr>
				`
			};

		};
		report+=`
		</table>
		`
	};	

	report+=`
		<br>
		<h3> Datos meteorológicos </h3>
		<table width = "80%">
			<tr>
				<td width = "180">Ubicación</td>
				<td colspan = "1">&#160;</td>
				<td colspan = "1">Temperatura Mínima</td>
				<td colspan = "1">Temperatura Máxima</td>
				<td colspan = "1">Velocidad viento</td>
				<td colspan = "1">Insolación</td>
				<td colspan = "1">Presión atmosférica</td>
  			</tr>
			<tr>	
			  <td colspan = "19"><hr/></td>
	   		</tr>
	`

	if (unitsOut=="Imperial"){
		report+=`
			<tr>
				<td colspan = "1">${m.siteName}</td>
				<td colspan = "1">&#160;</td>
				<td colspan = "1">${parseFloat(m.minAmbientTemp).toFixed(2)} °R</td>
				<td colspan = "1">${parseFloat(m.maxAmbientTemp).toFixed(2)} °R</td>
				<td colspan = "1">${parseFloat(m.u).toFixed(2)} millas/h</td>
				<td colspan = "1">${parseFloat(m.insolation).toFixed(2)} Btu/ft<sup>2</sup>&middot;día</td>
				<td colspan = "1">${parseFloat(m.atmPressure).toFixed(2)} psia</td>
	 		 </tr>
		`
	} else {
		report+=`
			<tr>
				<td colspan = "1">${m.siteName}</td>
				<td colspan = "1">&#160;</td>
				<td colspan = "1">${((m.minAmbientTemp-491.67)/1.8).toFixed(2)} °C</td>
				<td colspan = "1">${((m.maxAmbientTemp-491.67)/1.8).toFixed(2)} °C</td>
				<td colspan = "1">${(m.u/2.237).toFixed(2)} m/s</td>
				<td colspan = "1">${(m.insolation/88.055).toFixed(2)} MJ/m<sup>2</sup>&middot;día</td>
				<td colspan = "1">${(m.atmPressure*0.068).toFixed(2)} atm</td>
	  		</tr>
		`
	};

	report+=`
		</table>
		
		<p style="page-break-before: always"></p>
		
		<!-- Contenido del tanque  -->
		${printSeparador("Contenido del tanque")}
		
		<br>	
		
		<table width = "80%">
		<tr>
		  	<td colspan = "1">&#160;</td>
		  	<td colspan = "1">Temp. Diaria Prom.<br>Superficie Líquido</td>
		  	<td>Temp. Diaria Prom.<br>Seno del Líquido</td>
		  	<td>&#160;</td>
		  	<td colspan = "1" >Presión de vapor</td>
		  	<td >Peso<br>Mol.<br>Vapor</td>
		  	<td>&#160;</td>
		  	<td >Peso<br>Mol.<br>Líquido</td>
		  	<td>&#160;</td>
		</tr>
		<tr>
			<td width = "180">Componente</td>
			<td width = "40" ><span class="unitsImp">(°F)</span> <span class="unitsSI">(°C)</span></td>
			<td width = "30" ><span class="unitsImp">(°F)</span> <span class="unitsSI">(°C)</span></td>
			<td width = "20">&#160;</td>
			<td width = "40" ><span class="unitsImp">(psia)</span> <span class="unitsSI">(kPa)</span></td>
			<td width = "30" ><span class="unitsImp">(lb/lb-mol)</span> <span class="unitsSI">(g/mol)</span></td>
			<td width = "20">&#160;</td>
			<td width = "30" ><span class="unitsImp">(lb/lb-mol)</span> <span class="unitsSI">(g/mol)</span></td>
			<td width = "20">&#160;</td>
		</tr>
		<tr>	
		   	<td colspan = "19"><hr/></td>
		</tr>
		<tr>
	` 

	if (liquidCategory == "Other organic liquids") {  
		report+=`		
		   	<td> ${ c.compoundName } </td>
		`
	} else {
		report+=`		
			<td> ${ c.liquidName } </td>
		`
	};	
			
	report+=`
	   	<td > ${ parseFloat(o.avgSurfaceTemp).toFixed(2) } </td>
	   	<td >  ${ parseFloat(o.avgBulkTemp).toFixed(2) } </td>
	   	<td>&#160;</td>
	   	<td > ${ parseFloat(o.vaporPressure).toFixed(2)} </td>
	`

	if (liquidCategory == "Other organic liquids") {  
		report+=`	
			<td > ${ c.molWeight } </td>
		`
	} else {
		report+=`
			<td > ${ c.vapMolWeight } </td>
		 `
	};

	if (liquidCategory == "Other organic liquids") {  
		report+=`		
			<td > ${ c.molWeight } </td>
		`
	} else {
		report+=`
			<td > ${ c.liqMolWeight } </td>
		`
	};		   	

	report+=`
			<td>&#160;</td>
		</tr>
		</table>
		
		<p style="page-break-before: always"></p>
		
		${printSeparador("Detalle de cálculos (según indicaciones del AP-42)")}
		
		<h3>Cálculo de emisiones anuales</h3>
	
		<table>
		<tr>
			<td colspan = "3"><hr/></td>
		</tr>
	`

	for (let i=0; i< resultadosIntermedios.length; i++){
		report+=`
			<tr>
				<td>&#160;</td> 
				<td width="180">${resultadosIntermedios[i].varName}: </td>
				<td width="30" >${parseFloat(resultadosIntermedios[i].value).toFixed(2)}  </td> 
			</tr>
		`
	};

	report+=`
		<tr>
			<td colspan = "3"><hr/></td>
		</tr>
		</table>

		<p style="page-break-before: always"></p>	

		<!-- Reporte de resultados resumen -->

		${printSeparador("Emisiones totales del tanque")}

		<h3>Reporte de emisiones</h3>
	`
	
	if( t.type== 'VFR' ||  t.type == 'HFR'){
		
		report+=`
			<table width = "80%" border = "1">
				<tr>
					<td width = "200">&#160;</td>
					<td colspan = "3" >Pérdidas<span class="unitsImp">(lbs/año)</span> <span class="unitsSI">(kg/año)</span></td>
				</tr>
				<tr>
					<td>Componente</td>
					<td width = "140" >Pérdidas por llenado/vaciado</td>
					<td width = "140" >Pérdidas almacenamiento</td>
					<td width = "140" >Emisiones totales</td>
				</tr>
				<tr>
		`	
		
		if (liquidCategory == "Other organic liquids") {  
			report+=`		
				<td> ${ c.compoundName } </td>
			`
		} else {
			report+=`		
				<td> ${ c.liquidName } </td>
			`
		};	

		report+=`		
					<td width = "140" > ${ parseFloat(o.workingLosses).toFixed(2) } </td>		
					<td width = "140" > ${ parseFloat(o.standingLosses).toFixed(2) } </td>	
					<td width = "140" > ${ parseFloat(o.totalLosses).toFixed(2) } </td>
				</tr>
			</table>
		`;
			
	} else {
		
		report+=`			
			<table width = "80%" border = "1">
				<tr>
					<td width = "200">&#160;</td>
					<td colspan = "5" >Pérdidas <span class="unitsImp">(lbs/año)</span> <span class="unitsSI">(kg/año)</span></td>
				</tr>
				<tr>
					<td>Componente</td>
					<td width = "140" >Pérdidas sello</td>
					<td width = "140" >Pérdidas vaciado</td>
					<td width = "140" >Pérdidas accesorios</td>
					<td width = "140" >Pérdidas costuras</td>
					<td width = "140" >Emisiones totales</td>
				</tr>
		`		
					
		if (liquidCategory == "Other organic liquids") {  
			report+=`		
				<td> ${ c.compoundName } </td>
			`
		} else {
			report+=`		
				<td> ${ c.liquidName } </td>
			`
		};	
			
		report+=`		
					<td width = "140" > ${ parseFloat(o.rimSealLosses).toFixed(2) } </td>		
					<td width = "140" > ${ parseFloat(o.workingLosses).toFixed(2) } </td>	
					<td width = "140" > ${ parseFloat(o.deckFittingLosses).toFixed(2) } </td>
					<td width = "140" > ${ parseFloat(o.deckSeamLosses).toFixed(2) } </td>	
					<td width = "140" > ${ parseFloat(o.totalLosses).toFixed(2) } </td>	
				</tr>
			</table>
		`;		
	};

	report+=`	
		<p style="page-break-before: always"></p>
		<br>
	    	 <center><button onclick='window.print()'>Imprimir reporte</button></center>
	    <br>
		
		</section>
		
		<style>
			table > * {
				font-family: arial;
				font-size: 11pt;
			};
		</style>
		
		<script>unitsOut="${unitsOut}"</script>
		<script src="js/output.js"></script>

		<script>
			formatInputs();
		</script>
		
		</body>
		</html>
	`;

	return report;
};


//=====================================================================

function printSeparador(sectionTitle){
	
	str=`	
		<center>
			<h1 style="color:#303030;">HERRAMIENTA TANQUES - FAUBA</h1>
			<h2>Reporte de Emisiones - Formato Detallado </h2>
			<h2>${sectionTitle}</h2>
		</center> 
		<br>
	`;
	
	return str;
};

formatInputs=function() {
	if (unitsOut == "Imperial") {
		var unitsSI = document.getElementsByClassName('unitsSI');
		for (var i=0; i<unitsSI.length; i++) {
			unitsSI[i].style.display = "none";
		};
		var unitsImp = document.getElementsByClassName('unitsImp');
		for (var i=0; i<unitsImp.length; i++) {
			unitsImp[i].style.display = "";
		};
	} else {
		var unitsSI = document.getElementsByClassName('unitsSI');
		for (var i=0; i<unitsSI.length; i++) {
			unitsSI[i].style.display = "";
		};
		var unitsImp = document.getElementsByClassName('unitsImp');
		for (var i=0; i<unitsImp.length; i++) {
			unitsImp[i].style.display = "none";
		};
	};
};


