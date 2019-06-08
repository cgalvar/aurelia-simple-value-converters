export class CheckTypeValueConverter {
  toView(fileType, desiredType) {
    
    if(fileType){
      let type = fileType.split('/')[0];
      return type == desiredType;
    }
    

  }

  fromView(value) {

  }
}

