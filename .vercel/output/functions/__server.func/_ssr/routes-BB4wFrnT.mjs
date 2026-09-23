import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plus, i as RotateCcw, o as Minus, r as Search, t as X } from "../_libs/lucide-react.mjs";
import { c as rgbBasis } from "../_libs/d3-interpolate.mjs";
import { n as sequentialLog, t as sequential } from "../_libs/d3-scale.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as path_default, r as graticule, t as naturalEarth1_default } from "../_libs/d3-geo.mjs";
import { r as select_default } from "../_libs/d3-drag+d3-selection.mjs";
import "../_libs/d3-transition.mjs";
import { n as identity, t as zoom_default } from "../_libs/d3-zoom.mjs";
import { t as feature_default } from "../_libs/topojson-client.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BB4wFrnT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COUNTRIES = [
	[
		"004",
		"AFG",
		"Afghanistan",
		"Asia",
		2093,
		66,
		.462,
		.3,
		61
	],
	[
		"008",
		"ALB",
		"Albania",
		"Europe",
		18555,
		79.6,
		.789,
		1.7,
		103
	],
	[
		"012",
		"DZA",
		"Algeria",
		"Africa",
		15665,
		77.1,
		.745,
		3.9,
		19
	],
	[
		"020",
		"AND",
		"Andorra",
		"Europe",
		64800,
		84,
		.884,
		5.9,
		170
	],
	[
		"024",
		"AGO",
		"Angola",
		"Africa",
		8040,
		64.6,
		.591,
		.6,
		28
	],
	[
		"028",
		"ATG",
		"Antigua and Barbuda",
		"Americas",
		23400,
		79.2,
		.826,
		5.8,
		223
	],
	[
		"031",
		"AZE",
		"Azerbaijan",
		"Asia",
		21250,
		74.4,
		.76,
		3.5,
		123
	],
	[
		"032",
		"ARG",
		"Argentina",
		"Americas",
		26490,
		77.4,
		.849,
		3.4,
		17
	],
	[
		"036",
		"AUS",
		"Australia",
		"Oceania",
		64690,
		83.3,
		.946,
		14.9,
		3.4,
		["Aussie"]
	],
	[
		"040",
		"AUT",
		"Austria",
		"Europe",
		69150,
		81.6,
		.926,
		6.8,
		109
	],
	[
		"044",
		"BHS",
		"Bahamas",
		"Americas",
		37150,
		74.4,
		.82,
		6.3,
		40
	],
	[
		"048",
		"BHR",
		"Bahrain",
		"Asia",
		60730,
		79.2,
		.888,
		21.6,
		1892
	],
	[
		"050",
		"BGD",
		"Bangladesh",
		"Asia",
		8600,
		74.3,
		.67,
		.6,
		1329
	],
	[
		"051",
		"ARM",
		"Armenia",
		"Asia",
		18540,
		75.1,
		.786,
		2.1,
		99
	],
	[
		"052",
		"BRB",
		"Barbados",
		"Americas",
		18750,
		77.7,
		.809,
		4.4,
		668
	],
	[
		"056",
		"BEL",
		"Belgium",
		"Europe",
		65030,
		81.9,
		.942,
		7.5,
		383
	],
	[
		"064",
		"BTN",
		"Bhutan",
		"Asia",
		14080,
		72,
		.681,
		1.8,
		20
	],
	[
		"068",
		"BOL",
		"Bolivia",
		"Americas",
		10090,
		68.8,
		.698,
		1.8,
		11
	],
	[
		"070",
		"BIH",
		"Bosnia and Herzegovina",
		"Europe",
		20110,
		77.9,
		.779,
		6.2,
		64
	],
	[
		"072",
		"BWA",
		"Botswana",
		"Africa",
		18590,
		66.3,
		.708,
		2.7,
		4.5
	],
	[
		"076",
		"BRA",
		"Brazil",
		"Americas",
		20080,
		75.8,
		.76,
		2.2,
		25
	],
	[
		"084",
		"BLZ",
		"Belize",
		"Americas",
		13320,
		73.6,
		.7,
		1.6,
		18
	],
	[
		"090",
		"SLB",
		"Solomon Islands",
		"Oceania",
		2710,
		70.7,
		.562,
		.4,
		25
	],
	[
		"096",
		"BRN",
		"Brunei",
		"Asia",
		83020,
		75.3,
		.823,
		16.6,
		83
	],
	[
		"100",
		"BGR",
		"Bulgaria",
		"Europe",
		33800,
		75.6,
		.799,
		5.8,
		63
	],
	[
		"104",
		"MMR",
		"Myanmar",
		"Asia",
		5120,
		67.4,
		.585,
		.7,
		82
	],
	[
		"108",
		"BDI",
		"Burundi",
		"Africa",
		890,
		63.8,
		.42,
		.05,
		463
	],
	[
		"112",
		"BLR",
		"Belarus",
		"Europe",
		30200,
		74.2,
		.808,
		6.1,
		45
	],
	[
		"116",
		"KHM",
		"Cambodia",
		"Asia",
		7200,
		70.5,
		.6,
		1.1,
		95
	],
	[
		"120",
		"CMR",
		"Cameroon",
		"Africa",
		5160,
		62.3,
		.587,
		.3,
		58
	],
	[
		"124",
		"CAN",
		"Canada",
		"Americas",
		60360,
		82.8,
		.935,
		14.2,
		4.2
	],
	[
		"132",
		"CPV",
		"Cabo Verde",
		"Africa",
		8990,
		75,
		.661,
		1.2,
		138
	],
	[
		"140",
		"CAF",
		"Central African Republic",
		"Africa",
		1120,
		55.5,
		.387,
		.05,
		8.8
	],
	[
		"144",
		"LKA",
		"Sri Lanka",
		"Asia",
		14470,
		76.6,
		.78,
		1,
		354
	],
	[
		"148",
		"TCD",
		"Chad",
		"Africa",
		1790,
		54.5,
		.394,
		.06,
		13
	],
	[
		"152",
		"CHL",
		"Chile",
		"Americas",
		30160,
		81.2,
		.86,
		4.2,
		26
	],
	[
		"156",
		"CHN",
		"China",
		"Asia",
		23309,
		78.2,
		.788,
		8.9,
		153
	],
	[
		"158",
		"TWN",
		"Taiwan",
		"Asia",
		72800,
		81,
		.926,
		11.4,
		673
	],
	[
		"170",
		"COL",
		"Colombia",
		"Americas",
		20770,
		77.3,
		.758,
		1.6,
		46
	],
	[
		"174",
		"COM",
		"Comoros",
		"Africa",
		3460,
		67,
		.586,
		.3,
		395
	],
	[
		"178",
		"COG",
		"Republic of the Congo",
		"Africa",
		6210,
		65,
		.593,
		1.2,
		16
	],
	[
		"180",
		"COD",
		"DR Congo",
		"Africa",
		1470,
		61.5,
		.481,
		.04,
		42,
		["Congo", "DRC"]
	],
	[
		"188",
		"CRI",
		"Costa Rica",
		"Americas",
		26300,
		80.3,
		.809,
		1.4,
		100
	],
	[
		"191",
		"HRV",
		"Croatia",
		"Europe",
		42630,
		78.6,
		.878,
		4.1,
		72
	],
	[
		"192",
		"CUB",
		"Cuba",
		"Americas",
		12890,
		78.1,
		.764,
		2,
		106
	],
	[
		"196",
		"CYP",
		"Cyprus",
		"Europe",
		53640,
		81.9,
		.907,
		5.5,
		131
	],
	[
		"203",
		"CZE",
		"Czechia",
		"Europe",
		50770,
		79.4,
		.895,
		8.6,
		139,
		["Czech Republic"]
	],
	[
		"204",
		"BEN",
		"Benin",
		"Africa",
		4050,
		60.8,
		.504,
		.6,
		114
	],
	[
		"208",
		"DNK",
		"Denmark",
		"Europe",
		74640,
		81.9,
		.952,
		5.1,
		137
	],
	[
		"212",
		"DMA",
		"Dominica",
		"Americas",
		14280,
		74.8,
		.72,
		2.1,
		96
	],
	[
		"214",
		"DOM",
		"Dominican Republic",
		"Americas",
		23090,
		74.1,
		.766,
		2.3,
		225
	],
	[
		"218",
		"ECU",
		"Ecuador",
		"Americas",
		14340,
		78.4,
		.765,
		2.1,
		71
	],
	[
		"222",
		"SLV",
		"El Salvador",
		"Americas",
		12100,
		73.9,
		.674,
		1.1,
		313
	],
	[
		"226",
		"GNQ",
		"Equatorial Guinea",
		"Africa",
		16620,
		61.2,
		.65,
		4.8,
		50
	],
	[
		"231",
		"ETH",
		"Ethiopia",
		"Africa",
		2810,
		66.6,
		.492,
		.16,
		109
	],
	[
		"232",
		"ERI",
		"Eritrea",
		"Africa",
		1710,
		67,
		.493,
		.17,
		35
	],
	[
		"233",
		"EST",
		"Estonia",
		"Europe",
		45470,
		78.8,
		.899,
		7.6,
		31
	],
	[
		"242",
		"FJI",
		"Fiji",
		"Oceania",
		13640,
		68.3,
		.729,
		1.8,
		49
	],
	[
		"246",
		"FIN",
		"Finland",
		"Europe",
		60870,
		82,
		.942,
		6.5,
		18
	],
	[
		"250",
		"FRA",
		"France",
		"Europe",
		58640,
		82.5,
		.91,
		4.6,
		123
	],
	[
		"262",
		"DJI",
		"Djibouti",
		"Africa",
		6610,
		65,
		.509,
		.5,
		43
	],
	[
		"266",
		"GAB",
		"Gabon",
		"Africa",
		19340,
		66.5,
		.693,
		2.2,
		9
	],
	[
		"268",
		"GEO",
		"Georgia",
		"Asia",
		22150,
		73.7,
		.814,
		2.7,
		53
	],
	[
		"270",
		"GMB",
		"Gambia",
		"Africa",
		2790,
		64.1,
		.5,
		.25,
		239
	],
	[
		"275",
		"PSE",
		"Palestine",
		"Asia",
		5640,
		75.4,
		.716,
		.6,
		847,
		["West Bank"]
	],
	[
		"276",
		"DEU",
		"Germany",
		"Europe",
		66930,
		81.2,
		.95,
		7.3,
		240
	],
	[
		"288",
		"GHA",
		"Ghana",
		"Africa",
		6800,
		66.1,
		.602,
		.6,
		144
	],
	[
		"296",
		"KIR",
		"Kiribati",
		"Oceania",
		2360,
		67.4,
		.624,
		.6,
		147
	],
	[
		"300",
		"GRC",
		"Greece",
		"Europe",
		39940,
		81.5,
		.893,
		5.4,
		81
	],
	[
		"304",
		"GRL",
		"Greenland",
		"Americas",
		55110,
		71.3,
		.786,
		9.5,
		.14
	],
	[
		"308",
		"GRD",
		"Grenada",
		"Americas",
		17080,
		75.2,
		.793,
		2.6,
		331
	],
	[
		"320",
		"GTM",
		"Guatemala",
		"Americas",
		12630,
		72.6,
		.629,
		1.1,
		167
	],
	[
		"324",
		"GIN",
		"Guinea",
		"Africa",
		4020,
		60.7,
		.471,
		.3,
		53
	],
	[
		"328",
		"GUY",
		"Guyana",
		"Americas",
		49440,
		69.8,
		.742,
		4.1,
		4
	],
	[
		"332",
		"HTI",
		"Haiti",
		"Americas",
		3180,
		64.7,
		.552,
		.3,
		414
	],
	[
		"340",
		"HND",
		"Honduras",
		"Americas",
		7060,
		72.9,
		.624,
		1,
		89
	],
	[
		"344",
		"HKG",
		"Hong Kong",
		"Asia",
		69680,
		85.4,
		.956,
		4.2,
		6780
	],
	[
		"348",
		"HUN",
		"Hungary",
		"Europe",
		43640,
		76.4,
		.851,
		4.5,
		105
	],
	[
		"352",
		"ISL",
		"Iceland",
		"Europe",
		69380,
		82.8,
		.959,
		10.2,
		4
	],
	[
		"356",
		"IND",
		"India",
		"Asia",
		10232,
		72,
		.644,
		2,
		473
	],
	[
		"360",
		"IDN",
		"Indonesia",
		"Asia",
		15410,
		71.1,
		.713,
		2.6,
		147
	],
	[
		"364",
		"IRN",
		"Iran",
		"Asia",
		18070,
		76.8,
		.78,
		8.5,
		52
	],
	[
		"368",
		"IRQ",
		"Iraq",
		"Asia",
		12560,
		71.3,
		.673,
		4.9,
		93
	],
	[
		"372",
		"IRL",
		"Ireland",
		"Europe",
		126910,
		82.4,
		.95,
		7.2,
		73
	],
	[
		"376",
		"ISR",
		"Israel",
		"Asia",
		54770,
		82.7,
		.915,
		6.2,
		400
	],
	[
		"380",
		"ITA",
		"Italy",
		"Europe",
		56840,
		83.6,
		.906,
		5.4,
		200
	],
	[
		"384",
		"CIV",
		"Côte d'Ivoire",
		"Africa",
		7440,
		60.1,
		.534,
		.5,
		83,
		["Ivory Coast"]
	],
	[
		"388",
		"JAM",
		"Jamaica",
		"Americas",
		11620,
		74.5,
		.706,
		2.3,
		273
	],
	[
		"392",
		"JPN",
		"Japan",
		"Asia",
		52520,
		84.5,
		.92,
		8.1,
		338
	],
	[
		"398",
		"KAZ",
		"Kazakhstan",
		"Asia",
		35730,
		74.4,
		.802,
		14.4,
		7
	],
	[
		"400",
		"JOR",
		"Jordan",
		"Asia",
		11080,
		77.8,
		.736,
		2.2,
		115
	],
	[
		"404",
		"KEN",
		"Kenya",
		"Africa",
		6230,
		66.8,
		.601,
		.4,
		94
	],
	[
		"408",
		"PRK",
		"North Korea",
		"Asia",
		1700,
		73.3,
		.54,
		1.6,
		214
	],
	[
		"410",
		"KOR",
		"South Korea",
		"Asia",
		56120,
		83.7,
		.929,
		11.6,
		531,
		["Korea"]
	],
	[
		"414",
		"KWT",
		"Kuwait",
		"Asia",
		50800,
		80.4,
		.847,
		21.2,
		246
	],
	[
		"417",
		"KGZ",
		"Kyrgyzstan",
		"Asia",
		7020,
		71.9,
		.701,
		1.4,
		35
	],
	[
		"418",
		"LAO",
		"Laos",
		"Asia",
		9410,
		69,
		.62,
		2.5,
		32
	],
	[
		"422",
		"LBN",
		"Lebanon",
		"Asia",
		11590,
		79,
		.723,
		3.7,
		523
	],
	[
		"426",
		"LSO",
		"Lesotho",
		"Africa",
		2920,
		54.7,
		.521,
		1.1,
		70
	],
	[
		"428",
		"LVA",
		"Latvia",
		"Europe",
		39950,
		75.6,
		.879,
		3.6,
		29
	],
	[
		"430",
		"LBR",
		"Liberia",
		"Africa",
		1710,
		62.3,
		.487,
		.2,
		53
	],
	[
		"434",
		"LBY",
		"Libya",
		"Africa",
		20430,
		72.9,
		.746,
		8.2,
		4
	],
	[
		"438",
		"LIE",
		"Liechtenstein",
		"Europe",
		197500,
		83,
		.942,
		3.8,
		245
	],
	[
		"440",
		"LTU",
		"Lithuania",
		"Europe",
		49640,
		76,
		.879,
		4.3,
		43
	],
	[
		"442",
		"LUX",
		"Luxembourg",
		"Europe",
		143250,
		82.3,
		.927,
		12.4,
		253
	],
	[
		"446",
		"MAC",
		"Macao",
		"Asia",
		125510,
		85.2,
		.925,
		2.1,
		21400
	],
	[
		"450",
		"MDG",
		"Madagascar",
		"Africa",
		1770,
		65.2,
		.501,
		.13,
		48
	],
	[
		"454",
		"MWI",
		"Malawi",
		"Africa",
		1710,
		65.6,
		.512,
		.08,
		192
	],
	[
		"458",
		"MYS",
		"Malaysia",
		"Asia",
		37080,
		76.3,
		.807,
		8.6,
		99
	],
	[
		"462",
		"MDV",
		"Maldives",
		"Asia",
		25560,
		80.8,
		.747,
		3.5,
		1738
	],
	[
		"466",
		"MLI",
		"Mali",
		"Africa",
		2450,
		60.4,
		.41,
		.18,
		17
	],
	[
		"470",
		"MLT",
		"Malta",
		"Europe",
		59870,
		83.3,
		.915,
		3.5,
		1672
	],
	[
		"478",
		"MRT",
		"Mauritania",
		"Africa",
		6970,
		68.5,
		.54,
		.9,
		5
	],
	[
		"480",
		"MUS",
		"Mauritius",
		"Africa",
		26610,
		75.1,
		.802,
		3.3,
		626
	],
	[
		"484",
		"MEX",
		"Mexico",
		"Americas",
		24700,
		75.1,
		.781,
		3,
		66
	],
	[
		"492",
		"MCO",
		"Monaco",
		"Europe",
		240860,
		86.4,
		.96,
		4.1,
		19350
	],
	[
		"496",
		"MNG",
		"Mongolia",
		"Asia",
		16800,
		72,
		.741,
		11.3,
		2.1
	],
	[
		"498",
		"MDA",
		"Moldova",
		"Europe",
		16740,
		71.2,
		.763,
		1.7,
		73
	],
	[
		"499",
		"MNE",
		"Montenegro",
		"Europe",
		28370,
		77.8,
		.844,
		3.7,
		45
	],
	[
		"504",
		"MAR",
		"Morocco",
		"Africa",
		10160,
		75,
		.698,
		1.9,
		83
	],
	[
		"508",
		"MOZ",
		"Mozambique",
		"Africa",
		1540,
		63.6,
		.461,
		.2,
		40
	],
	[
		"512",
		"OMN",
		"Oman",
		"Asia",
		40140,
		78.7,
		.819,
		15.6,
		16
	],
	[
		"516",
		"NAM",
		"Namibia",
		"Africa",
		11570,
		64,
		.61,
		1.5,
		3.1
	],
	[
		"520",
		"NRU",
		"Nauru",
		"Oceania",
		11200,
		63.6,
		.696,
		4.2,
		635
	],
	[
		"524",
		"NPL",
		"Nepal",
		"Asia",
		5310,
		70.5,
		.601,
		.5,
		203
	],
	[
		"528",
		"NLD",
		"Netherlands",
		"Europe",
		78310,
		81.7,
		.946,
		7.4,
		523
	],
	[
		"540",
		"NCL",
		"New Caledonia",
		"Oceania",
		35920,
		77.7,
		.79,
		17.5,
		16
	],
	[
		"548",
		"VUT",
		"Vanuatu",
		"Oceania",
		3280,
		70.5,
		.614,
		.6,
		26
	],
	[
		"554",
		"NZL",
		"New Zealand",
		"Oceania",
		53970,
		82.5,
		.939,
		6.5,
		20
	],
	[
		"558",
		"NIC",
		"Nicaragua",
		"Americas",
		7740,
		74.6,
		.669,
		.8,
		55
	],
	[
		"562",
		"NER",
		"Niger",
		"Africa",
		1590,
		62.1,
		.394,
		.09,
		20
	],
	[
		"566",
		"NGA",
		"Nigeria",
		"Africa",
		6250,
		54.5,
		.548,
		.6,
		234
	],
	[
		"578",
		"NOR",
		"Norway",
		"Europe",
		106150,
		83.3,
		.966,
		7.5,
		15
	],
	[
		"583",
		"FSM",
		"Micronesia",
		"Oceania",
		3920,
		67.2,
		.634,
		1.3,
		150
	],
	[
		"584",
		"MHL",
		"Marshall Islands",
		"Oceania",
		7210,
		65.3,
		.731,
		2.4,
		331
	],
	[
		"585",
		"PLW",
		"Palau",
		"Oceania",
		17580,
		69.1,
		.797,
		13.3,
		39
	],
	[
		"586",
		"PAK",
		"Pakistan",
		"Asia",
		6870,
		68,
		.54,
		.9,
		300
	],
	[
		"591",
		"PAN",
		"Panama",
		"Americas",
		39080,
		79.2,
		.82,
		2.7,
		58
	],
	[
		"598",
		"PNG",
		"Papua New Guinea",
		"Oceania",
		4290,
		66.1,
		.568,
		.8,
		20
	],
	[
		"600",
		"PRY",
		"Paraguay",
		"Americas",
		16250,
		73.8,
		.731,
		1.2,
		18
	],
	[
		"604",
		"PER",
		"Peru",
		"Americas",
		15790,
		77.4,
		.762,
		1.5,
		26
	],
	[
		"608",
		"PHL",
		"Philippines",
		"Asia",
		11120,
		72.2,
		.71,
		1.3,
		390
	],
	[
		"616",
		"POL",
		"Poland",
		"Europe",
		45430,
		78.6,
		.881,
		7.6,
		121
	],
	[
		"620",
		"PRT",
		"Portugal",
		"Europe",
		44100,
		82.2,
		.874,
		4,
		112
	],
	[
		"624",
		"GNB",
		"Guinea-Bissau",
		"Africa",
		2650,
		59.9,
		.483,
		.16,
		70
	],
	[
		"626",
		"TLS",
		"Timor-Leste",
		"Asia",
		4640,
		69.5,
		.566,
		.4,
		89
	],
	[
		"630",
		"PRI",
		"Puerto Rico",
		"Americas",
		43650,
		79.7,
		.845,
		2.8,
		360
	],
	[
		"634",
		"QAT",
		"Qatar",
		"Asia",
		126110,
		81.6,
		.875,
		32.4,
		248
	],
	[
		"642",
		"ROU",
		"Romania",
		"Europe",
		43180,
		76.6,
		.827,
		3.7,
		81
	],
	[
		"643",
		"RUS",
		"Russia",
		"Europe",
		40160,
		73.2,
		.821,
		12.5,
		9,
		["Russian Federation"]
	],
	[
		"646",
		"RWA",
		"Rwanda",
		"Africa",
		3030,
		67.5,
		.548,
		.11,
		555
	],
	[
		"659",
		"KNA",
		"St. Kitts and Nevis",
		"Americas",
		28770,
		72,
		.838,
		4.7,
		205
	],
	[
		"662",
		"LCA",
		"Saint Lucia",
		"Americas",
		17580,
		73.7,
		.725,
		2.6,
		301
	],
	[
		"670",
		"VCT",
		"St. Vincent and the Grenadines",
		"Americas",
		15740,
		71.2,
		.772,
		2.2,
		284
	],
	[
		"674",
		"SMR",
		"San Marino",
		"Europe",
		72950,
		85.4,
		.853,
		5.5,
		579
	],
	[
		"678",
		"STP",
		"São Tomé and Príncipe",
		"Africa",
		4750,
		70.4,
		.613,
		.6,
		228
	],
	[
		"682",
		"SAU",
		"Saudi Arabia",
		"Asia",
		59840,
		78.7,
		.875,
		18.2,
		17
	],
	[
		"686",
		"SEN",
		"Senegal",
		"Africa",
		4420,
		68.7,
		.517,
		.6,
		92
	],
	[
		"688",
		"SRB",
		"Serbia",
		"Europe",
		26690,
		76.2,
		.805,
		6.4,
		81
	],
	[
		"690",
		"SYC",
		"Seychelles",
		"Africa",
		33120,
		73.8,
		.802,
		6.1,
		214
	],
	[
		"694",
		"SLE",
		"Sierra Leone",
		"Africa",
		2090,
		60.8,
		.458,
		.13,
		114
	],
	[
		"702",
		"SGP",
		"Singapore",
		"Asia",
		133890,
		83.7,
		.949,
		8.5,
		8350
	],
	[
		"703",
		"SVK",
		"Slovakia",
		"Europe",
		41600,
		77.9,
		.855,
		5.7,
		113
	],
	[
		"704",
		"VNM",
		"Vietnam",
		"Asia",
		14500,
		74.6,
		.726,
		3.5,
		311
	],
	[
		"705",
		"SVN",
		"Slovenia",
		"Europe",
		52390,
		81.6,
		.926,
		6,
		105
	],
	[
		"706",
		"SOM",
		"Somalia",
		"Africa",
		1370,
		56.8,
		.38,
		.04,
		27
	],
	[
		"710",
		"ZAF",
		"South Africa",
		"Africa",
		15930,
		66.1,
		.717,
		6.7,
		49
	],
	[
		"716",
		"ZWE",
		"Zimbabwe",
		"Africa",
		3420,
		62.8,
		.55,
		.7,
		42
	],
	[
		"724",
		"ESP",
		"Spain",
		"Europe",
		50940,
		83.2,
		.911,
		5,
		94
	],
	[
		"728",
		"SSD",
		"South Sudan",
		"Africa",
		480,
		56.3,
		.381,
		.15,
		18
	],
	[
		"729",
		"SDN",
		"Sudan",
		"Africa",
		4120,
		66.1,
		.516,
		.4,
		25
	],
	[
		"740",
		"SUR",
		"Suriname",
		"Americas",
		18770,
		73.6,
		.69,
		4.5,
		4
	],
	[
		"748",
		"SWZ",
		"Eswatini",
		"Africa",
		10780,
		64.1,
		.61,
		.9,
		69,
		["Swaziland"]
	],
	[
		"752",
		"SWE",
		"Sweden",
		"Europe",
		69070,
		83.3,
		.952,
		3.6,
		26
	],
	[
		"756",
		"CHE",
		"Switzerland",
		"Europe",
		91150,
		84,
		.967,
		4,
		220
	],
	[
		"760",
		"SYR",
		"Syria",
		"Asia",
		2900,
		72.1,
		.557,
		1.4,
		116
	],
	[
		"762",
		"TJK",
		"Tajikistan",
		"Asia",
		5350,
		71.8,
		.679,
		1,
		68
	],
	[
		"764",
		"THA",
		"Thailand",
		"Asia",
		23400,
		76.4,
		.803,
		3.7,
		137
	],
	[
		"768",
		"TGO",
		"Togo",
		"Africa",
		2780,
		62.7,
		.547,
		.3,
		152
	],
	[
		"776",
		"TON",
		"Tonga",
		"Oceania",
		7200,
		71.3,
		.739,
		1.7,
		150
	],
	[
		"780",
		"TTO",
		"Trinidad and Tobago",
		"Americas",
		28370,
		74.7,
		.814,
		22.3,
		281
	],
	[
		"784",
		"ARE",
		"United Arab Emirates",
		"Asia",
		88220,
		79.9,
		.937,
		20.2,
		139,
		["UAE"]
	],
	[
		"788",
		"TUN",
		"Tunisia",
		"Africa",
		13120,
		76.5,
		.732,
		2.4,
		76
	],
	[
		"792",
		"TUR",
		"Turkey",
		"Asia",
		42710,
		78.5,
		.855,
		5.1,
		110,
		["Türkiye"]
	],
	[
		"795",
		"TKM",
		"Turkmenistan",
		"Asia",
		19180,
		69.4,
		.744,
		11.3,
		13
	],
	[
		"800",
		"UGA",
		"Uganda",
		"Africa",
		2880,
		66.3,
		.55,
		.13,
		229
	],
	[
		"804",
		"UKR",
		"Ukraine",
		"Europe",
		18620,
		73.4,
		.734,
		3.6,
		69
	],
	[
		"807",
		"MKD",
		"North Macedonia",
		"Europe",
		24210,
		75.7,
		.765,
		3.6,
		81,
		["Macedonia"]
	],
	[
		"818",
		"EGY",
		"Egypt",
		"Africa",
		17060,
		71.8,
		.728,
		2.2,
		113
	],
	[
		"826",
		"GBR",
		"United Kingdom",
		"Europe",
		56620,
		81.3,
		.94,
		4.7,
		277,
		[
			"UK",
			"Britain",
			"England"
		]
	],
	[
		"834",
		"TZA",
		"Tanzania",
		"Africa",
		3770,
		66.8,
		.549,
		.2,
		67
	],
	[
		"840",
		"USA",
		"United States",
		"Americas",
		82769,
		79.3,
		.927,
		14.4,
		37,
		[
			"US",
			"USA",
			"America"
		]
	],
	[
		"854",
		"BFA",
		"Burkina Faso",
		"Africa",
		2680,
		61.1,
		.438,
		.16,
		81
	],
	[
		"858",
		"URY",
		"Uruguay",
		"Americas",
		30180,
		78,
		.83,
		1.9,
		20
	],
	[
		"860",
		"UZB",
		"Uzbekistan",
		"Asia",
		10780,
		71.7,
		.727,
		3.6,
		79
	],
	[
		"862",
		"VEN",
		"Venezuela",
		"Americas",
		7750,
		72.1,
		.699,
		2.8,
		32
	],
	[
		"882",
		"WSM",
		"Samoa",
		"Oceania",
		6320,
		72.6,
		.702,
		1.3,
		70
	],
	[
		"887",
		"YEM",
		"Yemen",
		"Asia",
		1680,
		66.1,
		.424,
		.3,
		56
	],
	[
		"894",
		"ZMB",
		"Zambia",
		"Africa",
		3980,
		66.1,
		.569,
		.4,
		26
	]
].map(([id, iso3, name, region, gdp, life, hdi, co2, density, aliases]) => ({
	id,
	iso3,
	name,
	region,
	gdp,
	life,
	hdi,
	co2,
	density,
	aliases
}));
var COUNTRY_BY_ID = new Map(COUNTRIES.map((c) => [c.id, c]));
function countryMatchesQuery(country, query) {
	const q = query.trim().toLowerCase();
	if (!q) return false;
	if (country.name.toLowerCase().includes(q)) return true;
	if (country.iso3.toLowerCase().includes(q)) return true;
	return Boolean(country.aliases?.some((a) => a.toLowerCase().includes(q)));
}
function readToken(name, fallback) {
	if (typeof document === "undefined") return fallback;
	return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}
