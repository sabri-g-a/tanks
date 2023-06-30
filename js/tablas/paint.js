//Table 7.1-6: Paint Solar Absorptance

function getPaintProperties() {
	//declare objects:
	var paint1 = {paintName:"Blanco", nuevo:0.17, intermedio:0.25, antigüo:0.34};
	var paint2 = {paintName:"Aluminio reflectivo", nuevo:0.39, intermedio:0.44, antigüo:0.49};
	var paint3 = {paintName:"Aluminio difusivo", nuevo:0.6, intermedio:0.64, antigüo:0.68};
	var paint4 = {paintName:"Beige/crema", nuevo:0.35, intermedio:0.42, antigüo:0.49};
	var paint5 = {paintName:"Negro", nuevo:0.97, intermedio:0.97, antigüo:0.97};
	var paint6 = {paintName:"Marrón", nuevo:0.58, intermedio:0.62, antigüo:0.67};
	var paint7 = {paintName:"Gris claro", nuevo:0.54, intermedio:0.58, antigüo:0.63};
	var paint8 = {paintName:"Gris medio", nuevo:0.68, intermedio:0.71, antigüo:0.74};
	var paint9 = {paintName:"Gris oscuro", nuevo:0.89, intermedio:0.9, antigüo:0.91};
	var paint10 = {paintName:"Rojo (primer)", nuevo:0.89, intermedio:0.9, antigüo:0.91};
	var paint11 = {paintName:"Óxido (rojo óxido)", nuevo:0.38, intermedio:0.44, antigüo:0.5};
	var paint12 = {paintName:"Tostado", nuevo:0.43, intermedio:0.49, antigüo:0.55};
	var paint13 = {paintName:"Aluminio sin esmaltar", nuevo:0.1, intermedio:0.12, antigüo:0.15};
	//put paint objects into array
	var arrayPaintProp = [paint1, paint2, paint3, paint4, paint5, paint6, paint7, paint8, paint9, paint10, paint11, paint12, paint13];	
	
	return arrayPaintProp;
}

function appendShellPaintData() {
	db=getPaintProperties();
	//Poner las opciones de pinturas en el paintShell input selector del index.html.
        var select = document.getElementById("paintShell");
        for(var i = 0; i < db.length; i++) {
            var option = document.createElement("option"),
                txt = document.createTextNode(db[i].paintName);
            option.appendChild(txt);
            select.appendChild(option);
        };
};		

function appendRoofPaintData() { 	
	db=getPaintProperties();	
	//Poner las opciones de pinturas en el paintRoof input selector del index.html.
		var select = document.getElementById("paintRoof");
		for(var i = 0; i < db.length; i++) {
			var option = document.createElement("option"),
				txt = document.createTextNode(db[i].paintName);
			option.appendChild(txt);
			select.appendChild(option);
		};
};		
