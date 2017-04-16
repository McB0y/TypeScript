interface Hogar{
  cuartos:number;
  wc:number;
  cochera?:boolean;
  limpiar():void;
  pintar?(color:string):void;
}

//De esta manera implementamos la interface en nuestra clase y ademas le agrergamos un par de cosas extra.
class Mansion implements Hogar{
  public let cuartos:number = 15;
  wc:number = 5;
  cochera:boolean = true;
  canchaTenis:boolean = true;
  propieatario:string = "Bruno Mars";
  limpiar():void{
    console.log("Limpiando los " + " " + this.cuartos + " " + "de la mansión");
  }
  pintar(color:string):void{
    console.log("Pintamos la Mansión del color " + this.color);
  };
  fiesta():void{
    console.log("Daremos esta noche una gran fiesta en la mansión");
  }
}


//NOTE: "Es posible extender las interfaces a otras interfaces."
