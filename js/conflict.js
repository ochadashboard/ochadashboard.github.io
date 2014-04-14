$(window).on('load', function() {
  $('#conflictmap').jHERE({
        enable: ['behavior'],
        center: [5.223331, 34.458620],
        zoom: 7,
        type: 'terrain'
    }).jHERE('marker', [5.223331, 34.458620], {
    	icon: 'img/war.png',
        anchor: {x: 12, y: 32},
        click: function(){
            $.scrollTo('#conflict-reports');
            $( "div.conflict-container" ).html("Conflict Report");
        }
    }).jHERE('marker', [4.223331, 33.458620], {
    	icon: 'img/war.png',
        anchor: {x: 12, y: 32},
        click: function(){
            $.scrollTo('#conflict-reports');
            $( "div.conflict-container" ).html("test");
        }
    });
});