export const valida = (input) => {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
};

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajeDeError = {
  nombre: {
    valueMissing: "El campo de nombre puede estar vacio",
  },
  email: {
    valueMissing: "El campo de email no puede estar vacio",
    typeMismatch: "El correo no es valido",
  },
  password: {
    valueMissing: "El campo de contraseña no puede estar vacio",
    patterMissmatch:
      "Mínimo 8 caracteres y máximo 12. Al menos una letra y un número",
  },
  nacimiento: {
    valueMissing: "El campo de nacimiento no puede estar vacio",
    customError: "Debe tener al menos 18 anios de edad",
  },
  phoneNumber: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El formato requerido es de 10 dígitos",
  },
  direccion: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "La dirección debe contener entre 4 y 40 caracteres",
  },
};

const validadores = {
  nacimiento: (input) => verificarMayoriaEdad(input),
};

const mostrarMensajeDeError = (tipoDeInput, input) => {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(error);
      console.log(input.validity[error]);
      console.log(mensajeDeError[tipoDeInput][error]);
      mensaje = mensajeDeError[tipoDeInput][error];
    }
  });
  return mensaje;
};

// //Obtener el input de la fecha
// inputNacimiento = window.document.querySelector("#birth");
// //Agregar listener para el input de fecha y llamar a la funcion
// inputNacimiento.addEventListener("blur", (e) => {
//   verificarMayoriaEdad(e.target);
// });

//Identificar evento de cambio de fecha
const verificarMayoriaEdad = (nacDateInput) => {
  const fechaUsuario = new Date(nacDateInput.value);
  let msj = "";
  if (!isMayorEdad(fechaUsuario)) {
    msj = "Debe tener al menos 18 anios";
  }
  nacDateInput.setCustomValidity(msj);
};

const isMayorEdad = (fecha) => {
  const fechaActual = new Date();
  const difFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return difFechas <= fechaActual;
};
