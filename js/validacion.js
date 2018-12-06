	var formulario= document.getElementById('formulario');
	var nombre = formulario.nombre; 
	var email = formulario.email;
	var mensaje = formulario.mensaje;
	var error= document.getElementById('error');
	var okUno = 'no-valido';
	var okDos = 'no-valido';
	var okTres = 'no-valido';

	var expresionTexto=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
	var expresionCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	function validarNombre(e){
		if (nombre.value === '' || nombre.value == null || !expresionTexto.test(nombre.value)){
			error.style.display = 'block';
			error.innerHTML = error.innerHTML + '<li>Por favor completa el nombre solo con texto</li>';
			e.preventDefault();	
				}else{ 
					okUno = 'valido';
					//alert(okUno);
			}
	}

	function validarEmail(e){
		if (email.value === '' || email.value == null || !expresionCorreo.test(email.value) ) {
    		error.style.display = 'block';
			error.innerHTML = error.innerHTML + '<li>Formato de email es Invalido</li>';
			e.preventDefault();		
   		} else{ 
   			okDos = 'valido';
   			//alert(okDos);
   		}
	}

	function validarMensaje(e){
		if (mensaje.value === '' || mensaje.value == null){
			error.style.display = 'block';
			error.innerHTML = error.innerHTML + '<li>Por favor completa el mensaje</li>';
			e.preventDefault();	
				}else{ 
					okTres = 'valido';
					//alert(okUno);
			}
	}

	var mostrar = document.getElementById('bgventana');
	function desplegar(e){
		mostrar.style.display = 'block';
		formulario.reset();
		e.preventDefault();	
	};
	var mostrarError = document.getElementById('bgventanaFalse');
	function desplegarError(e){
		mostrarError.style.display = 'block';
		formulario.reset();
		e.preventDefault();	
	};

	
	function madre(e){
		if( okUno ==='no-valido' || okDos ==='no-valido' || okTres ==='no-valido'){
				error.innerHTML = '';
				validarNombre(e);
				validarEmail(e);
				validarMensaje(e);
		};
		if( okUno ==='valido' && okDos ==='valido' && okTres ==='valido'){
			e.preventDefault();
			datos = new FormData(formulario);
			console.log( datos.get('nombre') + 'primer console');
			fetch('php/prueba.php',{
				method:'POST',
				body: datos
			})
			.then(res => res.text())
			.then(data => {
				
				console.log('respuestaJS' + data );

				if( data ){
					desplegar(e);
				}else{ desplegarError(e);}
				
			});
			
			console.log( datos.get('email') + 'segundo console');

		};
	};

	formulario.addEventListener('submit', function(e){
		madre(e);
	});

	
