$(function(){
	$('.team__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		infinite: false,
		adaptiveHeight: true,
		responsive:[
			{
				breakpoint: 490,
				settings: {
					slidesToShow: 1
				}
			}
		]
	})


})