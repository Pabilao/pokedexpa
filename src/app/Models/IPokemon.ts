export class PokemonModel{
    private id:number;
    private nombre:string;
    private imagen: string;
    private vida:number;
    private defensa:number; 
    private ataque:number;
    private tipo:string;

/*♠Constructor♠*/ 
    constructor(id:number, nombre:string, imagen: string, vida:number, 
        defensa:number, ataque:number, tipo:string){
        this.id=id;//Recibiendo el ID como parametro en mi clase
        this.nombre=nombre;//Recibiendo el nombre como parametro en mi clase
        this.imagen=imagen;
        this.vida=vida;//Recibiendo la vida como parametro en mi clase
        this.defensa=defensa;//Recibiendo la defensa como parametro en mi clase
        this.ataque=ataque;//Recibiendo el ataque como parametro en mi clase
        this.tipo=tipo;//Recibiendo el tipo como parametro en mi clase    
    }
    /*◘ ◘ ◘ ◘ ◘*/
    /*GETTERs*/
    getId(): number{
        return this.id;
    }
    getNombre():string{
        return this.nombre;
    }
        getImagen():string{
        return this.imagen;
    }
    getVida():number{
        return this.vida;
    }
    getDefensa():number{
        return this.defensa;
    }
    getAtaque():number{
        return this.ataque;
    }
    getTipo():string{
        return this.tipo;
    }

    /*SETTERs*/
    setId(id:number): void{
        this.id=id;
    }
    setNombre(nombre:string): void{
        this.nombre=nombre;
    }
    setImagen(imagen:string): void{
        this.imagen=imagen;
    }
    setVida(vida:number): void{
        this.vida=vida;
    }
    setDefensa(defensa:number): void{
        this.defensa=defensa;
    }
    setAtaque(ataque:number): void{
        this.ataque=ataque;
    }
    setTipo(tipo:string): void{
        this.tipo=tipo;
    }


    /*Metodo de clase */
    mostrarPokemon():string{
        return 'ID: ${this.id} Nombre: ${this.nombre} Imagen:${this.vida} Vida: ${this.vida} Ataque: ${this.ataque} Defensa: ${this.defensa} Tipo: ${this.tipo}' 
    }
    
    calcularDaño(pokemonAtacante:PokemonModel):number{
        if(pokemonAtacante.getAtaque()>this.defensa){
            return pokemonAtacante.getAtaque() - this.getDefensa();
        }
        else{
            return 0;
        }
    }
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
