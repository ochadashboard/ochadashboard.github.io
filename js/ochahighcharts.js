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
                text: 'Stacked bar chart'
            },
            xAxis: {
                categories: ['Education', 'Nutrition', 'Shelter', 'Other', 'Health']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
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
    

});