var mapsHandler ={};

mapsHandler.init = function(){
	var data = {};
	var countryCodes = _.map(gon.user_countries, function(country){
		return country.country_code;
	});

	countryCodes.forEach(function(countryCode){
		data[countryCode] = 100;
	});

	

	var maps = jQuery('#vmap').vectorMap({
	    map: 'world_en',
	    backgroundColor: '#a5bfdd',
	    color: '#ffffff',
	    hoverOpacity: 0.7,
	    selectedColor: '#666666',
	    enableZoom: true,
	    showTooltip: true,
	    values: data,
	    scaleColors: ['#FFFF99', '#FF0000'],
	    normalizeFunction: 'linear',
     	onRegionClick: function(element, code, region){
        var country = {};
        country[code] = '#FF0000';
        jQuery('#vmap').vectorMap('set', 'colors',country);
        if(gon.edit){
	        $.post('/' + gon.user_id + '/maps', {
	        	country_code: code
	        })
        }
	    }
	});	
}

$(function(){
	mapsHandler.init();
});