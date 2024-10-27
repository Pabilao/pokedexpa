export class Pokemon {/*Representación de un objeto existente*/ 
/*1.-POO*/ 
/*No movimientos no ataques */
/*Atributos*/
    private id:number;
    private nombre:string;
    private vida:number;
    private defensa:number;
    private ataque:number;
    private tipo:string;

/*♠Constructor♠*/ 
    constructor(id_recibido:number, nombre_recibido:string, vida_recibida:number, defensa_recibida:number, 
        ataque_recibido:number, tipo_recibido:string){
        this.id=id_recibido;//Recibiendo el ID como parametro en mi clase
        this.nombre=nombre_recibido;//Recibiendo el nombre como parametro en mi clase
        this.vida=vida_recibida;//Recibiendo la vida como parametro en mi clase
        this.defensa=defensa_recibida;//Recibiendo la defensa como parametro en mi clase
        this.ataque=ataque_recibido;//Recibiendo el ataque como parametro en mi clase
        this.tipo=tipo_recibido;//Recibiendo el tipo como parametro en mi clase    
    }
    /*◘ ◘ ◘ ◘ ◘*/
    /*Métodos*/
    /*◘ ◘ ◘ ◘ ◘*/
    public atacar(){
        console.log("Estoy atacando ⚔️");
    }
    public defender(){
        console.log("Estoy defendiendo 🛡️")
    }
    public quitarVida(cantidadquitada:number){
        this.vida=this.vida-cantidadquitada;
    }
    public agregarVida(cantidadagregada:number){
        this.vida=this.vida+cantidadagregada;
    }
    public mostrar(){
        console.log(`ID: ${this.id} Nombre: ${this.nombre} Vida: ${this.vida} Ataque: ${this.ataque}
        Defensa: ${this.defensa} Tipo: ${this.tipo}`);
    }
    /*2.-Encapsulamiento */

}
