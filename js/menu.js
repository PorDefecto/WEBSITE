$(function(){
	var header= document.getElementById('header');
	var headroom= new Headroom(header);
	headroom.init();
	//menu responsive
	var ancho= $(window).width(),
		enlaces= $('#enlaces'),
		btnmenu= $('#btn-menu'),
		icono= $('#btn-menu .icono');

		if(ancho < 705){
			enlaces.hide();
			icono.addClass('fa-bars');
		}
		btnmenu.on('click', function(e){
			enlaces.slideToggle();
			icono.toggleClass('fa-bars');
			icono.toggleClass('fa-times');

		});

		$(window).on('resize', function(){
			if($(this).width()>688){
				enlaces.show();
				icono.addClass('fa-times');
				icono.removeClass('fa-bars');
			}
			else{
				enlaces.hide();
				icono.addClass('fa-times');
				icono.removeClass('fa-bars');
			}
		});
});