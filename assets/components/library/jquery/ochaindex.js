$(document).ready(function () {
    var indexchart2;
    var donorbarchart;
    var clusterpercentages;
    var donorfundingchart;

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

    var donorbarchart = new Highcharts.Chart({
        chart: {
                type: 'bar',
                renderTo: 'regionalclustertrends',
            },
            title: {
                text: 'Cluster Funding by (million $)'
            },
            subtitle: {
                text: 'Source: fts.unocha.org'
            },
            xAxis: {
                categories: ['Education', 'Health', 'Food security', 'Protection', 'Shelter'],
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
            series: [{
               data: [107, 31, 635, 203, 2]
            },]
        
    });

   var clusterpercentages = new Highcharts.Chart({
        chart: {
                type: 'bar',
                renderTo: 'regionalclusterpercentages',
            },
            title: {
                text: 'Cluster Funding by (million $)'
            },
            subtitle: {
                text: 'Source: fts.unocha.org'
            },
            xAxis: {
                categories: ['Education', 'Health', 'Food security', 'Protection', 'Shelter'],
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
            series: [{
               data: [107, 31, 635, 203, 2]
            },]
        
    });

   var donorfundingchart = new Highcharts.Chart({
        chart: {
                type: 'bar',
                renderTo: 'regionaldonortrends',
            },
            title: {
                text: 'Cluster Funding by (million $)'
            },
            subtitle: {
                text: 'Source: fts.unocha.org'
            },
            xAxis: {
                categories: [
                'United States', 
                'United Kingdom', 
                'European Commission', 
                'Japan', 
                'Denmark',
                'Canada',
                'Others',
                'Sweden',
                'Germany',
                'Ireland',
                'Norway',
                'Switzerland',
                'Carry-Over'],
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
            series: [{
               data: [
               107, 31, 635, 203, 2, 65, 65, 65, 65, 65, 65, 65, 65]
            },]
        
    });
});