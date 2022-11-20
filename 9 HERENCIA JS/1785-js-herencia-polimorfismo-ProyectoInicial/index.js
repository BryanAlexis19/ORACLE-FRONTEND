/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./CuentaCorriente.js";
import { CuentaAhorro } from "./CuentaAhorro.js";
import { CuentaNomina } from "./CuenaNomina.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";

const cliente = new Cliente("Leonardo", "13804050", "123224");
const cuentaDeLeonardo = new CuentaCorriente(cliente, "9985", "La Victoria");

const empleado = new Empleado("Juan Perez", '12341234');
const gerente = new Gerente("Marco Mestanza","4534254");
const director = new Director("Pedro Carranza","23231234");