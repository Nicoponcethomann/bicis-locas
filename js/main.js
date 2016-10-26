function validateForm(){
	/* Instrucciones
	Todos los campos son obligatorios, excepto los dos últimos.
	Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
	Para los campos nombre y apellido la primera letra debe ser mayúscula
	Validar que el campo email tenga un formato válido. Ej: name@domain.com
	El campo password debe tener al menos 6 caracteres
	El campo password no puede ser igual a "password" ó "123456" ó "098754"
	El valor seleccionado de bicis, debe ser una de las opciones presentadas
	Si algún campo presenta error debe informarse al usuario por medio de un alert. */


	// Validar name, lastname, email y password no están vacíos
	var obligatoryInputs = [document.getElementById("name"), document.getElementById("lastname"), document.getElementById("input-email"), document.getElementById("input-password")];
	var error;

	for (var i = 0; i < obligatoryInputs.length; i++){
		if (obligatoryInputs[i].value == ""){
			error = "Por favor completa los campos vacíos";
			alert(error);
			return false;
		}
	}

  // Validar name y last name 
  var name = document.getElementById("name");
  var lastName = document.getElementById("lastname");
  var letters = /^[a-zA-Z]+$/;
  
  // Validar si name y last name poseen caracteres de tipo alfabético 
	if (!name.value.match(letters)){
		alert("Caracteres inválidos en tu nombre");
		return false;
	}

	if (!lastName.value.match(letters)){
		alert("Caracteres inválidos en tu apellido");
		return false;
	}

	// Validar la primera letra del name y last name como mayúsculas
	// Revisar por qué en la consola lee charAt (0) como una función y no deja que funcione
	var upperCaseLetters = /[A-Z]/;
	var upperCaseName = name.charAt(0);
	var upperCaseLastName = lastName.charAt(0);

	if(!(upperCaseLetters.test(upperCaseName.value))){
		alert("La primera letra de tu nombre debe ser en mayúscula");
		return false;
	}

	if(!(upperCaseLetters.test(upperCaseLastName.value))){
		alert("La primera letra de tu apellido deber ser en mayúscula");
		return false;
	}


	// Validar que email tenga formato válido 
  var regularExpressions = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
  var mail = document.getElementById("input-email").value;

  if (!regularExpressions.test(mail)){
		errorMail = "Formato inválido de email";
		alert(errorMail);
		return false;
	}

	//Validar password
	// Revisar las expresiones y ver por qué el for de la línea 74 lo salta (o toma como true)
  var password = document.getElementById("input-password");
  var expressionsMinPassword = /.{6,}/;
  var invalidExpressionsPassword = [/["password"]/, /[1-6]/, /[098754]/];

  for (var i=0; i < expressionsMinPassword.length; i++){
  	if (expressionsMinPassword[i].test(password) === false){
  		alert("Tu contraseña es muy corta. Debe tener al menos 6 dígitos");
  		return false;
  	}
  }

  for (var i=0; i < invalidExpressionsPassword.length; i++){
  	if (invalidExpressionsPassword[i].test(password)){
  	alert("Cambia tu contraseña a una más segura");
  	return false;
  	}
  }
  
  // Validar campo "Selecciona tu bici" 
  var bikeType = document.getElementsByTagName("select");
  var errorBike;

  for (var i = 0; i < bikeType.length; i++){
  	if(bikeType[i].value == "0"){
  		errorBike = "Por favor elige un tipo de bicicleta";
  		alert(errorBike);
  		return false;
  	}
  } 

}