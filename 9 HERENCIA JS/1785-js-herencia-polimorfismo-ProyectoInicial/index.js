/*Importación de clases*/
import { Cliente } from "./Cliente.js";

import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";


const empleado = new Empleado("Juan Perez", "12341234", 10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado, "12345"));

const gerente = new Gerente("Marco Mestanza", "4534254", 12000);
gerente.asignarClave('6556');
console.log(SistemaAutenticacion.login(gerente, "6556"));


const cliente = new Cliente("Leonardo", "13804050", "123224");
cliente.asignarClave('01111');
console.log(SistemaAutenticacion.login(cliente, "1111"));
