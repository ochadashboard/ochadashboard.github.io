$(window).on('load', function() {
  $('#conflictmap').jHERE({
        enable: ['behavior'],
        center: [52.500556, 13.398889],
        zoom: 8,
        type: 'terrain'
    }).jHERE('marker', [52.500556, 13.338889], {
    	icon: 'http://jhere.net/images/pin-black.png',
        anchor: {x: 12, y: 32},
        click: function(){alert('Hallo from Berlin!');}
    }).jHERE('marker', [48.500556, 13.338889], {
    	icon: 'http://jhere.net/images/pin-black.png',
        anchor: {x: 12, y: 32},
        click: function(){alert('Hallo from Berlin!');}
    });
});