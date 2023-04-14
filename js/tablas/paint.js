//Table 7.1-6: Paint Solar Absorptance

function getPaintProperties() {
	//declare objects:
	var paint1 = {paintName:"white", new:0.17, average:0.25, aged:0.34};
	var paint2 = {paintName:"aluminum: specular", new:0.39, average:0.44, aged:0.49};
	var paint3 = {paintName:"aluminum: diffuse", new:0.6, average:0.64, aged:0.68};
	var paint4 = {paintName:"beige/cream", new:0.35, average:0.42, aged:0.49};
	var paint5 = {paintName:"black", new:0.97, average:0.97, aged:0.97};
	var paint6 = {paintName:"brown", new:0.58, average:0.62, aged:0.67};
	var paint7 = {paintName:"gray: light", new:0.54, average:0.58, aged:0.63};
	var paint8 = {paintName:"gray: medium", new:0.68, average:0.71, aged:0.74};
	var paint9 = {paintName:"gray: dark", new:0.89, average:0.9, aged:0.91};
	var paint10 = {paintName:"red: primer", new:0.89, average:0.9, aged:0.91};
	var paint11 = {paintName:"rust: red iron oxide", new:0.38, average:0.44, aged:0.5};
	var paint12 = {paintName:"tan", new:0.43, average:0.49, aged:0.55};
	var paint13 = {paintName:"aluminum: mill finish, unpainted", new:0.1, average:0.12, aged:0.15};
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
