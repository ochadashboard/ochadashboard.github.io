$(document).ready(function () {
$(function () {
    
        var chart = new Highcharts.Chart({
            chart: {
                type: 'column',
                renderTo: 'kenyachartdiv',
            },
            title: {
                text: 'Funding Trend'
            },
            xAxis: {
                categories: ['January', 'February', 'March', 'April', 'May','June','July','August','September','October','November','December']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Funding in million USD'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -70,
                verticalAlign: 'top',
                y: 20,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                }
            },
            series: [{
                name: 'Met Funding',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Unmet Funding',
                data: [2, 2, 3, 2, 1]
            }, ]
        });
    });
});
    