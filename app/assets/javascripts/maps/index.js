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
					var deleteMap = false;
					countryCodes.forEach(function(countryCode){
						if(countryCode == code){
							deleteMap = true;
							return false;
						}
					});
					if(deleteMap){
						$.ajax({
						  url: '/' + gon.user_id + '/maps/' + code,
						  type: "post",
						  data: {"_method":"delete"}
						});
		        country[code] = '#FFFFFF';
		        jQuery('#vmap').vectorMap('set', 'colors',country);						
					}else{
		        $.post('/' + gon.user_id + '/maps', {
		        	country_code: code
		        })
		        country[code] = '#FF0000';
		        jQuery('#vmap').vectorMap('set', 'colors',country);
					}
        }
	    }
	});	
}

$(function(){
	mapsHandler.init();
});