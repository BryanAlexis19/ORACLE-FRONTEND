class Cliente {
  nombrecliente;
  dniCliente;
  rucCliente;
}

//Para hacer una variable privada ponerle guion bajo _ o numeral#

class cuentaCorriente {
  numero;
  #saldo;
  agencia;

  constructor() {
    this.#saldo = 0;
    this.numero = "";
    this.agencia = "";
  }

  depositoEnCuenta(valor) {
    if(valor > 0){
        this.#saldo += valor;
    }else {
        console.log("El valor debe ser mayor a 0");
    }
  }

  retirarDeCuenta(valor) {
    if (valor <= this.#saldo) {
        this.#saldo -= valor;
    } else {
        console.log("Saldo insuficiente para realizar el retiro!")
    }
  }
}

const cliente1 = new Cliente();
cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "12341234";
cliente1.rucCliente = "10065888721";

const cuentaCorriente1 = new cuentaCorriente();
cuentaCorriente1.numero = "232323";
cuentaCorriente1.agencia = 105;
cuentaCorriente1.depositoEnCuenta(500);
cuentaCorriente1.retirarDeCuenta(1000);

console.log(cliente1);
console.log(cuentaCorriente1);
