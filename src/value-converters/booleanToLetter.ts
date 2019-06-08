import { DateValueConverter } from './date';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class BooleanToLetterValueConverter {
  constructor(private date: DateValueConverter,
  ) {
  }

  public toView(value) {
   if(value){
     return 'Si';
   }

   else{
     return 'No';
   }

  }

}

