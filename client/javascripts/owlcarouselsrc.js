		$(document).ready(function(){
			var owl = $('#owl');
			owl.owlCarousel({
				items:1,
				loop:true,
				//autoplay:true,
				//autoplayTimeout:5000,
				smartSpeed:500
			});
			$('.next').on('click',function(){
				owl.trigger('next.owl.core')
			})
			$('.prev').on('click',function(){
				owl.trigger('prev.owl.core')
			})
      $('#features').removeClass('active');
      $('#sign_in').removeClass('active');
      $('#home').addClass('active');
		});
