$(document).ready(function(){
	$('#popup').modal('show');

	$('#menu a').each( function(index,elemento){
		$(this).css({
			'top':'-200px'
		});

	$(this).animate({
		top:'0'
	}, 1500 + ( index * 500 ) );

	});

	if($(window).width() > 768 ){
		$('#logo_nombre').css({
			opacity:'0',
			marginTop:52
		});
		$('#logo_nombre').animate({
			opacity:'1',
			marginTop:0
		},2000);


	}
	var inicio = $('#inicio').offset().top;
	var autor = $('#autor').offset().top;
	var comprar = $('#comprar').offset().top;
	var resumen = $('#resumen').offset().top;
	var contacto = $('#contacto').offset().top;
	
	$('#btn-inicio').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: inicio
		},2000);
	});
	$('#btn-autor').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: autor
		},2000);
	});
	$('#btn-comprar').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: comprar
		},2000);
	});
	$('#compra').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: comprar
		},2000);
	});
	$('#btn-resumen').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: resumen
		},2000);
	});
	$('#btn-prensa').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto
		},2000);
	});
	$('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto
		},2000);
	});

	/*funcion ir arriba*/

		$('#subir').click(function(){
			$('body, html').animate({
				scrollTop:'0px'
			},500);
		});
		$(window).scroll(function(){
			if( $(this).scrollTop() > 500 ){
				$('.ir-arriba').slideDown(500);
			}else{
				$('.ir-arriba').slideUp(500);
			}
		});

	/*Funcionalidad del reproductor de audio*/
	
	var audio = document.getElementById('audio');
	var btnPlay = document.getElementById('btnPlay');
	var icono = document.getElementById('icono');
	var tiempo = document.getElementById('tiempo');
	var valumen = document.getElementById('volumen');
	/*agrego a la barra de tiempo el atributo max para decirle que el tiempo maximo de duracion va a ser el del audio.duration*/
	tiempo.setAttribute('max', audio.duration);

	btnPlay.addEventListener('click', function(){
			if(icono.className=='fa fa-play'){
					audio.play();
					var intervalo = setInterval(barraTiempo,1);
			}else{
				audio.pause();
			}
			/*hago una lista con classList de las clases que tiene el div y con toggle alterno entre uan y otra dependiendo si es pausa o play*/
			icono.classList.toggle('fa-play');
			icono.classList.toggle('fa-pause');
		});
			/*modifico la posicion del input con el metodo currentTime  y le asigno el value de la posion de tiempo al audio en su tiempo actual para eso es currenTime*/
		tiempo.addEventListener('change', function(){
			audio.currentTime = tiempo.value;

		});

		/*la funcion barratiempo lo que hace es que asigna al tiempo la posicion del audio y luego cuando doy play la ejecuto con un setInterval cada un milisegundo.*/
		function barraTiempo(){
			tiempo.value = audio.currentTime;
			if(audio.ended){
				icono.className='fa fa-play';
				tiempo.value =tiempo.min;
			}
		}

		valumen.addEventListener('change', function(){
			audio.volume = valumen.value;
		});


});