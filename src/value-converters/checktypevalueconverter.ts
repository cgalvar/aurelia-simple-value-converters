import { FileModel } from "../../services/models";

export class CheckTypeValueConverter {
  toView(file:FileModel, desiredType) {
    
    if(file){
      let type = file.type.split('/')[0];
      return type == desiredType;
    }
    

  }

  fromView(value) {

  }
}

