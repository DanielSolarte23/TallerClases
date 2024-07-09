class Prestamo {
  constructorporDefecto(
    documentoUsuario, 
    nombreUsuario, 
    valorPrestamo,
    valorPInteres,
    valorInteres,
    fechaPrestamo,
    numeroCuotas) {
    this.documentoUsuario = documentoUsuario;
    this.nombreUsuario = nombreUsuario;
    this.valorPrestamo = valorPrestamo;
    this.valorPInteres = valorPInteres;
    this.valorInteres = valorInteres;
    this.fechaPrestamo = fechaPrestamo;
    this.numeroCuotas = numeroCuotas;
}
  contructorConDocyNom(
    documentoUsuario, 
    nombreUsuario,
  ) {
    this.documentoUsuario = documentoUsuario;
    this.nombreUsuario = nombreUsuario;
  }
  
  calcularValorTotal() {
    let totalInteres = this.valorInteres * this.numeroCuotas;
    this.valorPInteres = this.valorPrestamo + totalInteres;
    let ValorTotalPInteres = this.valorPInteres
    console.log(ValorTotalPInteres);
  }

  valorPagarCuotasInteres(){
    let cuotasInteres = this.numeroCuotas / ValorTotalPInteres;
    let ValorCuotas = this.numeroCuotas / this.valorPrestamo

    let totalCuotas = cuotasInteres + ValorCuotas
    console.log(totalCuotas);
}
  valorPagarCuotras(){
    let totalCuotasSinInteres = this.numeroCuotas / this.valorPrestamo
  }
}
