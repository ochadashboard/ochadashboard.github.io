$( document ).ready(function() {
    //Highcharts for refugess and displacenets
    $(function () {
        $('#refugeehighcharts').highcharts({
            title: {
                text: 'Monthly Average Temperature',
                x: -20 //center
            },
            
            xAxis: {
                categories: ['2009', '2010', '2011','2012','2013']
            },
            yAxis: {                
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0,
                enabled:false
            },
            credits: {
                enabled:false
            },
            series: [{
                name: 'Refugees',
                data: [7.0, 6.9, 9.5,2,4]
            },]
        });
    });//end displcement

    //Start Nutrition Cluster Funding Chart
    $(function () {
        var hovertext = 'Million';
        $('#nutritionfundingsummary').highcharts({
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

    //WashFunding
    //Start Nutrition Cluster Funding Chart
    $(function () {
        var hovertext = 'Million';
        $('#washfundingsummary').highcharts({
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

    //Cluster Funding
    $(function () {
        $('#clusterchart').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Cluster funding'
            },
            xAxis: {
                categories: ['Education', 'Nutrition', 'Shelter', 'Other', 'Health']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Cluster Funding'
                }
            },
            legend: {
                reversed: true,
                enabled:false,
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
                series: [{
                name: 'Funded',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Unfunded',
                data: [2, 2, 3, 2, 1]
            }]
        });
    });

    //Replacement Donut
    $(function () {
        $('#sm-pie').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotShadow: false
            },
            title: {
                text: null
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}</b>'
            },
            colors: ['#7db0e9','#5295e0','#2f7ed8', '#0e6adf', '#084d9a','#1aadce', 
   '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    innerSize: '60%',
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                        format: '<b>{point.name}</b>: {point.y}',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Conflict Reports',
                data: [
                    ['Others',7],
                    ['Ethiopia',18],
                    ['Uganda',26],
                    ['Kenya',45],              
                    
                    ['South Sudan',60],
                    
                ]
            }]
        });
    });

    //Graph stacked funding
    $(function () {
        $('#fundingcontainer').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: ['KE', 'UG', 'SSD', 'SD', 'SOM']
            },
            credits:{enabled:false},
            yAxis: {
                min: 0,
                title: {
                    text: 'Funding in Millions'
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                enabled:false
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': $'+ this.y +'<br/>Million';
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                }
            },
            series: [{
                name: 'Funded',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Unfunded',
                data: [2, 2, 3, 2, 1]
            }]
        });
    });
    
});