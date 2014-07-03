$(document).ready(function(){
    //Map
    $(function () {

        // Prepare demo data
        var data = [{
            'hc-key': 'ke',
            value: 3
        }, {
            'hc-key': 'ug',
            value: 5
        }, {
            'hc-key': 'sd',
            value: 5
        },
                     {
            'hc-key': 'et',
            value: 5
        }, {
            'hc-key': 'er',
            value: 5
        },{
            'hc-key': 'dj',
            value: 5
        }                , {
            'hc-key': 'ss',
            value: 5
        }, {
            'hc-key': 'bi',
            value: 5
        },
        {
            'hc-key': 'rw',
            value: 20
        }];


        // Initiate the chart
        $('#world-map').highcharts('Map', {

            title: {
                text: null
            },
            

            mapNavigation: {
                enabled: false,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            legend:{enabled:false},
            credits:{enabled:false},
            series: [{
                data: data,
                mapData: Highcharts.maps['custom/africa'],
                joinBy: 'hc-key',
                colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', 
       '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
                allAreas: false,
                name: 'Random data',
                states: {
                    hover: {
                        color: '#BADA55'
                    }
                },
                dataLabels: {
                    enabled: false,
                    format: '{point.name}'
                }
            }]
        });
    });
});
    