function createInterpolator() {
	return rgbBasis([
		readToken("--map-low", "#163b36"),
		readToken("--map-mid", "#3f8f7c"),
		readToken("--map-high", "#dbeee6")
	]);
}
function uniqueSorted(values) {
	return Array.from(new Set(values.filter((v) => Number.isFinite(v)))).sort((a, b) => a - b);
}
function logTicks(min, max) {
	if (min <= 0) min = .01;
	const ticks = [min];
	const logMin = Math.log10(min);
	const logMax = Math.log10(max);
	const steps = 3;
	for (let i = 1; i < steps; i += 1) ticks.push(10 ** (logMin + (logMax - logMin) * i / steps));
	ticks.push(max);
	return ticks;
}
function createColorScale(metric, values) {
	const sorted = uniqueSorted(values);
	if (sorted.length < 2) return null;
	const interpolator = createInterpolator();
	let min = sorted[0];
	const max = sorted[sorted.length - 1];
	if (metric.scale === "log") {
		min = Math.max(min, .05);
		const scale = sequentialLog(interpolator).domain([min, max]).clamp(true);
		return {
			domain: [min, max],
			interpolator,
			color: (value) => scale(Math.max(value, min)),
			ticks: logTicks(min, max)
		};
	}
	const scale = sequential(interpolator).domain([min, max]).clamp(true);
	const mid = sorted[Math.floor(sorted.length / 2)];
	return {
		domain: [min, max],
		interpolator,
		color: (value) => scale(value),
		ticks: [
			min,
			mid,
			max
		]
	};
}
function quantile(sorted, q) {
	if (sorted.length === 0) return 0;
	const i = (sorted.length - 1) * q;
	const lo = Math.floor(i);
	const hi = Math.ceil(i);
	if (lo === hi) return sorted[lo];
	return sorted[lo] * (hi - i) + sorted[hi] * (i - lo);
}
var usd = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0
});
var usdCompact = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	notation: "compact",
	maximumFractionDigits: 1
});
var num = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
var num1 = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });
var num2 = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });
var METRICS = [
	{
		id: "gdp",
		label: "GDP per capita",
		shortLabel: "GDP / capita",
		unit: "PPP, current int. $",
		description: "Purchasing-power income per person. A wide, log-scaled view of living standards across economies.",
		scale: "log",
		format: (v) => usd.format(v),
		formatShort: (v) => usdCompact.format(v)
	},
	{
		id: "life",
		label: "Life expectancy",
		shortLabel: "Life exp.",
		unit: "years at birth",
		description: "Average years a newborn would live if current mortality patterns held. A compact summary of health conditions.",
		scale: "linear",
		format: (v) => `${num1.format(v)} yrs`,
		formatShort: (v) => num1.format(v)
	},
	{
		id: "hdi",
		label: "Human development",
		shortLabel: "HDI",
		unit: "HDI, 0–1",
		description: "Composite of health, education, and income. Higher values mark longer lives, more schooling, and greater means.",
		scale: "linear",
		format: (v) => num2.format(v),
		formatShort: (v) => num2.format(v)
	},
	{
		id: "co2",
		label: "CO₂ per capita",
		shortLabel: "CO₂ / capita",
		unit: "tonnes / person",
		description: "Territory-based carbon dioxide from fossil fuels and industry, divided by population. Energy systems show through.",
		scale: "log",
		format: (v) => `${num1.format(v)} t`,
		formatShort: (v) => num1.format(v)
	},
	{
		id: "density",
		label: "Population density",
		shortLabel: "Density",
		unit: "people / km²",
		description: "People per square kilometre of land. City-states and river valleys read hot; deserts and tundra stay cool.",
		scale: "log",
		format: (v) => `${num.format(v)} /km²`,
		formatShort: (v) => num.format(v)
	}
];
var METRIC_BY_ID = Object.fromEntries(METRICS.map((m) => [m.id, m]));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva([
	"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
	"transition-[color,background-color,box-shadow,transform,opacity] duration-150",
	"ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-40",
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
	"active:enabled:scale-[0.96]"
].join(" "), {
	variants: {
		variant: {
			default: "bg-accent text-accent-foreground hover:opacity-90",
			ghost: "text-fg hover:bg-fg/6",
			outline: "bg-surface text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			subtle: "bg-fg/6 text-fg hover:bg-fg/10"
		},
		size: {
			default: "h-11 rounded-lg px-4 text-sm",
			sm: "h-9 rounded-md px-3 text-sm",
			icon: "size-11 rounded-lg",
			iconSm: "size-9 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
function ranked(metricId) {
	return [...COUNTRIES].sort((a, b) => b[metricId] - a[metricId]);
}
function percentileOf(value, metricId) {
	const values = COUNTRIES.map((c) => c[metricId]).sort((a, b) => a - b);
	return values.filter((v) => v < value).length / Math.max(values.length - 1, 1);
}
function Bar({ value, metricId }) {
	const pct = Math.max(4, Math.min(100, percentileOf(value, metricId) * 100));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-1.5 overflow-hidden rounded-full bg-fg/8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full bg-primary transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
			style: { width: `${pct}%` }
		})
	});
}
function RankRow({ rank, country, metric, active, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onSelect(country.id),
		className: cn("grid w-full grid-cols-[1.5rem_1fr_auto] items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm", active ? "bg-fg/8" : "hover:bg-fg/5"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs text-subtle tabular-nums",
				children: rank
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate text-fg",
				children: country.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs text-muted tabular-nums",
				children: metric.formatShort(country[metric.id])
			})
		]
	});
}
function CountryPanel({ metric, selected, onSelect, onClose }) {
	const list = ranked(metric.id);
	const values = list.map((c) => c[metric.id]).sort((a, b) => a - b);
	const low = values[0] ?? 0;
	const high = values[values.length - 1] ?? 0;
	const median = quantile(values, .5);
	const rank = selected ? list.findIndex((c) => c.id === selected.id) + 1 : 0;
	if (!selected) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl leading-tight text-fg text-balance",
				children: metric.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted text-pretty",
				children: metric.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-5 grid grid-cols-3 gap-2",
				children: [
					["Low", metric.formatShort(low)],
					["Median", metric.formatShort(median)],
					["High", metric.formatShort(high)]
				].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-fg/5 px-2.5 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-subtle",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-mono text-sm text-fg tabular-nums",
						children: value
					})]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 min-h-0 flex-1 overflow-auto pr-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wide text-subtle uppercase",
						children: "Highest"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1",
						children: list.slice(0, 6).map((country, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RankRow, {
							rank: i + 1,
							country,
							metric,
							onSelect
						}, country.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs font-medium tracking-wide text-subtle uppercase",
						children: "Lowest"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1",
						children: list.slice(-5).reverse().map((country) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RankRow, {
							rank: list.findIndex((c) => c.id === country.id) + 1,
							country,
							metric,
							onSelect
						}, country.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs text-subtle",
				children: "Click a country on the map, or search, to inspect it."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl leading-tight text-fg text-balance",
					children: selected.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: [
						selected.region,
						" · ",
						selected.iso3
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "iconSm",
					onClick: onClose,
					"aria-label": "Clear selection",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 font-mono text-3xl tracking-tight text-fg tabular-nums",
				children: metric.format(selected[metric.id])
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: metric.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-fg",
				children: [
					"Rank ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono tabular-nums",
						children: rank
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-subtle",
						children: [" of ", list.length]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
				value: selected[metric.id],
				metricId: metric.id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-subtle",
				children: [
					"World median ",
					metric.format(median),
					" · ",
					Math.round(percentileOf(selected[metric.id], metric.id) * 100),
					"th percentile"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 min-h-0 flex-1 overflow-auto pr-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wide text-subtle uppercase",
						children: "All indicators"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-3",
						children: METRICS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: item.shortLabel
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm text-fg tabular-nums",
								children: item.format(selected[item.id])
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								value: selected[item.id],
								metricId: item.id
							})
						})] }, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs font-medium tracking-wide text-subtle uppercase",
						children: "Nearby in rank"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1",
						children: list.slice(Math.max(0, rank - 3), Math.min(list.length, rank + 2)).map((country) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RankRow, {
							rank: list.findIndex((c) => c.id === country.id) + 1,
							country,
							metric,
							active: country.id === selected.id,
							onSelect
						}, country.id))
					})
				]
			})
		]
	});
}
function CountrySearch({ onPick }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)(0);
	const rootRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const results = (0, import_react.useMemo)(() => {
		if (query.trim().length < 1) return [];
		return COUNTRIES.filter((c) => countryMatchesQuery(c, query)).slice(0, 8);
	}, [query]);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "/" && !(event.target instanceof HTMLInputElement) && !(event.target instanceof HTMLTextAreaElement)) {
				event.preventDefault();
				inputRef.current?.focus();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	(0, import_react.useEffect)(() => {
		const onDoc = (event) => {
			if (!rootRef.current?.contains(event.target)) setOpen(false);
		};
		document.addEventListener("mousedown", onDoc);
		return () => document.removeEventListener("mousedown", onDoc);
	}, []);
	const pick = (id) => {
		onPick(id);
		setQuery("");
		setOpen(false);
		inputRef.current?.blur();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: "relative w-full max-w-72",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				value: query,
				onChange: (event) => {
					setQuery(event.target.value);
					setOpen(true);
					setActive(0);
				},
				onFocus: () => setOpen(true),
				onKeyDown: (event) => {
					if (event.key === "ArrowDown") {
						event.preventDefault();
						setActive((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
					} else if (event.key === "ArrowUp") {
						event.preventDefault();
						setActive((i) => Math.max(i - 1, 0));
					} else if (event.key === "Enter" && results[active]) {
						event.preventDefault();
						pick(results[active].id);
					} else if (event.key === "Escape") {
						setOpen(false);
						setQuery("");
					}
				},
				placeholder: "Search countries",
				"aria-label": "Search countries",
				className: "h-11 w-full rounded-xl bg-fg/5 pr-10 pl-10 text-sm text-fg outline-none ring-ring placeholder:text-subtle focus:ring-2"
			}),
			query ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-subtle hover:text-fg",
				onClick: () => {
					setQuery("");
					inputRef.current?.focus();
				},
				"aria-label": "Clear search",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
				className: "pointer-events-none absolute top-1/2 right-3 hidden -translate-y-1/2 rounded-md bg-fg/8 px-1.5 py-0.5 font-mono text-xs text-subtle md:inline",
				children: "/"
			}),
			open && results.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "absolute top-[calc(100%+6px)] z-40 max-h-72 w-full overflow-auto rounded-xl bg-surface py-1 shadow-[var(--shadow-border)]",
				children: results.map((country, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onMouseEnter: () => setActive(index),
					onClick: () => pick(country.id),
					className: cn("flex w-full items-center justify-between px-3 py-2.5 text-left text-sm", index === active ? "bg-fg/8 text-fg" : "text-fg"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: country.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-subtle",
						children: country.iso3
					})]
				}) }, country.id))
			}) : null
		]
	});
}
function MapLegend({ metric, colorScale }) {
	if (!colorScale) return null;
	const stops = Array.from({ length: 12 }, (_, i) => colorScale.interpolator(i / 11));
	const [min, max] = colorScale.domain;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none w-[min(18rem,calc(100vw-2rem))] rounded-xl bg-surface/92 px-3 py-3 shadow-[var(--shadow-border)] backdrop-blur-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: metric.shortLabel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 h-2 overflow-hidden rounded-full",
				style: { backgroundImage: `linear-gradient(to right, ${stops.join(", ")})` },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1.5 flex justify-between font-mono text-xs text-muted tabular-nums",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: metric.formatShort(min) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: metric.formatShort(max) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-subtle",
				children: metric.unit
			})
		]
	});
}
function MapTooltip({ hover, metric, record }) {
	if (!hover) return null;
	const value = record?.[metric.id];
	const vw = typeof window === "undefined" ? 1280 : window.innerWidth;
	const vh = typeof window === "undefined" ? 800 : window.innerHeight;
	const left = hover.x + 16 > vw - 200 ? hover.x - 176 : hover.x + 16;
	const top = hover.y + 16 > vh - 88 ? hover.y - 72 : hover.y + 16;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed z-50 w-44 rounded-lg bg-surface px-3 py-2 shadow-[var(--shadow-border)]",
		style: {
			left,
			top
		},
		role: "status",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "truncate text-sm font-medium text-fg",
			children: hover.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 font-mono text-sm text-fg tabular-nums",
			children: value == null ? "No data" : metric.format(value)
		})]
	});
}
function MetricSwitcher({ value, onChange }) {
	const listRef = (0, import_react.useRef)(null);
	const [pill, setPill] = (0, import_react.useState)({
		x: 0,
		width: 0,
		ready: false
	});
	(0, import_react.useLayoutEffect)(() => {
		const root = listRef.current;
		if (!root) return;
		const active = root.querySelector(`[data-metric="${value}"]`);
		if (!active) return;
		setPill({
			x: active.offsetLeft,
			width: active.offsetWidth,
			ready: true
		});
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: listRef,
		role: "tablist",
		"aria-label": "Map metric",
		className: "relative flex min-h-11 items-center gap-0.5 overflow-x-auto rounded-xl bg-fg/5 p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: cn("absolute top-1 bottom-1 rounded-lg bg-surface shadow-[var(--shadow-border)]", pill.ready && "transition-[transform,width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"),
			style: {
				width: pill.width,
				transform: `translateX(${pill.x}px)`
			}
		}), METRICS.map((metric) => {
			const active = metric.id === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "tab",
				"data-metric": metric.id,
				"aria-selected": active,
				onClick: () => onChange(metric.id),
				className: cn("relative z-10 shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150", active ? "text-fg" : "text-muted hover:text-fg"),
				children: metric.shortLabel
			}, metric.id);
		})]
	});
}
function featureId(f) {
	if (f.id == null || f.id === "") return `name:${f.properties.name}`;
	const raw = String(f.id);
	return /^\d+$/.test(raw) ? raw.padStart(3, "0") : raw;
}
function prefersReducedMotion() {
	return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function WorldMap({ metricId, colorScale, selectedId, flyToId, flyNonce, onSelect, onHover, onReady, onZoomApi }) {
	const wrapRef = (0, import_react.useRef)(null);
	const svgRef = (0, import_react.useRef)(null);
	const worldRef = (0, import_react.useRef)(null);
	const zoomRef = (0, import_react.useRef)(null);
	const downRef = (0, import_react.useRef)(null);
	const countriesRef = (0, import_react.useRef)([]);
	const [size, setSize] = (0, import_react.useState)({
		width: 0,
		height: 0
	});
	const [topology, setTopology] = (0, import_react.useState)(null);
	const [loadError, setLoadError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const el = wrapRef.current;
		if (!el) return;
		const update = () => {
			const rect = el.getBoundingClientRect();
			setSize({
				width: Math.max(1, rect.width),
				height: Math.max(1, rect.height)
			});
		};
		update();
		const observer = new ResizeObserver(update);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		fetch("/data/countries-50m.json").then((res) => {
			if (!res.ok) throw new Error("Could not load world boundaries.");
			return res.json();
		}).then((data) => {
			if (!cancelled) setTopology(data);
		}).catch((err) => {
			if (!cancelled) setLoadError(err instanceof Error ? err.message : "Could not load world boundaries.");
		});
		return () => {
			cancelled = true;
		};
	}, []);
	const collection = (0, import_react.useMemo)(() => {
		if (!topology) return null;
		return feature_default(topology, topology.objects.countries);
	}, [topology]);
	const layout = (0, import_react.useMemo)(() => {
		if (!collection || size.width < 8 || size.height < 8) return {
			sphere: "",
			graticule: "",
			countries: []
		};
		const padX = Math.min(48, size.width * .04);
		const padY = Math.min(36, size.height * .06);
		const projection = naturalEarth1_default().fitExtent([[padX, padY], [size.width - padX, size.height - padY]], { type: "Sphere" });
		const path = path_default(projection);
		const countries = [];
		for (const geoFeature of collection.features) {
			const id = featureId(geoFeature);
			if (id === "010") continue;
			const d = path(geoFeature);
			if (!d) continue;
			countries.push({
				id,
				name: COUNTRY_BY_ID.get(id)?.name ?? geoFeature.properties.name,
				path: d,
				centroid: path.centroid(geoFeature),
				bounds: path.bounds(geoFeature),
				record: COUNTRY_BY_ID.get(id)
			});
		}
		return {
			sphere: path({ type: "Sphere" }) ?? "",
			graticule: path(graticule().step([20, 20])()) ?? "",
			countries
		};
	}, [collection, size]);
	(0, import_react.useEffect)(() => {
		countriesRef.current = layout.countries;
		if (layout.countries.length) onReady(layout.countries);
	}, [layout.countries, onReady]);
	const applyZoom = (0, import_react.useCallback)((event) => {
		worldRef.current?.setAttribute("transform", event.transform.toString());
	}, []);
	(0, import_react.useEffect)(() => {
		const svgEl = svgRef.current;
		if (!svgEl || size.width < 8) return;
		const svg = select_default(svgEl);
		const zoom$1 = zoom_default().scaleExtent([1, 16]).extent([[0, 0], [size.width, size.height]]).translateExtent([[-size.width * .35, -size.height * .35], [size.width * 1.35, size.height * 1.35]]).on("zoom", applyZoom);
		svg.call(zoom$1);
		zoomRef.current = zoom$1;
		const duration = () => prefersReducedMotion() ? 0 : 280;
		onZoomApi({
			zoomIn: () => {
				svg.transition().duration(duration()).call(zoom$1.scaleBy, 1.45);
			},
			zoomOut: () => {
				svg.transition().duration(duration()).call(zoom$1.scaleBy, .7);
			},
			reset: () => {
				svg.transition().duration(prefersReducedMotion() ? 0 : 500).call(zoom$1.transform, identity);
			}
		});
		return () => {
			zoom$1.on("zoom", null);
			svg.on(".zoom", null);
		};
	}, [
		applyZoom,
		onZoomApi,
		size.height,
		size.width
	]);
	(0, import_react.useEffect)(() => {
		if (!flyToId || !svgRef.current || !zoomRef.current) return;
		const country = countriesRef.current.find((item) => item.id === flyToId);
		if (!country) return;
		const [[x0, y0], [x1, y1]] = country.bounds;
		const dx = Math.max(x1 - x0, 8);
		const dy = Math.max(y1 - y0, 8);
		const cx = (x0 + x1) / 2;
		const cy = (y0 + y1) / 2;
		const scale = Math.max(1.2, Math.min(12, .62 / Math.max(dx / size.width, dy / size.height)));
		const transform = identity.translate(size.width / 2, size.height / 2).scale(scale).translate(-cx, -cy);
		select_default(svgRef.current).transition().duration(prefersReducedMotion() ? 0 : 850).call(zoomRef.current.transform, transform);
	}, [
		flyNonce,
		flyToId,
		size.height,
		size.width
	]);
	const selected = layout.countries.find((country) => country.id === selectedId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrapRef,
		className: "relative h-full w-full overflow-hidden bg-bg",
		children: [
			loadError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-muted",
				children: loadError
			}) : null,
			!topology && !loadError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-40 w-2/3 max-w-md rounded-full bg-fg/4 shimmer",
					"aria-hidden": "true"
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				ref: svgRef,
				className: "block h-full w-full cursor-grab touch-none select-none active:cursor-grabbing",
				viewBox: `0 0 ${Math.max(size.width, 1)} ${Math.max(size.height, 1)}`,
				role: "img",
				"aria-label": "World choropleth map",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					ref: worldRef,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: layout.sphere,
							className: "fill-map-ocean stroke-fg/12",
							strokeWidth: 1,
							onClick: () => onSelect(null)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: layout.graticule,
							className: "pointer-events-none fill-none stroke-map-graticule",
							strokeWidth: .6
						}),
						layout.countries.map((country) => {
							const value = country.record?.[metricId] ?? null;
							const fill = value == null || !colorScale ? "var(--map-nodata)" : colorScale.color(value);
							const isSelected = country.id === selectedId;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: country.path,
								fill,
								"data-country": country.id,
								className: cn("country-path cursor-pointer stroke-bg", isSelected && "is-selected"),
								onPointerEnter: (event) => onHover({
									id: country.id,
									name: country.name,
									x: event.clientX,
									y: event.clientY
								}),
								onPointerMove: (event) => onHover({
									id: country.id,
									name: country.name,
									x: event.clientX,
									y: event.clientY
								}),
								onPointerLeave: () => onHover(null),
								onPointerDown: (event) => {
									downRef.current = {
										x: event.clientX,
										y: event.clientY
									};
								},
								onPointerUp: (event) => {
									const start = downRef.current;
									downRef.current = null;
									if (!start) return;
									if (Math.hypot(event.clientX - start.x, event.clientY - start.y) > 6) return;
									onSelect(country.id === selectedId ? null : country.id);
									onHover(null);
								}
							}, country.id);
						}),
						selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: selected.path,
							fill: "none",
							className: "country-path is-selected pointer-events-none stroke-fg"
						}) : null
					]
				})
			})
		]
	});
}
function ZoomControls({ api }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col overflow-hidden rounded-xl bg-surface/92 shadow-[var(--shadow-border)] backdrop-blur-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "iconSm",
				onClick: () => api?.zoomIn(),
				"aria-label": "Zoom in",
				disabled: !api,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "iconSm",
				onClick: () => api?.zoomOut(),
				"aria-label": "Zoom out",
				disabled: !api,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "iconSm",
				onClick: () => api?.reset(),
				"aria-label": "Reset map view",
				disabled: !api,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
			})
		]
	});
}
function Mark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: "size-7 text-primary",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "11.5",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "16",
				cy: "16",
				rx: "5",
				ry: "11.5",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M5 16h22M7.2 10.5h17.6M7.2 21.5h17.6",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.1"
			})
		]
	});
}
function MeridianApp() {
	const [metricId, setMetricId] = (0, import_react.useState)("gdp");
	const [selectedId, setSelectedId] = (0, import_react.useState)(null);
	const [flyToId, setFlyToId] = (0, import_react.useState)(null);
	const [flyNonce, setFlyNonce] = (0, import_react.useState)(0);
	const [hover, setHover] = (0, import_react.useState)(null);
	const [countries, setCountries] = (0, import_react.useState)([]);
	const [zoomApi, setZoomApi] = (0, import_react.useState)(null);
	const metric = METRIC_BY_ID[metricId];
	const selected = selectedId ? COUNTRY_BY_ID.get(selectedId) ?? null : null;
	const values = (0, import_react.useMemo)(() => countries.map((c) => c.record?.[metricId]).filter((v) => v != null), [countries, metricId]);
	const colorScale = (0, import_react.useMemo)(() => createColorScale(metric, values), [metric, values]);
	const onReady = (0, import_react.useCallback)((next) => {
		setCountries(next);
	}, []);
	const onZoomApi = (0, import_react.useCallback)((api) => {
		setZoomApi(api);
	}, []);
	const selectCountry = (0, import_react.useCallback)((id, fly = false) => {
		setSelectedId(id);
		if (id && fly) {
			setFlyToId(id);
			setFlyNonce((n) => n + 1);
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col overflow-hidden bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "z-20 flex shrink-0 flex-col gap-3 border-b border-border px-3 py-3 sm:px-4 lg:flex-row lg:items-center lg:gap-4 lg:px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-full items-center justify-between gap-3 lg:w-auto lg:justify-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg leading-none tracking-tight",
								children: "Meridian"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-xs text-subtle",
								children: "Country metrics, mapped"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0 flex-1 lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountrySearch, { onPick: (id) => selectCountry(id, true) })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricSwitcher, {
						value: metricId,
						onChange: setMetricId
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountrySearch, { onPick: (id) => selectCountry(id, true) })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex min-h-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldMap, {
							metricId,
							colorScale,
							selectedId,
							flyToId,
							flyNonce,
							onSelect: (id) => selectCountry(id, false),
							onHover: setHover,
							onReady,
							onZoomApi
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pointer-events-none absolute inset-0 z-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-auto absolute bottom-3 left-3 sm:bottom-4 sm:left-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapLegend, {
									metric,
									colorScale
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-auto absolute right-3 bottom-24 sm:top-4 sm:right-4 sm:bottom-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomControls, { api: zoomApi })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapTooltip, {
							hover,
							metric,
							record: hover ? COUNTRY_BY_ID.get(hover.id) : void 0
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden w-[22.5rem] shrink-0 border-l border-border bg-surface/80 p-5 lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryPanel, {
						metric,
						selected,
						onSelect: (id) => selectCountry(id, true),
						onClose: () => selectCountry(null)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("sheet-mobile absolute inset-x-0 bottom-0 z-30 overflow-hidden rounded-t-2xl bg-surface p-4 shadow-[var(--shadow-border)] transition-transform duration-300 ease-out lg:hidden", selected ? "translate-y-0" : "translate-y-full"),
					children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryPanel, {
						metric,
						selected,
						onSelect: (id) => selectCountry(id, true),
						onClose: () => selectCountry(null)
					}) : null
				})
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeridianApp, {});
}
//#endregion
export { Home as component };
