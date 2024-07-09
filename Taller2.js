class Prestamo {
    // Constructor por defecto
    constructor(
      documentoUsuario,
      nombreUsuario,
      valorPrestamo,
      valorPInteres,
      valorInteres,
      fechaPrestamo,
      numeroCuotas
    ) {
      this.documentoUsuario = documentoUsuario;
      this.nombreUsuario = nombreUsuario;
      this.valorPrestamo = valorPrestamo;
      this.valorPInteres = valorPInteres;
      this.valorInteres = valorInteres;
      this.fechaPrestamo = fechaPrestamo;
      this.numeroCuotas = numeroCuotas;
    }
  
    // Constructor con documento y nombre
    //metodo static para enviar como parametro constructor
    static contructorConDocyNom(documentoUsuario, nombreUsuario) {
      return new Prestamo(documentoUsuario, nombreUsuario);
    }

    //Metodo para calcular valor total
    calcularValorTotal() {
        //en esta linea almacena en una variable totalInteres la multiplicacion del valor prestamo multiplicado por el valor del interes y lo divide por 100 y el resultado de esto lo multiplica por el valor del numero de cuotas
      let totalInteres = (this.valorPrestamo * this.valorInteres) * this.numeroCuotas;
      //en esta linea le asigna el valor de la suma entre el valor del prestamo y el total interes en valorPinteres
      this.valorPInteres = this.valorPrestamo + totalInteres;
      //retorna el valor asignado a valorPInteres
      return this.valorPInteres;
    }
    
    //este método se encarga de informarle al usuario cuanto debe pagar en cada cuota con interés.
    valorPagarCuotasInteres() {
        //en esta linea almacena en la variable cuotasInter la division entre el resultado del metodo anterior por el numero de cuotas
      let cuotasInteres = this.calcularValorTotal() / this.numeroCuotas;
      //retorna el valor de las cuotas
      return cuotasInteres;
    }
  
    //este método se encarga de informarle al usuario cuanto debe pagar en cada cuota sin interés.
    valorPagarCuotas() {
        // en esta linea almacena en la variable total totalCuotasSinInteres el resultado de la division entre valor prestamo y el nuero de cuotas sin interes
      let totalCuotasSinInteres = this.valorPrestamo / this.numeroCuotas;
      return totalCuotasSinInteres;
    }
    
    // este método se encarga de validar si debe dinero y si es así, debe restar del valor total con intereses que debe pagar.
    pagarCuota(valorPagar) {
        //valida si el valor del prestamo con interes es moyor que 0
      if (this.valorPInteres > 0) {
        // si la anterio
        this.valorPInteres -= valorPagar;

        if (this.valorPInteres < 0) {
          this.valorPInteres = 0;
        }
      }
    }
  
    refinanciar(numeroCuotas) {
      this.numeroCuotas = numeroCuotas;
      this.calcularValorTotal();
    }
  
    toString() {
      return `Documento del usuario: ${this.documentoUsuario}\nNombre del usuario: ${this.nombreUsuario}\nValor del préstamo: ${this.valorPrestamo}\nValor del préstamo con intereses: ${this.valorPInteres}\nFecha del préstamo: ${this.fechaPrestamo}\nValor del interés: ${this.valorInteres}\nNúmero de cuotas: ${this.numeroCuotas}`;
    }
  }
  
  // Uso de la clase
  const prestamo1 = new Prestamo(); // Constructor por defecto
  const prestamo2 = Prestamo.contructorConDocyNom('12345678', 'Juan Perez'); // Constructor con documento y nombre
  
  prestamo2.valorPrestamo = 250000;
  prestamo2.valorInteres = 5;
  prestamo2.fechaPrestamo = '2024-07-09';
  prestamo2.numeroCuotas = 12;
  
  console.log(prestamo2.toString());
  console.log('Valor a pagar por cuota con interés:', prestamo2.valorPagarCuotasInteres());
  console.log('Valor a pagar por cuota sin interés:', prestamo2.valorPagarCuotas());
  prestamo2.pagarCuota(prestamo2.valorPagarCuotasInteres());
  console.log('Valor del préstamo con intereses después de pagar una cuota:', prestamo2.valorPInteres);
  prestamo2.refinanciar(24);
  console.log(prestamo2.toString());