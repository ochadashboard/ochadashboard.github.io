var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "none",
    "dataProvider": [{
        "country": "2015",
        "visits": 2025
    }, {
        "country": "2014",
        "visits": 1882
    }, {
        "country": "2013",
        "visits": 1809
    }, {
        "country": "2012",
        "visits": 1322
    }, {
        "country": "UK",
        "visits": 1122
    }, {
        "country": "France",
        "visits": 1114
    }, {
        "country": "India",
        "visits": 984
    }, {
        "country": "Spain",
        "visits": 711
    }, {
        "country": "Netherlands",
        "visits": 665
    }, {
        "country": "Russia",
        "visits": 580
    }, {
        "country": "South Korea",
        "visits": 443
    }, {
        "country": "Canada",
        "visits": 441
    }, {
        "country": "Brazil",
        "visits": 395
    }],
    "valueAxes": [{
        "gridColor":"#FFFFFF",
		"gridAlpha": 0.2,
		"dashLength": 0
    }],
    "gridAboveGraphs": true,
    "startDuration": 1,
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "visits"		
    }],
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0
    },
	"exportConfig":{
	  "menuTop": 0,
	  "menuItems": [{
      "icon": '/lib/3/images/export.png',
      "format": 'png'	  
      }]  
	}
});