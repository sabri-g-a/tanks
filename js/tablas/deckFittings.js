//Table 7.1-12: Deck Fittings Loss Factors

function getDeckFittingsProperties() {
	//declare objects: (RECORDATORIO SABRI: Me faltan agregar un montón)
	var fit1 = {fittingName:"Paso de hombre", fittingType:"Cubierta atornillada y sellada", Kfa:1.6, Kfb:0, m:0.0};
	var fit2 = {fittingName:"Paso de hombre", fittingType:"Cubierta no sellada ni atornillada", Kfa:36, Kfb:5.9, m:1.2};
	var fit3 = {fittingName:"Paso de hombre", fittingType:"Cubierta sellada, no atornillada", Kfa:31, Kfb:5.2, m:1.3};
	var fit4 = {fittingName:"Bocas de paso de las columnas de soporte del techo fijo", fittingType:"Columnas cilíndricas, cubierta deslizante no sellada", Kfa:31, Kfb:0, m:0};
	var fit5 = {fittingName:"Bocas de paso de las columnas de soporte del techo fijo", fittingType:"Columnas cilíndricas, cubierta deslizante sellada", Kfa:25, Kfb:0, m:0};
	var fit6 = {fittingName:"Bocas de paso de las columnas de soporte del techo fijo", fittingType:"Columnas cilíndricas, sello de fibra flexible", Kfa:10, Kfb:0, m:0};
	var fit7 = {fittingName:"Bocas de paso de las columnas de soporte del techo fijo", fittingType:"Columnas reticuladas, cubierta deslizante no sellada", Kfa:51, Kfb:0, m:0};
	var fit8 = {fittingName:"Bocas de paso de las columnas de soporte del techo fijo", fittingType:"Columnas reticuladas, cubierta deslizante sellada", Kfa:33, Kfb:0, m:0};
	var fit9 = {fittingName:"Abertura para caño guía sin ranuras", fittingType:"Cubierta deslizante no sellada",	Kfa:31, Kfb:150, m:1.4};
	var fit10 = {fittingName:"Abertura para caño guía sin ranuras", fittingType:"Cubierta deslizante no sellada, caño con manga", Kfa:25, Kfb:2.2, m:2.1};
	var fit11 = {fittingName:"Abertura para caño guía sin ranuras", fittingType:"Cubierta deslizante sellada", Kfa:25, Kfb:13 , m:2.2};
	var fit12 = {fittingName:"Abertura para caño guía sin ranuras", fittingType:"Cubierta deslizante sellada, caño con limpiador", Kfa:14, Kfb:3.7, m:0.78};
	var fit13 = {fittingName:"Abertura para caño guía sin ranuras", fittingType:"Cubierta deslizante sellada, caño con manga", Kfa:8.6, Kfb:12, m:0.81};
	var fit14 = {fittingName:"Abertura para caño guía ranurado/ boca de muestreo", fittingType:"Cubierta deslizante sellada o no", Kfa:43, Kfb:270, m:1.4};
	var fit15 = {fittingName:"Abertura para caño guía ranurado/ boca de muestreo", fittingType:"Cubierta deslizante con flotante, sellada o no", Kfa:31, Kfb:36, m:2};
	var fit16 = {fittingName:"Abertura para caño guía ranurado/ boca de muestreo", fittingType:"Cubierta deslizante sellada, caño con limpiador", Kfa:41, Kfb:48, m:1.4};
	var fit17 = {fittingName:"Abertura para caño guía ranurado/ boca de muestreo", fittingType:"Cubierta deslizante sellada, caño con manga", Kfa:11, Kfb:46, m:1.4};
	var fit18 = {fittingName:"Abertura para caño guía ranurado/ boca de muestreo", fittingType:"Cubierta deslizante sellada, caño con limpiador y manga", Kfa:8.3, Kfb:4.4, m:1.6};
	var fit19 = {fittingName:"Abertura para caño guía ranurado/ boca de muestreo", fittingType:"Cubierta deslizante sellada, caño con limpiador y flotante", Kfa:21, Kfb:7.9, m:1.8};
	var fit20 = {fittingName:"Abertura para caño guía ranurado/ boca de muestreo", fittingType:"Cubierta deslizante sellada, caño con limpiador, flotante y manga", Kfa:11, Kfb:9.9, m:0.89};
	var fit21 = {fittingName:"Abertura para caño guía ranurado/ boca de muestreo", fittingType:"Cubierta flexible", Kfa:21, Kfb:7.9, m:1.8};
	var fit22 = {fittingName:"Escotilla con medidor automático", fittingType:"Cubierta no atornillada ni sellada", Kfa:14, Kfb:5.4, m:1.1};
	var fit23 = {fittingName:"Soportes plataforma flotante, tanque IFR", fittingType:"Ajustable", Kfa:7.9, Kfb:0, m:0};
	var fit24 = {fittingName:"Escotilla para medidores/ toma de muestras", fittingType:"Sello de fibra slit, 10% de área abierta", Kfa:12, Kfb:0, m:0};
	var fit25 = {fittingName:"Escotilla para medidores/ toma de muestras", fittingType:"Con seguro y sellada", Kfa:0.47, Kfb:0.02, m:0.97};
	var fit26 = {fittingName:"Soportes plataforma flotante, tanque EFR, área de pontones", fittingType:"Ajustable, sin sellado", Kfa:2, Kfb:0.37, m:0.91};	
	var fit27 = {fittingName:"Soportes plataforma flotante, tanque EFR, plataforma doble o área central de plataforma con pontones", fittingType:"Ajustable, sellados", Kfa:0.53, Kfb:0.11, m:0.13};		
	var fit28 = {fittingName:"Válvula rompedora de vacío", fittingType:"Weighted mechanical actuation, gasketed", Kfa:6.2, Kfb:1.2, m:0.94};	
	var fit29 = {fittingName:"Soportes plataforma flotante, tanque EFR, área de pontones", fittingType:"Ajustable, sellados", Kfa:1.3, Kfb:0.08, m:0.65};
	var fit30 = {fittingName:"Soportes plataforma flotante, tanque EFR, área de pontones", fittingType:"Ajustable, sock", Kfa:1.2, Kfb:0.14, m:0.65};
	var fit31 = {fittingName:"Soportes plataforma flotante, tanque EFR, plataforma doble o área central de plataforma con pontones", fittingType:"Ajustable, sin sellado", Kfa:0.82, Kfb:0.53, m:0.14};	
	var fit32 = {fittingName:"Soportes plataforma flotante, tanque EFR, plataforma doble o área central de plataforma con pontones", fittingType:"Ajustable, sock", Kfa:0.49, Kfb:0.16, m:0.14};
	var fit33 = {fittingName:"Abertura para escalera", fittingType:"Cubierta deslizante, sellada", Kfa:56, Kfb:0, m:0};					
	var fit34 = {fittingName:"Abertura para escalera", fittingType:"Cubierta deslizante, sin sellado", Kfa:98, Kfb:0, m:0};	
	var fit35 = {fittingName:"Escotilla para medidores/ toma de muestras", fittingType:"Con seguro y sin sellado", Kfa:2.3, Kfb:0, m:0};
	var fit36 = {fittingName:"Válvula rompedora de vacío", fittingType:"Con seguro y sin sellado", Kfa:7.8, Kfb:0.01, m:4};				
	var fit37 = {fittingName:"Drenaje plataforma", fittingType:"Drenaje con codo", Kfa:1.2, Kfb:0, m:0};		

	//put objects into array
	var deckFittingProp = [fit1, fit2, fit3, fit4, fit5, fit6, fit7, fit8, fit9, fit10, fit11, fit12, fit13, fit14, fit15, fit16, fit17, fit18, fit19, fit20, fit21, fit22, fit23, fit24, fit25, fit26, fit27, fit28, fit29, fit30, fit31, fit32, fit33, fit34, fit35, fit36, fit37];	
	
	return deckFittingProp;
}

