export const valida = (input) => {
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }
}

const validadores = {
    nacimiento: (input) => verificarMayoriaEdad(input),
}


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
    if(!isMayorEdad(fechaUsuario)){
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
