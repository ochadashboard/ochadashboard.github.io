/*
	although ammap has methos like getAreaCenterLatitude and getAreaCenterLongitude,
	they are not suitable in quite a lot of cases as the center of some countries
	is even outside the country itself (like US, because of Alaska and Hawaii)
	That's why wehave the coordinates stored here
*/

var latlong = {};
latlong["BI"] = {"latitude":-3.5, "longitude":30};
latlong["ER"] = {"latitude":15, "longitude":39};
latlong["ET"] = {"latitude":8, "longitude":38};
latlong["KE"] = {"latitude":1, "longitude":38};
latlong["SD"] = {"latitude":15, "longitude":30};
latlong["SO"] = {"latitude":10, "longitude":49};
latlong["UG"] = {"latitude":1, "longitude":32};


var mapData = [
{"code":"BI" , "name":"Burundi", "value":8575172, "color":"#de4c4f"},
{"code":"ER" , "name":"Eritrea", "value":5415280, "color":"#de4c4f"},
{"code":"ET" , "name":"Ethiopia", "value":84734262, "color":"#de4c4f"},
{"code":"KE" , "name":"Kenya", "value":41609728, "color":"#de4c4f"},
{"code":"SO" , "name":"Somalia", "value":9556873, "color":"#de4c4f"},
{"code":"SD" , "name":"Sudan", "value":34735288, "color":"#de4c4f"},
{"code":"UG" , "name":"Uganda", "value":34509205, "color":"#de4c4f"},
];


var map;
var minBulletSize = 3;
var maxBulletSize = 70;
var min = Infinity;
var max = -Infinity;


// get min and max values
for (var i = 0; i < mapData.length; i++) {
	var value = mapData[i].value;
	if (value < min) {
		min = value;
	}
	if (value > max) {
		max = value;
	}
}

 // build map
AmCharts.ready(function() {
  	AmCharts.theme = AmCharts.themes.dark;
	map = new AmCharts.AmMap();
  	map.pathToImages = "http://www.amcharts.com/lib/3/images/";

	map.addTitle("2014 conflict data", 14);
	map.addTitle("source: Various", 11);
	map.areasSettings = {
		unlistedAreasColor: "#000000",
		unlistedAreasAlpha: 0.1,
        selectedColor: "#CC0000"
	};
	map.imagesSettings.balloonText = "<span style='font-size:14px;'><b>[[title]]</b>: [[value]]</span>";
    
    map.zoomControl = {
            zoomControlEnabled:false,
        };
	var dataProvider = {
		mapVar: AmCharts.maps.worldLow,
		images: []
	}

	// create circle for each country
	for (var i = 0; i < mapData.length; i++) {
		var dataItem = mapData[i];
		var value = dataItem.value;
		// calculate size of a bubble
		var size = (value - min) / (max - min) * (maxBulletSize - minBulletSize) + minBulletSize;
		if (size < minBulletSize) {
			size = minBulletSize;
		}
		var id = dataItem.code;

		dataProvider.images.push({
			type: "circle",
			width: size,
			height: size,
            zoomLevel:15,
            zoomLongitude:10,
            zoomLatitude:52,
			color: dataItem.color,
			longitude: latlong[id].longitude,
			latitude: latlong[id].latitude,
			title: dataItem.name,
			value: value,
            areas:[{id:"KE"},{id:"UG"},{id:"SO"}] 
		});
	}

	map.dataProvider = dataProvider;

	map.write("mapdiv");
});