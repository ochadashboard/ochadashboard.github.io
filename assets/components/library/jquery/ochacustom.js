$(document).ready(function () {
    var currentYear = (new Date).getFullYear();
    $("#year").text( (new Date).getFullYear() );
    
    $(function() {
        var chart;
        var chart2;
        // Create the chart
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart-container',
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
                    enabled:false
                }
            }]
        });

        
    });
    
    chart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'kenyatrends',
            type: 'bar'
        },
        title: {
            text: 'Cluster Funding for Kenya 2014'
        },
        subtitle: {
            text: 'Source: fts.unocha.org'
        },
        xAxis: {
            categories: ['Nominated', 'Approved','Rejected', 'Pending']

        },
        yAxis: {
            labels:
            {
                enabled:false
            }

        },

        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },


        series: [{
            name: 'Employment',
            data: [107, 31, 635, 203]
        }, {
            name: 'Internship',
            data: [973, 914, 4054, 732]
        }]
    });
    
    

});