$(document).ready(function(){
  $(function () {
        $('#donorcontainer').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Top Five Donors'
            },
            subtitle: {
                text: 'Source: fts.unocha.org'
            },
            xAxis: {
                categories: ['United States', 'United Kingdom', 'Norway', 'Denmark', 'Sweden'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor || '#FFFFFF'),
                shadow: true
            },
            credits: {
                enabled: false
            },
            colors: [
            '#1fb5ac'
            ],
            series: [{
                showInLegend:false,
                data: [1107, 310, 305, 203, 200]
            },]
        });
    });
    
});