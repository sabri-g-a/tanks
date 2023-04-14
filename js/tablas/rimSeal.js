//Table 7.1-8: Rim Seal Loss Factors for Floating Roof Tanks
function getRimSealProperties() {
	//declare objects:
    var seal1 = {fit:"Average-Fitting Seal", tankConstruction:"welded", type:"Mechanical-shoe seal", secondary:"Primary only", Kra:5.8, Krb:0.3, n:2.1};
	var seal2 = {fit:"Average-Fitting Seal", tankConstruction:"welded", type:"Mechanical-shoe seal", secondary:"Shoe-mounted secondary", Kra:1.6, Krb:0.3, n:1.6};
    var seal3 = {fit:"Average-Fitting Seal", tankConstruction:"welded", type:"Mechanical-shoe seal", secondary:"Rim-mounted secondary", Kra:0.6, Krb:0.4, n:1};
    var seal4 = {fit:"Average-Fitting Seal", tankConstruction:"welded", type:"Liquid-mounted seal", secondary:"Primary only", Kra:1.6, Krb:0.3, n:1.5};
    var seal5 = {fit:"Average-Fitting Seal", tankConstruction:"welded", type:"Liquid-mounted seal", secondary:"Weather shield", Kra:0.7, Krb:0.3, n:1.2};
    var seal6 = {fit:"Average-Fitting Seal", tankConstruction:"welded", type:"Liquid-mounted seal", secondary:"Rim-mounted secondary", Kra:0.3, Krb:0.6, n:0.3};
    var seal7 = {fit:"Average-Fitting Seal", tankConstruction:"welded", type:"Vapor-mounted seal", secondary:"Primary only", Kra:6.7, Krb:0.2, n:3};
    var seal8 = {fit:"Average-Fitting Seal", tankConstruction:"welded", type:"Vapor-mounted seal", secondary:"Weather shield", Kra:3.3, Krb:0.1, n:3};
    var seal9 = {fit:"Average-Fitting Seal", tankConstruction:"welded", type:"Vapor-mounted seal", secondary:"Rim-mounted secondary", Kra:2.2, Krb:0.003, n:4.3};
    var seal10 = {fit:"Average-Fitting Seal", tankConstruction:"riveted", type:"Mechanical-shoe seal", secondary:"Primary only", Kra:10.8, Krb:0.4, n:2};
	var seal11 = {fit:"Average-Fitting Seal", tankConstruction:"riveted", type:"Mechanical-shoe seal", secondary:"Shoe-mounted secondary", Kra:9.2, Krb:0.2, n:1.9};
    var seal12 = {fit:"Average-Fitting Seal", tankConstruction:"riveted", type:"Mechanical-shoe seal", secondary:"Rim-mounted secondary", Kra:1.1, Krb:0.3, n:1.5};
    var seal13 = {fit:"Tight-Fitting Seal", tankConstruction:"welded", type:"Mechanical-shoe seal", secondary:"Primary only", Kra:1.5, Krb:0.4, n:1.9};
	var seal14 = {fit:"Tight-Fitting Seal", tankConstruction:"welded", type:"Mechanical-shoe seal", secondary:"Shoe-mounted secondary", Kra:1, Krb:0.4, n:1.5};
    var seal15 = {fit:"Tight-Fitting Seal", tankConstruction:"welded", type:"Mechanical-shoe seal", secondary:"Rim-mounted secondary", Kra:0.4, Krb:0.4, n:1};
    var seal16 = {fit:"Tight-Fitting Seal", tankConstruction:"welded", type:"Liquid-mounted seal", secondary:"Primary only", Kra:1, Krb:0.08, n:1.8};
    var seal17 = {fit:"Tight-Fitting Seal", tankConstruction:"welded", type:"Liquid-mounted seal", secondary:"Weather shield", Kra:0.4, Krb:0.2, n:1.3};
    var seal18 = {fit:"Tight-Fitting Seal", tankConstruction:"welded", type:"Liquid-mounted seal", secondary:"Rim-mounted secondary", Kra:0.2, Krb:0.4, n:0.4};
    var seal19 = {fit:"Tight-Fitting Seal", tankConstruction:"welded", type:"Vapor-mounted seal", secondary:"Primary only", Kra:5.6, Krb:0.2, n:2.4};
    var seal20 = {fit:"Tight-Fitting Seal", tankConstruction:"welded", type:"Vapor-mounted seal", secondary:"Weather shield", Kra:2.8, Krb:0.1, n:2.3};
    var seal21 = {fit:"Tight-Fitting Seal", tankConstruction:"welded", type:"Vapor-mounted seal", secondary:"Rim-mounted secondary", Kra:2.2, Krb:0.02, n:2.6};
    
	//put objects into array
	var rimSealProp = [seal1, seal2, seal3, seal4, seal5, seal6, seal7 , seal8 , seal9 , seal10, seal11, seal12, seal13, seal14, seal15, seal16, seal17, seal18, seal19, seal20, seal21];
	
	return rimSealProp;
}


function appendSealFitOptions(tankConst) {
        
	databaseRimSeals=getRimSealProperties();
    databaseSpecRimSeals=databaseRimSeals.filter(element=>(element.tankConstruction==tankConst));
    databaseSealFits=[];
    databaseSpecRimSeals.forEach(element => {databaseSealFits.push(element.fit)});
    db=[];
    databaseSealFits.forEach(element => { if(!db.includes(element)) {db.push(element)}});
        
	//Poner las opciones de rimSealFit en el rimSeal input selector del index.html.
        var select = document.getElementById("sealFit");
        select.innerHTML="<option disabled selected value>Seleccionar una opción...</option>";
        for(var i = 0; i < db.length; i++) {
            var option = document.createElement("option"),
                txt = document.createTextNode(db[i]);
            option.appendChild(txt);
            select.appendChild(option);
        };
};

function appendPrimarySealOptions(sealFit,tankConst) {
    databaseRimSeals=getRimSealProperties();
    databaseSpecRimSeals=databaseRimSeals.filter(element=>(element.fit==sealFit && element.tankConstruction==tankConst));
    databasePrimarySeals=[];
    databaseSpecRimSeals.forEach(element => {databasePrimarySeals.push(element.type)});
    db=[];
    databasePrimarySeals.forEach(element => { if(!db.includes(element)) {db.push(element)}});

    //Poner las opciones de primarySeal en el rimSeal input selector del index.html.
    var select = document.getElementById("primarySeal");
    select.innerHTML="<option disabled selected value>Seleccionar una opción...</option>";
    for(var i = 0; i < db.length; i++) {
        var option = document.createElement("option"),
            txt = document.createTextNode(db[i]);
        option.appendChild(txt);
        select.appendChild(option);
    };
}; 

function appendSecondSealOptions(primarySeal,sealFit,tankConst) {
    databaseRimSeals=getRimSealProperties();
    databaseSpecRimSeals=databaseRimSeals.filter(element=>(element.type==primarySeal && element.fit==sealFit && element.tankConstruction==tankConst));
    databaseSecondarySeals=[];
    databaseSpecRimSeals.forEach(element => {databaseSecondarySeals.push(element.secondary)});
    db=[];
    databaseSecondarySeals.forEach(element => { if(!db.includes(element)) {db.push(element)}});

    //Poner las opciones de secondarySeal en el rimSeal input selector del index.html.
    var select = document.getElementById("secondSeal");
    select.innerHTML="<option disabled selected value>Seleccionar una opción...</option>";
    for(var i = 0; i < db.length; i++) {
        var option = document.createElement("option"),
            txt = document.createTextNode(db[i]);
        option.appendChild(txt);
        select.appendChild(option);
    };
};