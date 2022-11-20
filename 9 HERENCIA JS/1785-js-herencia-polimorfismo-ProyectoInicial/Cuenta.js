import { Cliente } from "./Cliente.js";
export class Cuenta {
  #cliente;
  numero;
  agencia;
  #saldo;

  set cliente(valor) {
    if (valor instanceof Cliente) this.#cliente = valor;
  }

  get cliente() {
    return this.#cliente;
  }

  constructor(cliente, numero, agencia, saldo) {
    if(this.constructor == Cuenta) {
        throw new Error("No se debe instanciar objetos en la clase cuenta");
    }
    this.cliente = cliente;
    this.numero = numero;
    this.agencia = agencia;
    this.#saldo = saldo;
  }

  depositoEnCuenta(valor) {
    if (valor > 0) this.#saldo += valor;
    return this.#saldo;
  }

  retirarDeCuenta(valor) {
    //Metodo Abstracto
    throw new Error("Se debe llamar el metodo en la clase especializada")
  }

  _retirarDeCuenta(valor,comision) {
    valor = valor * (1+comision/100);
    if (valor <= this.#saldo) this.#saldo -= valor;
    return this.#saldo;
  }



  verSaldo() {
    return this.#saldo;
  }

  transferirParaCuenta(valor, cuentaDestino) {
    this.retirarDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
    valor = 200;
    valor = valor * 1000;
  }

  prueba() {
    console.log("Metodo padre");
  }
}
