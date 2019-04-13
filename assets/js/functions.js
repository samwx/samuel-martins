jQuery(document).ready(function($) {

	$('.open-form').click(function() {

		$('html, body').animate({
			scrollTop: $('#main-header').offset().top
		}, 1000);

		$('.sam-infos').transition({ scale: 0 });
		$('.contact-form').transition({ scale: 1 });

		return false;
	});

	$('.close-btn').click(function(){
		$('.sam-infos').transition({ scale: 1 });
		$('.contact-form').transition({ scale: 0 });

		return false;
	});

	$("#main-form").validate({
		rules: {
			user_name: {
				required: true,
				minlength: 3
			},
			user_email: {
				required: true,
				email: true
			},
			user_phone: {
				required: true,
				minlength: 8
			},
			user_msg: {
				required: true,
				minlength: 10
			}
		},

		messages: {
			user_name: {
				required: "Este campo é de prenchimento obrigatório",
				minlength: "Seu nome precisa de ter mais de 3 caracteres"
			},
			user_email: {
				required: "Este campo é de prenchimento obrigatório",
				email: "Por favor, preencha com um email válido"
			},
			user_phone: {
				required: "Este campo é de prenchimento obrigatório",
				minlength: "Este campo precisa ter no mínimo 8 caracteres"
			},
			user_msg: {
				required: "Este campo é de prenchimento obrigatório",
				minlength: "Sua mensagem precisa ter no mínimo 10 caracteres"
			}
		}
	});

  $('.send-btn').click(function(){
    $('.spinner').fadeIn();
  });

	$('#main-form').ajaxForm({
		success: function(response) {
      console.log(response);
			$("p#mail-msg").html(response);
      $('.spinner').fadeOut();
		}
	});
});
