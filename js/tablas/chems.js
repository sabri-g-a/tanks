//Table 7.1-3: Base de datos de compuestos petroquímicos
function getCompoundData() {
	//declare petroChem objects:
	var petroChem1 = {
		compoundName:"Acetaldehyde", 			//Nombre
		cas:"00075-07-0", 						//CAS
		molWeight:44.05, 						//M_L:"Peso molecular del compuesto, lb/lb-mole",
		density:6.54, 							//W_L:"Average organic liquid density, lb/gal"
		vaporPressure:12.19, 					//P_VA:" True vapor pressure at 60°F, psia"
		A:8.063, 								//A:"Constant in vapor pressure equation, dimensionless" // ACLARACIÓN: Las unidades de temperatura y presión asociadas a los valores de estas constantes (A, B y C) tienen que ser °C y mmHg respectivamente.
		B:1637.1, 								//B:"Constant in vapor pressure equation, °C" // ACLARACIÓN: Las unidades de temperatura y presión asociadas a los valores de estas constantes (A, B y C) tienen que ser °C y mmHg respectivamente.
		C:295.47, 								//C:"Constant in vapor pressure equation, °C" // ACLARACIÓN: Las unidades de temperatura y presión asociadas a los valores de estas constantes (A, B y C) tienen que ser °C y mmHg respectivamente.
		Tmin:32, 								//a temperaturas menores que Tmin, la ecuación de Antoine pierde exactitud, °F
		Tmax:94, 								//a temperaturas mayores que Tmax, la ecuación de Antoine pierde exactitud, °F
		N_BP:69									//N_BP: "Normal Boiling Point, °F" 
	};
	var petroChem2 = {compoundName:"Acetic acid", cas:"00064-19-7", molWeight:60.05, density:8.72, vaporPressure:0.176, A:7.557, B:1642.5, C:233.39, Tmin:63, Tmax:244, N_BP:244};
	var petroChem3 = {compoundName:"Acetic anhydride {acetic acid anhydride}", cas:"00108-24-7", molWeight:102.09, density:9.03, vaporPressure:0.053, A:7.122, B:1427.8, C:198.04, Tmin:145, Tmax:283, N_BP:282};
	var petroChem4 = {compoundName:"Acetone", cas:"00067-64-1", molWeight:58.08, density:6.55, vaporPressure:2.921, A:7.3, B:1312.3, C:240.71, Tmin:7, Tmax:454, N_BP:133};
	var petroChem5 = {compoundName:"Acetonitrile", cas:"00075-05-8", molWeight:41.05, density:6.56, vaporPressure:1.09, A:7.154, B:1355.4, C:235.3, Tmin:59, Tmax:192, N_BP:179};
	var petroChem6 = {compoundName:"Acrylamide", cas:"00079-06-1", molWeight:71.08, density:9.36, vaporPressure:0.0000857, A:11.293, B:3939.9, C:273.16, Tmin:"", Tmax:"", N_BP:379};
	var petroChem7 = {compoundName:"Acrylic acid {2-propenoic acid}", cas:"00079-10-7", molWeight:72.06, density:8.77, vaporPressure:1.344, A:5.652, B:648.6, C:154.68, Tmin:68, Tmax:158, N_BP:282};
	var petroChem8 = {compoundName:"Acrylonitrile {2-propenenitrile}", cas:"00107-13-1", molWeight:53.06, density:6.73, vaporPressure:1.383, A:6.942, B:1255.9, C:231.3, Tmin:-60, Tmax:172, N_BP:172};
	var petroChem9 = {compoundName:"Allyl alcohol", cas:"00107-18-6", molWeight:58.08, density:7.13, vaporPressure:0.326, A:11.658, B:4510.2, C:416.8, Tmin:70, Tmax:207, N_BP:206};
	var petroChem10 = {compoundName:"Allyl chloride {3-chloro-1-propene}", cas:"00107-05-1", molWeight:76.52, density:7.83, vaporPressure:4.702, A:5.297, B:418.4, C:128.68, Tmin:55, Tmax:111, N_BP:113};
	var petroChem11 = {compoundName:"Aniline", cas:"00062-53-3", molWeight:93.13, density:8.53, vaporPressure:0.0058, A:7.221, B:1661.9, C:199.1, Tmin:88, Tmax:363, N_BP:363};
	var petroChem12 = {compoundName:"Benzene", cas:"00071-43-2", molWeight:78.11, density:7.32, vaporPressure:1.171, A:6.906, B:1211, C:220.79, Tmin:46, Tmax:217, N_BP:176};
	var petroChem13 = {compoundName:"Benz[a]anthracene", cas:"00056-55-3", molWeight:228.29, density:"", vaporPressure:0.000000000792, A:11.528, B:5461, C:273.15, Tmin:219, Tmax:260, N_BP:820};
	var petroChem14 = {compoundName:"Benzo[a]pyrene", cas:"00050-32-8", molWeight:252.31, density:"", vaporPressure:0.0000000000229, A:12.482, B:6181, C:273.15, Tmin:185, Tmax:316, N_BP:923};
	var petroChem15 = {compoundName:"Benzo[ghi]perylene", cas:"00191-24-2", molWeight:276.33, density:"", vaporPressure:0.000000000000207, A:11.82, B:6580, C:273.15, Tmin:391, Tmax:513, N_BP:""};
	var petroChem16 = {compoundName:"Biphenyl", cas:"00092-52-4", molWeight:154.21, density:8.68, vaporPressure:0.000237, A:7.245, B:1998.7, C:202.73, Tmin:156, Tmax:520, N_BP:489};
	var petroChem17 = {compoundName:"Butadiene (1,3) {divinyl}", cas:"00106-99-0", molWeight:54.09, density:5.13, vaporPressure:30.22, A:6.873, B:941.7, C:240.4, Tmin:-104, Tmax:29, N_BP:24};
	var petroChem18 = {compoundName:"Butane (n)", cas:"00106-97-8", molWeight:58.12, density:4.78, vaporPressure:25.67, A:6.725, B:909.7, C:237, Tmin:-108, Tmax:31, N_BP:32};
	var petroChem19 = {compoundName:"Butene (1)", cas:"00106-98-9", molWeight:56.11, density:4.91, vaporPressure:30.83, A:7.122, B:1099.2, C:264.89, Tmin:-108, Tmax:25, N_BP:21};
	var petroChem20 = {compoundName:"Butene (cis-2)", cas:"00590-18-1", molWeight:56.11, density:5.14, vaporPressure:22.62, A:6.863, B:957.1, C:236.65, Tmin:-94, Tmax:73, N_BP:39};
	var petroChem21 = {compoundName:"Butene (2-methyl-1)", cas:"00563-46-2", molWeight:70.13, density:5.43, vaporPressure:8.257, A:6.862, B:1047.8, C:232.06, Tmin:34, Tmax:145, N_BP:88};
	var petroChem22 = {compoundName:"Butene (trans-2)", cas:"00624-64-6", molWeight:56.11, density:5, vaporPressure:24.97, A:6.919, B:982.2, C:242.38, Tmin:-97, Tmax:34, N_BP:34};
	var petroChem23 = {compoundName:"Butyl alcohol (n) {butanol (1)}", cas:"00071-36-3", molWeight:74.12, density:6.76, vaporPressure:0.062, A:7.421, B:1351.6, C:179.81, Tmin:73, Tmax:244, N_BP:243};
	var petroChem24 = {compoundName:"Butyl alcohol (tert) {1,1-dimethyl ethanol}", cas:"00075-65-0", molWeight:74.12, density:6.58, vaporPressure:0.424, A:7.373, B:1174.9, C:179.23, Tmin:103, Tmax:180, N_BP:180};
	var petroChem25 = {compoundName:"Butyl chloride (-n) {1-chloro-butane}", cas:"00109-69-3", molWeight:92.57, density:7.4, vaporPressure:1.255, A:6.871, B:1182.9, C:218.27, Tmin:2, Tmax:173, N_BP:170};
	var petroChem26 = {compoundName:"Butyl ether (di-tert)", cas:"06163-66-2", molWeight:130.23, density:6.39, vaporPressure:0.381, A:6.59, B:1157.7, C:203.05, Tmin:39, Tmax:228, N_BP:224};
	var petroChem27 = {compoundName:"Carbon disulfide", cas:"00075-15-0", molWeight:76.14, density:10.54, vaporPressure:4.817, A:6.942, B:1168.6, C:241.53, Tmin:38, Tmax:176, N_BP:115};
	var petroChem28 = {compoundName:"Carbon tetrachloride", cas:"00056-23-5", molWeight:153.82, density:13.31, vaporPressure:1.431, A:6.898, B:1221.8, C:227.41, Tmin:68, Tmax:172, N_BP:170};
	var petroChem29 = {compoundName:"Chlorobenzene", cas:"00108-90-7", molWeight:112.56, density:9.23, vaporPressure:0.134, A:6.986, B:1435.7, C:218.03, Tmin:144, Tmax:269, N_BP:269};
	var petroChem30 = {compoundName:"Chlorobutane (2)", cas:"00078-86-4", molWeight:92.57, density:7.27, vaporPressure:1.255, A:6.871, B:1182.9, C:218.27, Tmin:2, Tmax:173, N_BP:170};
	var petroChem31 = {compoundName:"Chloroform", cas:"00067-66-3", molWeight:119.38, density:12.38, vaporPressure:2.468, A:7.083, B:1233.1, C:232.2, Tmin:-73, Tmax:142, N_BP:142};
	var petroChem32 = {compoundName:"Chloroprene {2-chloro-1,3-butadiene}", cas:"00126-99-8", molWeight:88.54, density:7.98, vaporPressure:2.736, A:6.291, B:841.9, C:187.79, Tmin:68, Tmax:140, N_BP:140};
	var petroChem33 = {compoundName:"Chlorotoluene (o) {1-chloro-2methylbenzene}", cas:"00095-49-8", molWeight:126.58, density:9.04, vaporPressure:0.039, A:7.363, B:1768.1, C:234.76, Tmin:42, Tmax:319, N_BP:318};
	var petroChem34 = {compoundName:"Chrysene {benzo[a]phenanthrene}", cas:"00218-01-9", molWeight:228.29, density:10.63, vaporPressure:0.0000000000186, A:12.32, B:6160, C:273.15, Tmin:185, Tmax:374, N_BP:838};
	var petroChem35 = {compoundName:"Cresol (m) {3-methyl-phenol}", cas:"00108-39-4", molWeight:108.14, density:8.63, vaporPressure:0.0013, A:7.477, B:1833.1, C:196.74, Tmin:301, Tmax:394, N_BP:396};
	var petroChem36 = {compoundName:"Cresol (o) {2-methyl-phenol}", cas:"00095-48-7", molWeight:108.14, density:9.47, vaporPressure:0.0016, A:6.843, B:1391.3, C:160.18, Tmin:248, Tmax:376, N_BP:376};
	var petroChem37 = {compoundName:"Cresol (p) {4-methyl-phenol}", cas:"00106-44-5", molWeight:108.14, density:8.5, vaporPressure:0.00062, A:7.016, B:1498.6, C:160.55, Tmin:262, Tmax:395, N_BP:395};
	var petroChem38 = {compoundName:"Cyclohexane", cas:"00110-82-7", molWeight:84.16, density:6.46, vaporPressure:1.212, A:6.845, B:1203.5, C:222.86, Tmin:68, Tmax:179, N_BP:177};
	var petroChem39 = {compoundName:"Cyclohexanol", cas:"00108-93-0", molWeight:100.16, density:8.03, vaporPressure:0.0009, A:5.956, B:777.4, C:91.11, Tmin:201, Tmax:321, N_BP:320};
	var petroChem40 = {compoundName:"Cyclohexanone", cas:"00108-94-1", molWeight:98.14, density:7.91, vaporPressure:0.0042, A:5.978, B:1495.5, C:209.55, Tmin:193, Tmax:330, N_BP:311};
	var petroChem41 = {compoundName:"Cyclohexene", cas:"00110-83-8", molWeight:82.14, density:6.77, vaporPressure:0.11, A:5.872, B:1221.9, C:223.17, Tmin:98, Tmax:196, N_BP:181};
	var petroChem42 = {compoundName:"Cyclopentane", cas:"00287-92-3", molWeight:70.13, density:6.22, vaporPressure:4.171, A:6.878, B:1119.2, C:230.74, Tmin:60, Tmax:122, N_BP:121};
	var petroChem43 = {compoundName:"Cyclopentanone", cas:"00120-92-3", molWeight:84.12, density:7.92, vaporPressure:0.13, A:3.958, B:376.4, C:104.65, Tmin:32, Tmax:78, N_BP:266};
	var petroChem44 = {compoundName:"Cyclopentene", cas:"00142-29-0", molWeight:68.12, density:6.44, vaporPressure:3.264, A:6.921, B:1121.8, C:223.45, Tmin:"", Tmax:"", N_BP:111};
	var petroChem45 = {compoundName:"Decane (-n)", cas:"00124-18-5", molWeight:142.28, density:6.09, vaporPressure:0.011, A:3.085, B:440.6, C:116.25, Tmin:-21, Tmax:99, N_BP:345};
	var petroChem46 = {compoundName:"Dibromopropane (1,2)", cas:"00078-75-1", molWeight:201.89, density:16.13, vaporPressure:0.088, A:7.314, B:1667, C:234.85, Tmin:19, Tmax:287, N_BP:286};
	var petroChem47 = {compoundName:"Dibromopropane (1,3)", cas:"00109-64-8", molWeight:201.89, density:16.55, vaporPressure:0.029, A:7.309, B:1776.7, C:233.46, Tmin:49, Tmax:333, N_BP:314};
	var petroChem48 = {compoundName:"Dichloroethane (1,1)", cas:"00075-34-3", molWeight:98.96, density:9.81, vaporPressure:2.863, A:7.097, B:1229.2, C:233.95, Tmin:-77, Tmax:135, N_BP:135};
	var petroChem49 = {compoundName:"Dichloroethane (1,2)", cas:"00107-06-2", molWeight:98.96, density:10.4, vaporPressure:0.961, A:7.46, B:1521.8, C:248.48, Tmin:-23, Tmax:211, N_BP:182};
	var petroChem50 = {compoundName:"Dichloroethylene (1,2) {1,2 dichloroethene}", cas:"00540-59-0", molWeight:96.94, density:10.76, vaporPressure:2.579, A:7.022, B:1205.4, C:230.6, Tmin:32, Tmax:183, N_BP:141};
	var petroChem51 = {compoundName:"Dichloroethylene (trans-1,2)", cas:"00156-60-5", molWeight:96.94, density:10.49, vaporPressure:4.333, A:6.965, B:1141.9, C:231.9, Tmin:-36, Tmax:185, N_BP:118};
	var petroChem52 = {compoundName:"Dichlorotoluene (3,4)", cas:"00095-75-0", molWeight:161.03, density:10.49, vaporPressure:0.0029, A:7.344, B:1882.5, C:215, Tmin:32, Tmax:221, N_BP:408};
	var petroChem53 = {compoundName:"Diethoxyethane (1,1)", cas:"00105-57-7", molWeight:118.17, density:6.89, vaporPressure:0.307, A:7.625, B:1574, C:229.47, Tmin:-10, Tmax:216, N_BP:212};
	var petroChem54 = {compoundName:"Diethoxymethane", cas:"00462-95-3", molWeight:104.15, density:6.94, vaporPressure:0.81, A:6.986, B:1270.2, C:221.26, Tmin:32, Tmax:167, N_BP:191};
	var petroChem55 = {compoundName:"Diethyl (n,n) aniline {N,N–diethylbenzenamine}", cas:"00091-66-7", molWeight:149.23, density:7.77, vaporPressure:0.0031, A:8.258, B:2652.8, C:277.32, Tmin:122, Tmax:425, N_BP:422};
	var petroChem56 = {compoundName:"Diethyl ketone {3-pentanone}", cas:"00096-22-0", molWeight:86.13, density:6.76, vaporPressure:0.423, A:5.741, B:716.2, C:147.17, Tmin:97, Tmax:215, N_BP:215};
	var petroChem57 = {compoundName:"Diethyl sulfide", cas:"00352-93-2", molWeight:90.19, density:6.98, vaporPressure:0.749, A:7.541, B:1560.5, C:246.59, Tmin:-39, Tmax:190, N_BP:197};
	var petroChem58 = {compoundName:"Diethylamine {N-ethyl ethanamine}", cas:"00109-89-7", molWeight:73.14, density:5.89, vaporPressure:2.712, A:5.737, B:559.1, C:140.18, Tmin:89, Tmax:141, N_BP:132};
	var petroChem59 = {compoundName:"Diethylbenzene (1,2)", cas:"00135-01-3", molWeight:134.22, density:7.34, vaporPressure:0.0094, A:6.99, B:1577.9, C:200.55, Tmin:206, Tmax:364, N_BP:361};
	var petroChem60 = {compoundName:"Diethylbenzene (1,3)", cas:"00141-93-5", molWeight:134.22, density:7.18, vaporPressure:0.01, A:7.006, B:1576.3, C:201, Tmin:203, Tmax:360, N_BP:358};
	var petroChem61 = {compoundName:"Diethylbenzene (1,4)", cas:"00105-05-5", molWeight:134.22, density:7.2, vaporPressure:0.01, A:7.001, B:1589.3, C:202.02, Tmin:206, Tmax:365, N_BP:363};
	var petroChem62 = {compoundName:"Di-isopropyl ether", cas:"00108-20-3", molWeight:102.17, density:6.04, vaporPressure:1.877, A:6.842, B:1135, C:218.23, Tmin:74, Tmax:153, N_BP:155};
	var petroChem63 = {compoundName:"Dimethoxyethane (1,2)", cas:"00110-71-4", molWeight:90.12, density:7.25, vaporPressure:0.966, A:6.713, B:1260.5, C:235.83, Tmin:-55, Tmax:199, N_BP:185};
	var petroChem64 = {compoundName:"Dimethyl formamide (n,n)", cas:"00068-12-2", molWeight:73.09, density:7.88, vaporPressure:0.04, A:6.806, B:1337.7, C:190.5, Tmin:86, Tmax:194, N_BP:307};
	var petroChem65 = {compoundName:"Dimethyl hydrazine (1,1)", cas:"00057-14-7", molWeight:60.1, density:6.6, vaporPressure:1.896, A:7.588, B:1388.5, C:232.54, Tmin:-32, Tmax:68, N_BP:146};
	var petroChem66 = {compoundName:"Dimethyl phthalate", cas:"00131-11-3", molWeight:194.18, density:9.94, vaporPressure:0.0000000225, A:4.522, B:700.3, C:51.42, Tmin:180, Tmax:304, N_BP:540};
	var petroChem67 = {compoundName:"Dimethylbutane (2,3)", cas:"00079-29-8", molWeight:86.18, density:5.52, vaporPressure:3.064, A:6.81, B:1127.2, C:228.95, Tmin:58, Tmax:138, N_BP:136};
	var petroChem68 = {compoundName:"Dimethylcyclopentane (1,1)", cas:"01638-26-2", molWeight:98.19, density:6.26, vaporPressure:0.932, A:6.83, B:1226.6, C:222.76, Tmin:60, Tmax:192, N_BP:190};
	var petroChem69 = {compoundName:"Dimethylpentane (2,2)", cas:"00590-35-2", molWeight:100.2, density:5.63, vaporPressure:1.315, A:6.815, B:1190.3, C:223.34, Tmin:60, Tmax:176, N_BP:174};
	var petroChem70 = {compoundName:"Dimethylpentane (2,3)", cas:"00565-59-3", molWeight:100.2, density:5.8, vaporPressure:0.842, A:6.862, B:1242.6, C:222.34, Tmin:64, Tmax:195, N_BP:194};
	var petroChem71 = {compoundName:"Dimethylpentane (2,4)", cas:"00108-08-7", molWeight:100.2, density:5.62, vaporPressure:1.221, A:6.836, B:1197.6, C:222.27, Tmin:57, Tmax:178, N_BP:177};
	var petroChem72 = {compoundName:"Dimethylpentane (3,3)", cas:"00562-49-2", molWeight:100.2, density:5.79, vaporPressure:1.029, A:6.831, B:1231, C:225.58, Tmin:56, Tmax:189, N_BP:187};
	var petroChem73 = {compoundName:"Dioxane (1,4)", cas:"00123-91-1", molWeight:88.11, density:8.63, vaporPressure:0.439, A:7.456, B:1570.1, C:241.85, Tmin:68, Tmax:221, N_BP:214};
	var petroChem74 = {compoundName:"Dipropyl ether {di-n-propyl ether}", cas:"00111-43-3", molWeight:102.17, density:6.23, vaporPressure:0.754, A:6.945, B:1254.8, C:218.82, Tmin:80, Tmax:192, N_BP:194};
	var petroChem75 = {compoundName:"Dodecane (n)", cas:"00112-40-3", molWeight:170.33, density:6.25, vaporPressure:0.00093, A:6.981, B:1625.9, C:180.31, Tmin:259, Tmax:423, N_BP:421};
	var petroChem76 = {compoundName:"Epichlorohydrin {chloromethyl oxirane}", cas:"00106-89-8", molWeight:92.52, density:9.85, vaporPressure:0.194, A:8.229, B:2086.8, C:273.16, Tmin:"", Tmax:"", N_BP:241};
	var petroChem77 = {compoundName:"Ethane", cas:"00074-84-0", molWeight:30.07, density:"", vaporPressure:472, A:6.813, B:659.7, C:256.431, Tmin:-215, Tmax:-100, N_BP:-127};
	var petroChem78 = {compoundName:"Ethanolamine (mono)", cas:"00141-43-5", molWeight:61.08, density:8.5, vaporPressure:0.002, A:7.168, B:1408.9, C:157.06, Tmin:150, Tmax:340, N_BP:339};
	var petroChem79 = {compoundName:"Ethyl acetate", cas:"00141-78-6", molWeight:88.11, density:7.51, vaporPressure:1.135, A:7.103, B:1245.7, C:217.96, Tmin:60, Tmax:168, N_BP:171};
	var petroChem80 = {compoundName:"Ethyl acrylate {ethyl ester 2-propenoic acid}", cas:"00140-88-5", molWeight:100.12, density:7.71, vaporPressure:0.445, A:7.15, B:1366.1, C:220.47, Tmin:-21, Tmax:211, N_BP:211};
	var petroChem81 = {compoundName:"Ethyl alcohol {ethanol}", cas:"00064-17-5", molWeight:46.07, density:6.59, vaporPressure:0.648, A:8.247, B:1670.4, C:232.96, Tmin:32, Tmax:173, N_BP:173};
	var petroChem82 = {compoundName:"Ethyl chloride", cas:"00075-00-3", molWeight:64.51, density:7.43, vaporPressure:16.63, A:7.037, B:1052.8, C:241.07, Tmin:-69, Tmax:55, N_BP:61};
	var petroChem83 = {compoundName:"Ethyl ether {diethyl ether}", cas:"00060-29-7", molWeight:74.12, density:5.96, vaporPressure:6.675, A:6.897, B:1062.6, C:228.22, Tmin:-10, Tmax:132, N_BP:94};
	var petroChem84 = {compoundName:"Ethylamine", cas:"00075-04-7", molWeight:45.08, density:5.65, vaporPressure:14.08, A:7.405, B:1203.8, C:249.43, Tmin:62, Tmax:349, N_BP:64};
	var petroChem85 = {compoundName:"Ethylbenzene", cas:"00100-41-4", molWeight:106.17, density:7.24, vaporPressure:0.104, A:6.95, B:1419.3, C:212.61, Tmin:134, Tmax:279, N_BP:277};
	var petroChem86 = {compoundName:"Ethylcyclopentane", cas:"01640-89-7", molWeight:98.19, density:6.4, vaporPressure:0.475, A:6.898, B:1305, C:221.4, Tmin:84, Tmax:220, N_BP:218};
	var petroChem87 = {compoundName:"Ethylene {ethene}", cas:"00074-85-1", molWeight:28.05, density:4.74, vaporPressure:749, A:6.748, B:584.1, C:254.84, Tmin:-191, Tmax:-120, N_BP:-155};
	var petroChem88 = {compoundName:"Ethyleneoxide", cas:"00075-21-8", molWeight:44.05, density:7.365, vaporPressure:17.84, A:8.722, B:2022.8, C:335.81, Tmin:32, Tmax:89, N_BP:53};
	var petroChem89 = {compoundName:"Ethylpentane (3)", cas:"00617-78-7", molWeight:100.2, density:5.83, vaporPressure:0.701, A:6.88, B:1254.1, C:220.15, Tmin:70, Tmax:202, N_BP:200};
	var petroChem90 = {compoundName:"Fluoranthene", cas:"00206-44-0", molWeight:202.25, density:10.45, vaporPressure:0.0000000396, A:12.836, B:5348.1, C:273.15, Tmin:77, Tmax:230, N_BP:723};
	var petroChem91 = {compoundName:"Fluorobenzene", cas:"00462-06-6", molWeight:96.1, density:8.53, vaporPressure:0.936, A:7.237, B:1409.8, C:238.36, Tmin:0, Tmax:183, N_BP:185};
	var petroChem92 = {compoundName:"Formic acid", cas:"00064-18-6", molWeight:46.03, density:10.18, vaporPressure:0.516, A:4.876, B:515, C:133.74, Tmin:33, Tmax:93, N_BP:213};
	var petroChem93 = {compoundName:"Freon 11 {trichlorofluoromethane}", cas:"00075-69-4", molWeight:137.37, density:12.48, vaporPressure:10.93, A:6.884, B:1043, C:236.88, Tmin:"", Tmax:"", N_BP:75};
	var petroChem94 = {compoundName:"Furan", cas:"00110-00-9", molWeight:68.07, density:7.94, vaporPressure:7.963, A:6.975, B:1060.8, C:227.73, Tmin:37, Tmax:143, N_BP:89};
	var petroChem95 = {compoundName:"Furfural {2-furancarboxaldehyde}", cas:"00098-01-1", molWeight:96.09, density:9.68, vaporPressure:0.018, A:6.969, B:1430.1, C:188.7, Tmin:133, Tmax:321, N_BP:323};
	var petroChem96 = {compoundName:"Heneicosane (n)", cas:"00629-94-7", molWeight:296.57, density:6.61, vaporPressure:0.000000623, A:8.796, B:3571.2, C:253.2, Tmin:307, Tmax:663, N_BP:679};
	var petroChem97 = {compoundName:"Heptane (n)", cas:"00142-82-5", molWeight:100.2, density:5.71, vaporPressure:0.541, A:6.903, B:1268.6, C:216.95, Tmin:79, Tmax:211, N_BP:209};
	var petroChem98 = {compoundName:"Heptene (1)", cas:"00592-76-7", molWeight:98.19, density:5.82, vaporPressure:0.752, A:7.093, B:1400.7, C:238.96, Tmin:32, Tmax:192, N_BP:201};
	var petroChem99 = {compoundName:"Hexadiene (1,5)", cas:"00592-42-7", molWeight:82.14, density:5.74, vaporPressure:2.89, A:6.563, B:1008.1, C:214.16, Tmin:32, Tmax:138, N_BP:140};
	var petroChem100 = {compoundName:"Hexane (n)", cas:"00110-54-3", molWeight:86.18, density:5.47, vaporPressure:1.913, A:6.878, B:1171.5, C:224.37, Tmin:55, Tmax:157, N_BP:156};
	var petroChem101 = {compoundName:"Hexanol (1)", cas:"00111-27-3", molWeight:102.17, density:6.79, vaporPressure:0.005, A:7.288, B:1422, C:165.44, Tmin:126, Tmax:315, N_BP:314};
	var petroChem102 = {compoundName:"Hexene (1)", cas:"00592-41-6", molWeight:84.16, density:5.62, vaporPressure:2.378, A:6.866, B:1153, C:225.85, Tmin:61, Tmax:148, N_BP:147};
	var petroChem103 = {compoundName:"Hydrogen cyanide {hydrocyanic acid}", cas:"00074-90-8", molWeight:27.03, density:5.74, vaporPressure:9.931, A:7.549, B:1340.8, C:261.56, Tmin:2, Tmax:115, N_BP:79};
	var petroChem104 = {compoundName:"Isobutane {methylpropane (2)}", cas:"00075-28-5", molWeight:58.12, density:4.6, vaporPressure:38.22, A:6.819, B:912.1, C:243.34, Tmin:-121, Tmax:11, N_BP:12};
	var petroChem105 = {compoundName:"Isobutene {methylpropene (2)}", cas:"00115-11-7", molWeight:56.11, density:4.92, vaporPressure:32.18, A:6.522, B:799.1, C:226.54, Tmin:-70, Tmax:32, N_BP:20};
	var petroChem106 = {compoundName:"Isobutyl alcohol {2-methyl 1-propanol}", cas:"00078-83-1", molWeight:74.12, density:6.69, vaporPressure:0.096, A:7.306, B:1237, C:171.62, Tmin:176, Tmax:240, N_BP:226};
	var petroChem107 = {compoundName:"Isooctane {2,2,4-trimethylpentane}", cas:"00540-84-1", molWeight:114.23, density:5.74, vaporPressure:0.596, A:6.812, B:1257.8, C:220.74, Tmin:76, Tmax:212, N_BP:211};
	var petroChem108 = {compoundName:"Isopentane {2-methyl butane}", cas:"00078-78-4", molWeight:72.15, density:5.18, vaporPressure:9.426, A:6.79, B:1020, C:233.1, Tmin:61, Tmax:83, N_BP:82};
	var petroChem109 = {compoundName:"Isopentene {2-methyl 2-butene}", cas:"00513-35-9", molWeight:70.13, density:5.53, vaporPressure:6.21, A:6.922, B:1098.6, C:233.26, Tmin:37, Tmax:159, N_BP:100};
	var petroChem110 = {compoundName:"Isoprene {2-methyl 1,3-butadiene}", cas:"00078-79-5", molWeight:68.12, density:5.67, vaporPressure:7.446, A:6.091, B:706.9, C:186.1, Tmin:62, Tmax:93, N_BP:93};
	var petroChem111 = {compoundName:"Isopropyl alcohol {isopropanol}", cas:"00067-63-0", molWeight:60.1, density:6.52, vaporPressure:0.443, A:7.736, B:1357.4, C:197.34, Tmin:134, Tmax:193, N_BP:180};
	var petroChem112 = {compoundName:"Isopropyl benzene {cumene}", cas:"00098-82-8", molWeight:120.19, density:7.19, vaporPressure:0.048, A:6.929, B:1455.8, C:207.2, Tmin:158, Tmax:308, N_BP:305};
	var petroChem113 = {compoundName:"Isopropylbenzene (1-methyl-2)", cas:"00527-84-4", molWeight:134.22, density:7.32, vaporPressure:0.017, A:7.417, B:1880.5, C:236.27, Tmin:178, Tmax:355, N_BP:350};
	var petroChem114 = {compoundName:"Methacrylonitrile {2-methyl 2-propenenitrile}", cas:"00126-98-7", molWeight:67.09, density:6.68, vaporPressure:0.886, A:6.999, B:1353.6, C:238.03, Tmin:-48, Tmax:194, N_BP:194};
	var petroChem115 = {compoundName:"Methane", cas:"00074-82-8", molWeight:16.04, density:3.53, vaporPressure:4567, A:7.096, B:516.7, C:284.37, Tmin:-262, Tmax:-117, N_BP:-260};
	var petroChem116 = {compoundName:"Methyl acetate {methyl ester acetic acid}", cas:"00079-20-9", molWeight:74.08, density:7.8, vaporPressure:2.703, A:7.079, B:1164.4, C:220.46, Tmin:35, Tmax:133, N_BP:134};
	var petroChem117 = {compoundName:"Methyl acrylate {methyl ester 2-propenoic acid}", cas:"00096-33-3", molWeight:86.09, density:7.96, vaporPressure:1.058, A:7.198, B:1338.7, C:229.63, Tmin:-47, Tmax:176, N_BP:177};
	var petroChem118 = {compoundName:"Methyl alcohol {methanol}", cas:"00067-56-1", molWeight:32.04, density:6.61, vaporPressure:1.476, A:8.079, B:1581.3, C:239.65, Tmin:59, Tmax:183, N_BP:148};
	var petroChem119 = {compoundName:"Methyl ethyl ketone {2-butanone}", cas:"00078-93-3", molWeight:72.11, density:6.68, vaporPressure:1.081, A:6.864, B:1150.2, C:209.25, Tmin:106, Tmax:207, N_BP:176};
	var petroChem120 = {compoundName:"Methyl isobutyl ketone", cas:"00108-10-1", molWeight:100.16, density:6.65, vaporPressure:0.219, A:6.828, B:1254.1, C:201.61, Tmin:71, Tmax:241, N_BP:241};
	var petroChem121 = {compoundName:"Methyl methacrylate", cas:"00080-62-6", molWeight:100.12, density:7.88, vaporPressure:0.416, A:8.253, B:1945.6, C:265.58, Tmin:102, Tmax:192, N_BP:213};
	var petroChem122 = {compoundName:"Methyl propyl ether", cas:"00557-17-5", molWeight:74.12, density:6.14, vaporPressure:6.017, A:6.563, B:903.6, C:206.46, Tmin:31, Tmax:103, N_BP:102};
	var petroChem123 = {compoundName:"Methyl styrene (alpha)", cas:"00098-83-9", molWeight:118.18, density:7.6, vaporPressure:0.024, A:6.924, B:1486.9, C:202.4, Tmin:"", Tmax:"", N_BP:329};
	var petroChem124 = {compoundName:"Methylcyclohexane", cas:"00108-87-2", molWeight:98.19, density:6.42, vaporPressure:0.558, A:6.823, B:1270.8, C:221.42, Tmin:27, Tmax:261, N_BP:214};
	var petroChem125 = {compoundName:"Methylcyclopentane", cas:"00096-37-7", molWeight:84.16, density:6.25, vaporPressure:1.738, A:6.863, B:1186.1, C:226.04, Tmin:59, Tmax:163, N_BP:161};
	var petroChem126 = {compoundName:"Methyldichlorosilane", cas:"20156-50-7", molWeight:115.03, density:8.91, vaporPressure:5.718, A:7.028, B:1167.8, C:240.7, Tmin:34, Tmax:106, N_BP:""};
	var petroChem127 = {compoundName:"Methylene chloride", cas:"00075-09-2", molWeight:84.93, density:11.07, vaporPressure:5.64, A:7.412, B:1327, C:252.68, Tmin:-40, Tmax:104, N_BP:104};
	var petroChem128 = {compoundName:"Methylhexane (2)", cas:"00591-76-4", molWeight:100.2, density:5.66, vaporPressure:0.799, A:6.882, B:1240.9, C:220.1, Tmin:65, Tmax:196, N_BP:194};
	var petroChem129 = {compoundName:"Methylhexane (3)", cas:"00589-34-4", molWeight:100.2, density:5.72, vaporPressure:0.744, A:6.874, B:1243.8, C:219.63, Tmin:68, Tmax:199, N_BP:197};
	var petroChem130 = {compoundName:"Methylpentane (2)", cas:"00107-83-5", molWeight:86.18, density:5.43, vaporPressure:2.73, A:6.839, B:1135.4, C:226.57, Tmin:55, Tmax:142, N_BP:142};
	var petroChem131 = {compoundName:"Methyl-tert-butyl ether {MTBE}", cas:"01634-04-4", molWeight:88.15, density:6.18, vaporPressure:3.226, A:6.867, B:1116.1, C:224.74, Tmin:125, Tmax:431, N_BP:131};
	var petroChem132 = {compoundName:"Morpholine", cas:"00110-91-8", molWeight:87.12, density:8.35, vaporPressure:0.109, A:7.718, B:1745.8, C:235, Tmin:32, Tmax:111, N_BP:263};
	var petroChem133 = {compoundName:"Naphthalene", cas:"00091-20-3", molWeight:128.17, density:8.56, vaporPressure:0.0024, A:7.146, B:1831.6, C:211.82, Tmin:177, Tmax:354, N_BP:422};
	var petroChem134 = {compoundName:"Nitrobenzene", cas:"00098-95-3", molWeight:123.11, density:10.05, vaporPressure:0.0022, A:7.091, B:1727.6, C:199.71, Tmin:273, Tmax:411, N_BP:412};
	var petroChem135 = {compoundName:"Nitromethane", cas:"00075-52-5", molWeight:61.04, density:9.49, vaporPressure:0.415, A:7.281, B:1446.2, C:227.52, Tmin:132, Tmax:277, N_BP:214};
	var petroChem136 = {compoundName:"Nonadecane (n)", cas:"00629-92-5", molWeight:268.52, density:6.56, vaporPressure:0.000000364, A:33.303, B:28197, C:725.94, Tmin:91, Tmax:131, N_BP:624};
	var petroChem137 = {compoundName:"Nonane (n)", cas:"00111-84-2", molWeight:128.26, density:5.99, vaporPressure:0.037, A:6.7, B:1492.9, C:217.26, Tmin:-64, Tmax:94, N_BP:303};
	var petroChem138 = {compoundName:"Octadecane (n)", cas:"00593-45-3", molWeight:254.49, density:6.48, vaporPressure:0.000000616, A:7.207, B:2069, C:161.22, Tmin:346, Tmax:602, N_BP:592};
	var petroChem139 = {compoundName:"Octane (n)", cas:"00111-65-9", molWeight:114.23, density:5.83, vaporPressure:0.142, A:8.076, B:1936.3, C:253.01, Tmin:-70, Tmax:75, N_BP:258};
	var petroChem140 = {compoundName:"Octanol (1)", cas:"00111-87-5", molWeight:130.23, density:6.9, vaporPressure:0.00061, A:9.352, B:2603.4, C:224.35, Tmin:68, Tmax:176, N_BP:383};
	var petroChem141 = {compoundName:"Octene (1)", cas:"00111-66-0", molWeight:112.21, density:5.97, vaporPressure:0.196, A:6.933, B:1353.5, C:212.76, Tmin:113, Tmax:252, N_BP:251};
	var petroChem142 = {compoundName:"Pentachloroethane", cas:"00076-01-7", molWeight:202.29, density:14.02, vaporPressure:0.04, A:6.643, B:1342.3, C:196.51, Tmin:77, Tmax:324, N_BP:324};
	var petroChem143 = {compoundName:"Pentadiene (1,2)", cas:"00591-95-7", molWeight:68.12, density:5.78, vaporPressure:4.718, A:6.936, B:1125.5, C:231.88, Tmin:-76, Tmax:-19, N_BP:113};
	var petroChem144 = {compoundName:"Pentadiene (1,4)", cas:"00591-93-5", molWeight:68.12, density:5.52, vaporPressure:10.06, A:7.035, B:1108.2, C:241.05, Tmin:-110, Tmax:65, N_BP:79};
	var petroChem145 = {compoundName:"Pentadiene (2,3)", cas:"00591-96-8", molWeight:68.12, density:5.8, vaporPressure:4.223, A:7.263, B:1256.2, C:239.57, Tmin:-76, Tmax:-15, N_BP:119};
	var petroChem146 = {compoundName:"Pentane (n)", cas:"00109-66-0", molWeight:72.15, density:5.23, vaporPressure:6.884, A:6.864, B:1070.6, C:232.7, Tmin:24, Tmax:155, N_BP:97};
	var petroChem147 = {compoundName:"Pentene (1)", cas:"00109-67-1", molWeight:70.13, density:5.35, vaporPressure:8.671, A:6.786, B:1014.3, C:229.78, Tmin:55, Tmax:87, N_BP:88};
	var petroChem148 = {compoundName:"Pentyne (1)", cas:"00627-19-0", molWeight:68.12, density:5.76, vaporPressure:5.657, A:6.967, B:1092.5, C:227.18, Tmin:-47, Tmax:142, N_BP:104};
	var petroChem149 = {compoundName:"Phenanthrene", cas:"00085-01-8", molWeight:178.23, density:8.18, vaporPressure:0.00000337, A:7.394, B:2428.5, C:202.19, Tmin:212, Tmax:302, N_BP:635};
	var petroChem150 = {compoundName:"Phenol", cas:"00108-95-2", molWeight:94.11, density:8.8, vaporPressure:0.003, A:7.122, B:1509.7, C:174.2, Tmin:225, Tmax:359, N_BP:359};
	var petroChem151 = {compoundName:"Phosgene", cas:"00075-44-5", molWeight:98.92, density:11.45, vaporPressure:19.43, A:7.146, B:1072.7, C:243.3, Tmin:47, Tmax:345, N_BP:46};
	var petroChem152 = {compoundName:"Picoline (3) {3-methyl pyridine}", cas:"00108-99-6", molWeight:93.13, density:7.98, vaporPressure:0.064, A:7.054, B:1484.3, C:211.54, Tmin:165, Tmax:364, N_BP:291};
	var petroChem153 = {compoundName:"Propane", cas:"00074-98-6", molWeight:44.1, density:4.12, vaporPressure:111, A:6.858, B:819.3, C:248.73, Tmin:-45, Tmax:117, N_BP:-44};
	var petroChem154 = {compoundName:"Propanethiol (1)", cas:"00107-03-9", molWeight:76.16, density:7.02, vaporPressure:1.943, A:6.929, B:1183.4, C:224.63, Tmin:76, Tmax:216, N_BP:154};
	var petroChem155 = {compoundName:"Propanethiol (2)", cas:"00075-33-2", molWeight:76.16, density:6.8, vaporPressure:3.59, A:6.877, B:1113.9, C:226.16, Tmin:51, Tmax:186, N_BP:131};
	var petroChem156 = {compoundName:"Propyl alcohol (n) {propanol (1)}", cas:"00071-23-8", molWeight:60.1, density:6.67, vaporPressure:0.218, A:8.189, B:1690.9, C:221.35, Tmin:67, Tmax:207, N_BP:207};
	var petroChem157 = {compoundName:"Propyl nitrate (n) {propyl ester nitric acid}", cas:"00627-13-4", molWeight:105.09, density:8.8, vaporPressure:0.261, A:6.955, B:1294.4, C:206.7, Tmin:32, Tmax:158, N_BP:231};
	var petroChem158 = {compoundName:"Propylamine (n) {1-propanamine}", cas:"00107-10-8", molWeight:59.11, density:5.99, vaporPressure:3.99, A:6.926, B:1044, C:210.84, Tmin:73, Tmax:172, N_BP:120};
	var petroChem159 = {compoundName:"Propylene {propene}", cas:"00115-07-1", molWeight:42.08, density:4.22, vaporPressure:132, A:6.85, B:795.8, C:248.27, Tmin:-161, Tmax:-53, N_BP:-54};
	var petroChem160 = {compoundName:"Propylene glycol (1,2) {1,2 propanediol}", cas:"00057-55-6", molWeight:76.09, density:8.65, vaporPressure:0.00094, A:8.208, B:2085.9, C:203.54, Tmin:"", Tmax:"", N_BP:368};
	var petroChem161 = {compoundName:"Propylene oxide", cas:"00075-56-9", molWeight:58.08, density:7.17, vaporPressure:7.101, A:6.97, B:1065.3, C:226.28, Tmin:-100, Tmax:94, N_BP:95};
	var petroChem162 = {compoundName:"Pyridine", cas:"00110-86-1", molWeight:79.1, density:8.2, vaporPressure:0.233, A:7.038, B:1371.4, C:214.65, Tmin:153, Tmax:307, N_BP:240};
	var petroChem163 = {compoundName:"Resorcinol", cas:"00108-46-3", molWeight:110.11, density:10.61, vaporPressure:0.00000665, A:8.398, B:2687.2, C:210.99, Tmin:305, Tmax:530, N_BP:532};
	var petroChem164 = {compoundName:"Styrene", cas:"00100-42-5", molWeight:104.15, density:7.56, vaporPressure:0.066, A:7.095, B:1525.1, C:216.77, Tmin:86, Tmax:293, N_BP:295};
	var petroChem165 = {compoundName:"Tetrachloroethane (1,1,1,2)", cas:"00630-20-6", molWeight:167.85, density:12.86, vaporPressure:0.133, A:6.906, B:1370.4, C:210.25, Tmin:139, Tmax:266, N_BP:271};
	var petroChem166 = {compoundName:"Tetrachloroethane (1,1,2,2)", cas:"00079-34-5", molWeight:167.85, density:13.32, vaporPressure:0.037, A:6.091, B:959.6, C:149.78, Tmin:77, Tmax:266, N_BP:295};
	var petroChem167 = {compoundName:"Tetrachloroethylene", cas:"00127-18-4", molWeight:165.83, density:13.54, vaporPressure:0.213, A:7.056, B:1440.8, C:223.98, Tmin:82, Tmax:226, N_BP:250};
	var petroChem168 = {compoundName:"Tetrahydrofuran", cas:"00109-99-9", molWeight:72.11, density:7.42, vaporPressure:2.039, A:6.996, B:1202.9, C:226.33, Tmin:74, Tmax:211, N_BP:151};
	var petroChem169 = {compoundName:"Toluene", cas:"00108-88-3", molWeight:92.14, density:7.24, vaporPressure:0.331, A:7.017, B:1377.6, C:222.64, Tmin:32, Tmax:122, N_BP:231};
	var petroChem170 = {compoundName:"Trichloroethane (1,1,1)", cas:"00071-55-6", molWeight:133.4, density:11.18, vaporPressure:1.65, A:8.761, B:2210.2, C:308.05, Tmin:22, Tmax:62, N_BP:165};
	var petroChem171 = {compoundName:"Trichloroethane (1,1,2)", cas:"00079-00-5", molWeight:133.4, density:12.02, vaporPressure:0.245, A:6.945, B:1310.3, C:208.74, Tmin:122, Tmax:237, N_BP:237};
	var petroChem172 = {compoundName:"Trichloroethylene", cas:"00079-01-6", molWeight:131.39, density:12.22, vaporPressure:0.817, A:6.429, B:974.5, C:187.34, Tmin:64, Tmax:188, N_BP:189};
	var petroChem173 = {compoundName:"Trichloropropane (1,2,3)", cas:"00096-18-4", molWeight:147.43, density:11.59, vaporPressure:0.031, A:7.532, B:1818.9, C:232.52, Tmin:48, Tmax:316, N_BP:313};
	var petroChem174 = {compoundName:"Tridecane (n)", cas:"00629-50-5", molWeight:184.36, density:6.31, vaporPressure:0.000246, A:7.003, B:1689.1, C:174.28, Tmin:283, Tmax:457, N_BP:453};
	var petroChem175 = {compoundName:"Trifluoroethane (1,1,2-trichloro-1,2,2)", cas:"00076-13-1", molWeight:187.37, density:13.05, vaporPressure:4.376, A:6.88, B:1099.9, C:227.5, Tmin:-13, Tmax:181, N_BP:118};
	var petroChem176 = {compoundName:"Trimethylbenzene (1,2,4)", cas:"00095-63-6", molWeight:120.19, density:7.31, vaporPressure:0.02, A:7.044, B:1573.3, C:208.56, Tmin:126, Tmax:388, N_BP:337};
	var petroChem177 = {compoundName:"Trimethylchlorosilane {chlorotrimethylsilane}", cas:"00075-77-4", molWeight:108.64, density:7.15, vaporPressure:3.068, A:6.951, B:1191, C:235.15, Tmin:37, Tmax:132, N_BP:136};
	var petroChem178 = {compoundName:"Trimethylpentane (2,2,3)", cas:"00564-02-3", molWeight:114.23, density:5.74, vaporPressure:0.378, A:6.825, B:1294.9, C:218.42, Tmin:"", Tmax:"", N_BP:230};
	var petroChem179 = {compoundName:"Trimethylpentane (2,3,3)", cas:"00560-21-4", molWeight:114.23, density:6.06, vaporPressure:0.317, A:6.844, B:1328.1, C:220.38, Tmin:"", Tmax:"", N_BP:238};
	var petroChem180 = {compoundName:"Trimethylpentane (2,3,4)", cas:"00565-75-3", molWeight:114.23, density:6, vaporPressure:0.314, A:7.031, B:1420.7, C:228.53, Tmin:-59, Tmax:308, N_BP:237};
	var petroChem181 = {compoundName:"Undecane (n)", cas:"01120-21-4", molWeight:156.31, density:6.18, vaporPressure:0.0035, A:6.977, B:1572.5, C:188.02, Tmin:220, Tmax:387, N_BP:383};
	var petroChem182 = {compoundName:"Vinyl acetate {acetic acid ethenyl ester}", cas:"00108-05-4", molWeight:86.09, density:7.78, vaporPressure:1.396, A:7.215, B:1299.1, C:226.97, Tmin:71, Tmax:162, N_BP:163};
	var petroChem183 = {compoundName:"Vinylidene chloride {1,1-dichloro ethene}", cas:"00075-35-4", molWeight:96.94, density:10.13, vaporPressure:8.096, A:6.983, B:1104.7, C:237.75, Tmin:-19, Tmax:90, N_BP:88};
	var petroChem184 = {compoundName:"Xylene (m) {1,3-dimethyl benzene}", cas:"00108-38-3", molWeight:106.17, density:7.21, vaporPressure:0.09, A:7.009, B:1462.3, C:215.11, Tmin:82, Tmax:331, N_BP:283};
	var petroChem185 = {compoundName:"Xylene (o) {1,2-dimethyl benzene}", cas:"00095-47-6", molWeight:106.17, density:7.35, vaporPressure:0.071, A:6.999, B:1474.7, C:213.69, Tmin:90, Tmax:342, N_BP:291};
	var petroChem186 = {compoundName:"Xylene (p) {1,4-dimethyl benzene}", cas:"00106-42-3", molWeight:106.17, density:7.19, vaporPressure:0.097, A:7.021, B:1474.4, C:217.77, Tmin:56, Tmax:355, N_BP:281};

	//put petroChem objects into array
	var aryPetroChemProp = [petroChem1, petroChem2, petroChem3, petroChem4, petroChem5, petroChem6, petroChem7, petroChem8, petroChem9, petroChem10, petroChem11, petroChem12, petroChem13, petroChem14, petroChem15, petroChem16, petroChem17, petroChem18, petroChem19, petroChem20, petroChem21, petroChem22, petroChem23, petroChem24, petroChem25, petroChem26, petroChem27, petroChem28, petroChem29, petroChem30, petroChem31, petroChem32, petroChem33, petroChem34, petroChem35, petroChem36, petroChem37, petroChem38, petroChem39, petroChem40, petroChem41, petroChem42, petroChem43, petroChem44, petroChem45, petroChem46, petroChem47, petroChem48, petroChem49, petroChem50, petroChem51, petroChem52, petroChem53, petroChem54, petroChem55, petroChem56, petroChem57, petroChem58, petroChem59, petroChem60, petroChem61, petroChem62, petroChem63, petroChem64, petroChem65, petroChem66, petroChem67, petroChem68, petroChem69, petroChem70, petroChem71, petroChem72, petroChem73, petroChem74, petroChem75, petroChem76, petroChem77, petroChem78, petroChem79, petroChem80, petroChem81, petroChem82, petroChem83, petroChem84, petroChem85, petroChem86, petroChem87, petroChem88, petroChem89, petroChem90, petroChem91, petroChem92, petroChem93, petroChem94, petroChem95, petroChem96, petroChem97, petroChem98, petroChem99, petroChem100, petroChem101, petroChem102, petroChem103, petroChem104, petroChem105, petroChem106, petroChem107, petroChem108, petroChem109, petroChem110, petroChem111, petroChem112, petroChem113, petroChem114, petroChem115, petroChem116, petroChem117, petroChem118, petroChem119, petroChem120, petroChem121, petroChem122, petroChem123, petroChem124, petroChem125, petroChem126, petroChem127, petroChem128, petroChem129, petroChem130, petroChem131, petroChem132, petroChem133, petroChem134, petroChem135, petroChem136, petroChem137, petroChem138, petroChem139, petroChem140, petroChem141, petroChem142, petroChem143, petroChem144, petroChem145, petroChem146, petroChem147, petroChem148, petroChem149, petroChem150, petroChem151, petroChem152, petroChem153, petroChem154, petroChem155, petroChem156, petroChem157, petroChem158, petroChem159, petroChem160, petroChem161, petroChem162, petroChem163, petroChem164, petroChem165, petroChem166, petroChem167, petroChem168, petroChem169, petroChem170, petroChem171, petroChem172, petroChem173, petroChem174, petroChem175, petroChem176, petroChem177, petroChem178, petroChem179, petroChem180, petroChem181, petroChem182, petroChem183, petroChem184, petroChem185, petroChem186];
	
	return aryPetroChemProp;
}

