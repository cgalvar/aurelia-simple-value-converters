import { Direccion } from "../../services/models";

export class DireccionValueConverter {
  toView(value:Direccion) {

    if(value){
      return `${value.calle.nombre} #${value.numero}`;
    }

  }


  fromView(value:string) {

  }
}

