class Coche {
  constructor(marca, modelo, color, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.año = año;
  }
  arrancar() {
    console.log(this.marca, this.modelo);
  }
  detener() {
    console.log(this.color, this.año);
  }
}

let miCoche = new Coche("Toyota", "TXL", "Blanco", 2024);
miCoche.arrancar();
miCoche.detener();


//Ejercicio Clase Persona

class Persona {
  constructor(numDocumento, nombre, apellido, edad) {
    this.numDocumento = numDocumento;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  saludar(){
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
  }
}

let persona1 = new Persona(1060815263, "Jhon","Anaya","25");
let persona2 = new Persona(1061512288, "Catalina","Sanchez","21");
let persona3 = new Persona(1062845586, "Maja","Orozco","28");
let persona4 = new Persona(1061335589, "Mario","Rivera","32");
let persona5 = new Persona(1060884455, "Mafe","Anaya","80");

persona1.saludar()
persona2.saludar()
persona3.saludar()
persona4.saludar()
persona5.saludar()