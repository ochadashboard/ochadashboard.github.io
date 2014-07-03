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


//Morris Displacement Chart
        /*Morris.Line({
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
        });*/

    

    ///Bootbox popup
    $("#f_security_explain").click(function(){
        var some_html = '<span class="icon-cluster_nutrition bootbox_icon"></span>';
        some_html += '<h2>Food Security Data</h2><br />';
        some_html += '<h4>This data is obtained from UNICEF</h4>';
        bootbox.alert(some_html);
    });
    $("#f_nutritionpie_explain").click(function(){
        var some_html = '';
        some_html += '<h2>Conflict Report Data</h2><br />';
        some_html += '<h4>This data is obtained from CEWARN and other partners</h4>';
        some_html += '<h4></h4>';
        bootbox.alert(some_html);
    });
    $("#f_fundingchart_explain").click(function(){
        var some_html = '<span class="icon-activity_fund bootbox_icon"></span>';
        some_html += '<h2>Funding Data</h2><br />';
        some_html += '<h4>This data is obtained from FTS API at fts.unocha.org</h4>';
        some_html += '<h4>The data is updated when FTS updates and therefore keeps a correct record of all funding data.</h4>';
        bootbox.alert(some_html);
    });
    $("#f_displacementchart_explain").click(function(){
        var some_html = '<span class="crisis_population_displacement bootbox_icon"></span>';
        some_html += '<h2>Displacement Data</h2><br />';
        some_html += '<h4>This data is obtained from UNHCR API</h4>';
        some_html += '<h4>The data is updated when FTS updates and therefore keeps a correct record of all funding data.</h4>';
        bootbox.alert(some_html);
    });

    $("#f_malnutrition_explain").click(function(){
        var some_html = '<span class="crisis_population_displacement bootbox_icon"></span>';
        some_html += '<h2>Severe Acute malnutrition</h2><br />';
        some_html += '<h4>This data represents the country worst affected by malnutrition</h4>';
        some_html += '<h4>The data is representative of children under the age of 5</h4>';
        bootbox.alert(some_html);
    });

    //early recovery
    var recoverydata = [{
        value: 30,
        color: "#40ca39"
    }, {
        value: 50,
        color: "#8fe48a"
    }

    ]

    var recoveryoptions = {
        animation: false,
        percentageInnerCutout : 60,
    };

    //Get the context of the canvas element we want to select
    var c = $('#recoveryFundingChart');
    var ct = c.get(0).getContext('2d');
    var ctx = document.getElementById("recoveryFundingChart").getContext("2d");
    /*************************************************************************/
    recoveryFundingChart = new Chart(ct).Doughnut(recoverydata, recoveryoptions);

    //Wash donut
    var washdata = [{
        value: 66.6,
        color: "#40ca39"
    }, {
        value: 60.4,
        color: "#8fe48a"
    }

    ]
    var washoptions = {
        animation: false,
        percentageInnerCutout : 60,
    };
    var washc = $('#washFundingChart');
    var washct = washc.get(0).getContext('2d');
    var washctx = document.getElementById("washFundingChart").getContext("2d");
    /*************************************************************************/
    washFundingChart = new Chart(washct).Doughnut(washdata, washoptions);

});