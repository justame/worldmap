var mapsHandler ={};

mapsHandler.init = function(){
	var data = {"ru": 1};

	jQuery('#vmap').vectorMap({
	    map: 'world_en',
	    backgroundColor: null,
	    color: '#ffffff',
	    hoverOpacity: 0.7,
	    selectedColor: '#666666',
	    enableZoom: true,
	    showTooltip: true,
	    values: data,
	    scaleColors: ['#FFFFFF', '#FF0000'],
	    normalizeFunction: 'linear'
	});	
}

$(function(){
	mapsHandler.init();
});