import { DateValueConverter } from './date';
import { autoinject } from 'aurelia-framework';
import { BooleanToLetterValueConverter } from "./booleanToLetter";
import { DireccionValueConverter } from "./direccion";

@autoinject()
export class DataRowValueConverter {
  constructor(private date: DateValueConverter,
    private booleanToLetter: BooleanToLetterValueConverter,
    private direccion: DireccionValueConverter
  ) {
  }

  public toView(value, valueConverter, params) {
    /* JUSTIFICATION: https://stackoverflow.com/questions/38898440/aurelia-dynamically-bound-value-converter#comment-65199423 */
    /* tslint:disable:no-string-literal */
    if (this[valueConverter] && this[valueConverter].toView) {
      return this[valueConverter].toView(value, params);
    } else {
      return value;
    }
  }

  public fromView(value, valueConverter, params) {
    if (this[valueConverter] && this[valueConverter].fromView) {
      return this[valueConverter].fromView(value, params);
    } else {
      return value;
    }
  }
}

