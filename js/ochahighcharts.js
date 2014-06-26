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
                    ['Kenya',45],
                    ['Uganda',26],
                    ['Ethiopia',18],
                    ['South Sudan',60],
                    ['Others',7]
                ]
            }]
        });
    });
    
});