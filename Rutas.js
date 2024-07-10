class Ruta {
  constructor(ubicacionInicial, ubicacionFinal, distancia) {
    this.ubicacionInicial = ubicacionInicial;
    this.ubicacionFinal = ubicacionFinal;
    this.distancia = distancia;
  }
  //set para mostrar
  setubicacionInicial(ub1){
    this.ubicacionInicial=ub1
  }
  //get es para guardar
  getubicacionInicial(){
    return this.ubicacionInicial
  }
  
//---------------------------------------------//
  setubicacionFinal(ub1){
     this.ubicacionFinal=ub1
  }
  getubicacionFinal(){
    return this.ubicacionFinal
  }
//--------------------------------------------//
  setdistancia(dist){
    this.distancia=dist
  }
  getdistancia(){
    return this.distancia
  }
}
//instancia----------------------------------------------//
let ruta = new Ruta("El mirador","Los comuneros","2km");
console.log(ruta.getubicacionInicial());
ruta.setubicacionInicial("La Esmeralda");
console.log(ruta.getubicacionInicial())
//---------------------------------------//
console.log(ruta.getdistancia());
ruta.setdistancia("15km")
console.log(ruta.getdistancia());
//----------------------------------------//
console.log(ruta.getubicacionFinal());
ruta.setubicacionFinal("La Paz")
console.log(ruta.getubicacionFinal());