let buttonCounter=0;
function appendFittingNames() {
	buttonCounter++;
	databaseDeckFittings=getDeckFittingsProperties();
	databaseFittingNames=[];
	databaseDeckFittings.forEach(element => {databaseFittingNames.push(element.fittingName)});
	db=[];
	databaseFittingNames.forEach(element => { if(!db.includes(element)) {db.push(element)}});
        
	//Poner las opciones de fittingNames en el deckFitting input selector del index.html.
        var select = document.getElementById("fittingName"+buttonCounter);
        for(var i = 0; i < db.length; i++) {
            var option = document.createElement("option"),
                txt = document.createTextNode(db[i]);
            option.appendChild(txt);
            select.appendChild(option);
        };
};

function appendFittingTypes(fittingName,fittingID) {

	databaseDeckFittings=getDeckFittingsProperties();
	db=databaseDeckFittings.filter(element=>(element.fittingName==fittingName));
        
	//Poner las opciones de fittingTypes en el deckFitting input selector del index.html.
        var select = document.getElementById("fittingType"+fittingID);
		select.innerHTML="<option disabled selected value>Seleccionar una opción...</option>";
        for(var i = 0; i < db.length; i++) {
            var option = document.createElement("option"),
                txt = document.createTextNode(db[i].fittingType);
            option.appendChild(txt);
            select.appendChild(option);
        };
};
