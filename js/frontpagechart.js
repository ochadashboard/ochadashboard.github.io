$(document).ready(function(){
  var chart = AmCharts.makeChart("donorcontainer", {
    "type": "serial",
    "theme": "none",
    "rotate": true,
    "dataProvider": [{
        "country": "USA",
        "visits": 2025
    }, {
        "country": "China",
        "visits": 1882
    }, {
        "country": "Japan",
        "visits": 1809
    }, {
        "country": "Germany",
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
    },],
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
});//end donor charts

var nutritionvalues = [100.00,100.00,100.00,80.00,80.00,66.67];

// Draw a sparkline for the #sparkline element
$('#nutritionsparkline').sparkline(nutritionvalues, {
    type: "bar",
    tooltipFormat: '{{offset:offset}} {{value}}',
    tooltipValueLookups: {
        'offset': {
            0: 'Jul',
            1: 'Aug',
            2: 'Sep',
            3: 'Oct',
            4: 'Nov',
            5: 'Dev',
        }
    },
});


});