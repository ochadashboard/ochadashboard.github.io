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



});