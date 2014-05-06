$(document).ready(function () {
    var indexchart2;
    indexchart2 = new Highcharts.Chart({
            chart: {
                renderTo: 'regionaltrends',
                type: 'pie'
            },
            title: {
                text: 'Funding Statistics 6 May 2014'
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                }
            },
            series: [{
                name: 'Browsers',
                data: [["Unmet Funding",6],["Met Funding",4]],
                size: '80%',
                innerSize: '40%',
                showInLegend:true,
                dataLabels: {
                    enabled: false
                }
            }]
        });
});