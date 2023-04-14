//Table 7.1-12: Deck Fittings Loss Factors

function getDeckFittingsProperties() {
	//declare objects: (RECORDATORIO SABRI: Me faltan agregar un montón)
	var fit1 = {fittingName:"Access hatch", fittingType:"Bolted cover, gasketed", Kfa:1.6, Kfb:0, m:0.0};
	var fit2 = {fittingName:"Access hatch", fittingType:"Unbolted cover, ungasketed", Kfa:36, Kfb:5.9, m:1.2};
	var fit3 = {fittingName:"Access hatch", fittingType:"Unbolted cover, gasketed", Kfa:31, Kfb:5.2, m:1.3};
	var fit4 = {fittingName:"Fixed roof support column well", fittingType:"Round pipe, ungasketed sliding cover", Kfa:31, Kfb:0, m:0};
	var fit5 = {fittingName:"Fixed roof support column well", fittingType:"Round pipe, gasketed sliding cover", Kfa:25, Kfb:0, m:0};
	var fit6 = {fittingName:"Fixed roof support column well", fittingType:"Round pipe, flexible fabric sleeve seal", Kfa:10, Kfb:0, m:0};
	var fit7 = {fittingName:"Fixed roof support column well", fittingType:"Built-up column, ungasketed sliding cover", Kfa:51, Kfb:0, m:0};
	var fit8 = {fittingName:"Fixed roof support column well", fittingType:"Built-up column, gasketed sliding cover", Kfa:33, Kfb:0, m:0};
	var fit9 = {fittingName:"Unslotted guidepole and well", fittingType:"Ungasketed sliding cover",	Kfa:31, Kfb:150, m:1.4};
	var fit10 = {fittingName:"Unslotted guidepole and well", fittingType:"Ungasketed sliding cover w/pole sleeve", Kfa:25, Kfb:2.2, m:2.1};
	var fit11 = {fittingName:"Unslotted guidepole and well", fittingType:"Gasketed sliding cover", Kfa:25, Kfb:13 , m:2.2};
	var fit12 = {fittingName:"Unslotted guidepole and well", fittingType:"Gasketed sliding cover w/pole wiper", Kfa:14, Kfb:3.7, m:0.78};
	var fit13 = {fittingName:"Unslotted guidepole and well", fittingType:"Gasketed sliding cover w/pole sleeve", Kfa:8.6, Kfb:12, m:0.81};
	var fit14 = {fittingName:"Slotted guidepole/sample well", fittingType:"Ungasketed or gasketed sliding cover", Kfa:43, Kfb:270, m:1.4};
	var fit15 = {fittingName:"Slotted guidepole/sample well", fittingType:"Ungasketed or gasketed sliding cover with float", Kfa:31, Kfb:36, m:2};
	var fit16 = {fittingName:"Slotted guidepole/sample well", fittingType:"Gasketed sliding cover w/pole wiper", Kfa:41, Kfb:48, m:1.4};
	var fit17 = {fittingName:"Slotted guidepole/sample well", fittingType:"Gasketed sliding cover w/pole sleeve", Kfa:11, Kfb:46, m:1.4};
	var fit18 = {fittingName:"Slotted guidepole/sample well", fittingType:"Gasketed sliding cover w/pole sleeve and pole wiper", Kfa:8.3, Kfb:4.4, m:1.6};
	var fit19 = {fittingName:"Slotted guidepole/sample well", fittingType:"Gasketed sliding cover with float and pole wiper", Kfa:21, Kfb:7.9, m:1.8};
	var fit20 = {fittingName:"Slotted guidepole/sample well", fittingType:"Gasketed sliding cover with float, pole sleeve and pole wiper", Kfa:11, Kfb:9.9, m:0.89};
	var fit21 = {fittingName:"Slotted guidepole/sample well", fittingType:"Flexible enclosure", Kfa:21, Kfb:7.9, m:1.8};
	var fit22 = {fittingName:"Gauge-float well (automatic gauge)", fittingType:"Unbolted cover, ungasketed", Kfa:14, Kfb:5.4, m:1.1};
	var fit23 = {fittingName:"Deck leg, IFR-type", fittingType:"Adjustable", Kfa:7.9, Kfb:0, m:0};
	var fit24 = {fittingName:"Gauge-hatch/sample port", fittingType:"Slit fabric seal, 10% open area", Kfa:12, Kfb:0, m:0};
	var fit25 = {fittingName:"Gauge-hatch/sample port", fittingType:"Weighted mechanical actuation, gasketed", Kfa:0.47, Kfb:0.02, m:0.97};
	var fit26 = {fittingName:"Deck leg, EFR-type, pontoon area", fittingType:"Adjustable - ungasketed", Kfa:2, Kfb:0.37, m:0.91};	
	var fit27 = {fittingName:"Deck leg, EFR-type, double-deck roof", fittingType:"Adjustable - gasketed", Kfa:0.53, Kfb:0.11, m:0.13};		
	var fit28 = {fittingName:"Vacuum breaker", fittingType:"Weighted mechanical actuation, gasketed", Kfa:6.2, Kfb:1.2, m:0.94};			
	
	//put objects into array
	var deckFittingProp = [fit1, fit2, fit3, fit4, fit5, fit6, fit7, fit8, fit9, fit10, fit11, fit12, fit13, fit14, fit15, fit16, fit17, fit18, fit19, fit20, fit21, fit22, fit23, fit24, fit25, fit26, fit27, fit28];	
	
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
