import { Empleado } from "./Empleado.js";

export class Gerente extends Empleado {
  constructor(nombre, dni) {
    super(nombre, dni);
  }

  verBonificacion() {
    let bono = 10;
    return super._verBonificacion(bono);
}
}
