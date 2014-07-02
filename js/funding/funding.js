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


});