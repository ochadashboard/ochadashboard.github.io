$(document).ready(function(){
    $.getJSON('data/maps/ken.json', function (geojson) {
        
        // Initiate the chart
        $('#worldmap').highcharts('Map', {
            
            mapNavigation: {
                enabled: true,
                
            },

            colorAxis: {
            },

            series : [{
                mapData: Highcharts.geojson(geojson, 'map'),           
                
            }]
        });
    });


});
    