$(document).ready(function(){
	$(function() {
	        $('#countryfundselector').change(function(){
	            $('.fundingcountry').hide();
	            $('#' + $(this).val()).show();
	        });
	 });

	//Djibouti Funding Chart
	$(function () {
		var hovertext = 'Million';
        $('#djiboutifundingsummary').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: null
            },
            xAxis: {
                labels:{
                  enabled: false
                },
                 lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0
             
            },
            yAxis: {
                min: 0,
                title: {
                    text: null
                },
                labels:{
                  enabled: false
                },
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0,
                gridLineWidth: 0
            },
            credits: {
            enabled:false
            },
            tooltip: {
                formatter: function() {
                var tooltip;
                
                 tooltip =  '<span style="color:' + this.series.color + '">' + this.series.name + '</span>: $<b>' + this.y + '</b> Million<br/>';
               
                return tooltip;
            	}
            },
            legend: {
                enabled:false
            },
            
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
                series: [{
                name: 'Unfunded',
                data: [57.8,]
            }, {
                name: 'Funded',
                data: [16.3,]
            }]
        });
    });

	//Somalia Funding Chart
	$(function () {
        $('#somaliafundingsummary').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: null
            },
            xAxis: {
                labels:{
                  enabled: false
                },
                 lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0
             
            },
            yAxis: {
                min: 0,
                title: {
                    text: null
                },
                labels:{
                  enabled: false
                },
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0,
                gridLineWidth: 0
            },
            credits: {
            enabled:false
            },
            legend: {
                reversed: true,
                enabled:false
            },
            tooltip: {
                formatter: function() {
                var tooltip;
                
                 tooltip =  '<span style="color:' + this.series.color + '">' + this.series.name + '</span>: $<b>' + this.y + '</b> Million<br/>';
               
                return tooltip;
                }
            },
            
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
                series: [{
                name: 'Unfunded',
                data: [697,]
            }, {
                name: 'Funded',
                data: [236,]
            }]
        });
    });

	//Uganda Funding Chart
	$(function () {
        $('#ugandafundingsummary').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: null
            },
            xAxis: {
                labels:{
                  enabled: false
                },
                 lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0
             
            },
            yAxis: {
                min: 0,
                title: {
                    text: null
                },
                labels:{
                  enabled: false
                },
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0,
                gridLineWidth: 0
            },
            credits: {
            enabled:false
            },
            legend: {
                reversed: true,
                enabled:false
            },
            
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
                series: [{
                name: 'Funded',
                data: [5,]
            }, {
                name: 'Unfunded',
                data: [2,]
            }]
        });
    });

    //Funding Summary Donut
    $(function() {
        var chart = new Highcharts.Chart({
            chart: {
                renderTo: 'fundingsummarydonut',
                type: 'pie'
            },
            title:{text:null},
            credits:{enabled:false},
            
            plotOptions: {
                pie: {
                    innerSize: '60%',
                    dataLabels:{enabled:false,},
                },
                
            },
            series: [{
                data: [
                    ['Funded', 44.2],
                    ['Unfunded', 26.6],
                    ]}]
        },
                                         
        function(chart) { // on complete
            var textX = chart.plotLeft + (chart.plotWidth  * 0.5);
            var textY = chart.plotTop  + (chart.plotHeight * 0.5);

            var span = '<span id="pieChartInfoText" style="position:absolute; text-align:center;">';
            span += '<span style="font-size: 32px">17.2</span><br>';
            span += '<span style="font-size: 16px">Billion</span>';
            span += '</span>';

            $("#addText").append(span);
            span = $('#pieChartInfoText');
            span.css('left', textX + (span.width() * -0.5));
            span.css('top', textY + (span.height() * -0.5));
        });
    });

    //Funding History
    $(function () {
        $('#fundinghistorycontainer').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Funding Request History'
            },
            credits:{enabled:false},
            legend:{enabled:false},
            
            xAxis: {
                categories: [
                    '2008',
                    '2009',
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount(millions $)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>${point.y:.1f}Million</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Amount',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6,]
    
            },]
        });
    });

    //Map
    $(function () {

        // Prepare demo data
        var data = [{
            'hc-key': 'ke',
            value: 3
        }, {
            'hc-key': 'ug',
            value: 5
        }, {
            'hc-key': 'sd',
            value: 5
        },
                     {
            'hc-key': 'et',
            value: 5
        }, {
            'hc-key': 'er',
            value: 5
        },{
            'hc-key': 'dj',
            value: 5
        }                , {
            'hc-key': 'ss',
            value: 5
        }, {
            'hc-key': 'bi',
            value: 5
        },
        {
            'hc-key': 'rw',
            value: 20
        }];


        // Initiate the chart
        $('#mapcontainer').highcharts('Map', {

            title: {
                text: null
            },
            



            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            legend:{enabled:false},


            series: [{
                data: data,
                mapData: Highcharts.maps['custom/africa'],
                joinBy: 'hc-key',
                colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', 
       '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
                allAreas: false,
                name: 'Random data',
                states: {
                    hover: {
                        color: '#BADA55'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }]
        });
    });


});