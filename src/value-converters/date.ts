import* as moment from "moment";
import 'moment/locale/es';

moment.locale('es');
export class DateValueConverter {
  
  toView(value, {method}) {
    
    if(method == 'fromNow'){
      return moment(value).fromNow();
    }

    else if (method == 'format') {
      return moment(value).format('DD-MM-YYYY');
    }

  }

  fromView(value) {

  }

}

