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

var nutritionvalues = [1,2.3,0.97,1.6,1.4,1.87];

// Draw a sparkline for the #sparkline element
$('#nutritionsparkline').sparkline(nutritionvalues, {
        type: "bar",
        barColor:"#f6b0ae",
        height: 40,
        barWidth: 10,
        tooltipFormat: '{{offset:offset}} : ${{value}}',
        tooltipValueLookups: {
            'offset': {
                0: '2009',
                1: '2010',
                2: '2011',
                3: '2012',
                4: '2013',
                5: '2014',
            }
        },
    });

//CLuster funding charts
var clusterchart = AmCharts.makeChart("clusterdiv",
        {
            "type": "serial",
    "theme": "none",
    "dataProvider": [{
        "cluster": "Nutrition",
        "europe": 2.5,
        "namerica": 2.5,
        "asia": 2.1,
        "lamerica": 0.3,
        "meast": 0.2,
        "africa": 0.1
    }, {
        "cluster": "Food Security",
        "europe": 2.6,
        "namerica": 2.7,
        "asia": 2.2,
        "lamerica": 0.3,
        "meast": 0.3,
        "africa": 0.1
    }, {
        "cluster": 2005,
        "europe": 2.8,
        "namerica": 2.9,
        "asia": 2.4,
        "lamerica": 0.3,
        "meast": 0.3,
        "africa": 0.1
    }],
    "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0.5,
        "gridAlpha": 0
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Europe",
        "type": "column",
        "color": "#000000",
        "valueField": "europe"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "North America",
        "type": "column",
        "color": "#000000",
        "valueField": "namerica"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Asia-Pacific",
        "type": "column",
        "color": "#000000",
        "valueField": "asia"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Latin America",
        "type": "column",
        "color": "#000000",
        "valueField": "lamerica"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Middle-East",
        "type": "column",
        "color": "#000000",
        "valueField": "meast"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Africa",
        "type": "column",
        "color": "#000000",
        "valueField": "africa"
    }],
    "rotate": true,
    "categoryField": "cluster",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left"
    },
    
    });

//Morris Displacement Chart
        Morris.Line({
          element: 'displacement_line_chart',
          data: [
            { 
              y: '2006', 
              refugees: 20  
            },
            { 
              y: '2007', 
              refugees: 75   
            },
            { 
              y: '2008', 
              refugees: 50   
            },
            { 
              y: '2009', 
              refugees: 75   
            },
            { 
              y: '2010', 
              refugees: 50 
            },
            { 
              y: '2011', 
              refugees: 75   
            },
            { 
              y: '2012', 
              refugees: 10 
            }
          ],
          hideHover: 'auto',
          xkey: 'y',
          ykeys: ['refugees'],
          labels: ['Refugees']
        });

    //Morris Donut
    Morris.Donut({
    element: 'sm-pie',
      data: [
        {
          label: "Kenya", 
          value: 12,
          formatted: 'at least 70%'
        },
        {
          label: "Uganda", 
          value: 30,
          formatted: 'at least 70%'
        },
        {
          label: "Burundi", 
          value: 20,
          formatted: 'at least 70%'
        },
        {
          label: "Burundi", 
          value: 20,
          formatted: 'at least 70%'
        }
      ],
      colors: ['#0BA462','#750f14','#e42f38','#95D7BB'],
      formatter: function (x, data) { return data.formatted; }
    });




});