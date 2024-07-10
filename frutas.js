class Fruta{
    constructor(color, tamaño, precio, tipo){
        this.color=color
        this.tamaño=tamaño
        this.precio=precio
        this.tipo=tipo
    }

    setColor(color1){
        this.color=color1
    }
    getColor(){
        return this.color
    }
    //----------------------//
    setTamaño(tamaño1){
        this.tamaño=tamaño1
    }
    getTamaño(){
        return this.tamaño
    }
    //-------------------------//
    setPrecio(precio1){
        this.precio=precio1
    }
    getPrecio(){
        return this.precio
    }
    //-------------------------//
    setTipo(tipo1){
        this.tipo=tipo1
    }
    getPrecio(){
        return this.tipo
    }
}

let fruta = new Fruta("Rojo", "5cm", "5000", "Banano")
console.log(fruta.getColor());
fruta.setColor("Amarillo")
console.log(fruta.getColor());


class Pera{
    constructor(sabor, aroma){
        
    }
}

class Manzana{
    constructor(){

    }
}